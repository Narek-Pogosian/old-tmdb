import { useInfiniteQuery } from "@tanstack/react-query";
import { getMovies } from "../lib/services/tmdb";
import Card from "../components/shared/Card";
import { Movie } from "../types/type";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollLoading from "../components/shared/ScrollLoading";
import LoadingPage from "../components/LoadingPage";
import Layout from "../components/MovieTv/Layout";
import List from "../components/shared/List";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ["movies", queryString],
      queryFn: ({ pageParam = 1 }) =>
        getMovies(`page=${String(pageParam)}&${queryString}`),
      getNextPageParam: (lastPage) => {
        if (lastPage.page === lastPage.total_pages) {
          return false;
        }
        return lastPage.page + 1;
      },
    });

  const movies = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.results];
  }, [] as Movie[]);

  return (
    <Layout>
      {isLoading && !data && <LoadingPage />}

      {isError && (
        <p className="w-full text-lg font-semibold text-center capitalize balance md:text-2xl pt-14">
          Something went wrong
        </p>
      )}

      {movies && movies.length === 0 && (
        <p className="w-full text-lg font-semibold text-center capitalize balance md:text-2xl pt-14">
          No Movies found for that query
        </p>
      )}

      {movies && movies.length > 0 && (
        <InfiniteScroll
          dataLength={movies ? movies.length : 0}
          next={() => fetchNextPage()}
          hasMore={hasNextPage!}
          loader={<ScrollLoading />}
          endMessage={
            movies?.length > 20 ? (
              <p className="py-6 font-semibold text-center">
                Yay! You have seen it all
              </p>
            ) : (
              ""
            )
          }
          className="flex-1"
        >
          {movies && (
            <List
              items={movies}
              render={(movie) => (
                <Card
                  id={movie.id}
                  img={movie.poster_path}
                  mediaType="movie"
                  release={movie.release_date}
                  title={movie.title}
                  vote={movie.vote_average}
                />
              )}
            />
          )}
        </InfiniteScroll>
      )}
    </Layout>
  );
};

export default Movies;
