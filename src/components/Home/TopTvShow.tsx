import { useQuery } from "@tanstack/react-query";
import { getTvShows } from "../../lib/services/tmdb";
import RowList from "../shared/RowList";
import Card from "../shared/Card";

const TopTvShows = () => {
  const { data } = useQuery(["toptv"], () =>
    getTvShows("vote_count.gte=300&sort_by=vote_average.desc")
  );

  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">Toprated Tv Shows </h2>

      <RowList
        items={data?.results}
        render={(movie) => (
          <Card
            img={movie.poster_path}
            id={movie.id}
            mediaType="tv"
            release={movie.first_air_date}
            title={movie.name}
            vote={movie.vote_average}
          />
        )}
      />
    </div>
  );
};

export default TopTvShows;
