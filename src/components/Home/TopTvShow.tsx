import { useQuery } from "@tanstack/react-query";
import { getTvShows } from "../../lib/services/tmdb";
import RowList from "../shared/RowList";
import Card from "../shared/Card";
import { useInView } from "react-intersection-observer";

const TopTvShows = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "20px",
  });

  const { data, isLoading } = useQuery(
    ["toptv"],
    () => getTvShows("vote_count.gte=300&sort_by=vote_average.desc"),
    { enabled: inView }
  );

  return (
    <div ref={ref}>
      <h2 className="mb-3 text-xl font-bold">Toprated Tv Shows </h2>
      <RowList
        items={data?.results}
        isLoading={isLoading}
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
