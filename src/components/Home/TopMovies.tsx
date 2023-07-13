import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../lib/services/tmdb";
import RowList from "../shared/RowList";
import Card from "../shared/Card";

const TopMovies = () => {
  const { data } = useQuery(["topmovies"], () =>
    getMovies("vote_count.gte=300&sort_by=vote_average.desc")
  );

  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">Toprated Movies </h2>

      <RowList
        items={data?.results}
        render={(movie) => (
          <Card
            img={movie.poster_path}
            id={movie.id}
            mediaType="movie"
            release={movie.release_date}
            title={movie.title}
            vote={movie.vote_average}
          />
        )}
      />
    </div>
  );
};

export default TopMovies;
