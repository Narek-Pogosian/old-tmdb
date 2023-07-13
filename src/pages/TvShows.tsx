import { useInfiniteQuery } from "@tanstack/react-query";
import { getTvShows } from "../lib/services/tmdb";
import Card from "../components/shared/Card";
import { TvShow } from "../types/type";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollLoading from "../components/shared/ScrollLoading";
import LoadingPage from "../components/LoadingPage";
import Layout from "../components/MovieTv/Layout";
import List from "../components/shared/List";
import { useSearchParams } from "react-router-dom";

const TvShows = () => {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ["tvshows", queryString],
      queryFn: ({ pageParam = 1 }) =>
        getTvShows(`page=${String(pageParam)}&${queryString}`),
      getNextPageParam: (lastPage) => {
        if (lastPage.page === lastPage.total_pages) {
          return false;
        }
        return lastPage.page + 1;
      },
    });

  const tvshows = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.results];
  }, [] as TvShow[]);

  return (
    <Layout>
      {isLoading && !data && <LoadingPage />}

      {isError && (
        <p className="w-full text-lg font-semibold text-center capitalize balance md:text-2xl pt-14">
          Something went wrong
        </p>
      )}

      {tvshows && tvshows.length === 0 && (
        <p className="w-full text-lg font-semibold text-center capitalize balance md:text-2xl pt-14">
          No Movies found for that query
        </p>
      )}

      {tvshows && tvshows.length > 0 && (
        <InfiniteScroll
          dataLength={tvshows ? tvshows.length : 0}
          next={() => fetchNextPage()}
          hasMore={hasNextPage!}
          loader={<ScrollLoading />}
          endMessage={
            tvshows?.length > 20 ? (
              <p className="py-6 font-semibold text-center">
                Yay! You have seen it all
              </p>
            ) : (
              ""
            )
          }
          className="flex-1"
        >
          {tvshows && (
            <List
              items={tvshows}
              render={(tvshow) => (
                <Card
                  id={tvshow.id}
                  img={tvshow.poster_path}
                  mediaType="tv"
                  release={tvshow.first_air_date}
                  title={tvshow.name}
                  vote={tvshow.vote_average}
                  key={tvshow.id}
                />
              )}
            />
          )}
        </InfiniteScroll>
      )}
    </Layout>
  );
};

export default TvShows;
