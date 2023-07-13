import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTvDetails } from "../lib/services/tmdb";
import DetailsInfo from "../components/MovieTvDetails/DetailsInfo";
import RowList from "../components/shared/RowList";
import PersonCard from "../components/shared/PersonCard";
import LoadingPage from "../components/LoadingPage";
import ErrorPage from "../components/ErrorPage";

const TvDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError, isSuccess } = useQuery(
    ["movie", id],
    () => getTvDetails(id),
    {
      select: (data) => {
        return {
          ...data,
          videos: data.videos.results.filter((v) => v.type === "Trailer"),
        };
      },
    }
  );

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  if (isSuccess) {
    return (
      <>
        <DetailsInfo
          crew={data.credits.crew}
          genres={data.genres}
          poster={data.poster_path}
          backdrop={data.backdrop_path}
          overview={data.overview}
          release={data.first_air_date}
          title={data.name}
          trailer={data.videos[0]}
          vote={data.vote_average}
          voteCount={data.vote_count}
        />
        <h2 className="mb-3 text-2xl font-semibold">Cast</h2>
        <RowList
          items={data.credits.cast
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 15)}
          render={(person) => (
            <PersonCard
              id={person.id}
              character={person.character}
              img={person.profile_path}
              name={person.name}
            />
          )}
        />
      </>
    );
  }
};

export default TvDetails;
