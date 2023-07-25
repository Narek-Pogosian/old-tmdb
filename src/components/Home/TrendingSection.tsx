import { useQuery } from "@tanstack/react-query";
import { TimeWindow } from "../../types/type";
import { useState } from "react";
import { getTrendingMovies } from "../../lib/services/tmdb";
import RowList from "../shared/RowList";
import Card from "../shared/Card";
import TrendingToggle from "./TrendingToggle";

const TrendingSection = () => {
  const [timeWindow, setTimeWindow] = useState<TimeWindow>("day");

  const { data, isLoading } = useQuery(
    ["trending", timeWindow],
    () => getTrendingMovies(timeWindow),
    {
      refetchOnWindowFocus: true,
    }
  );

  return (
    <div>
      <div className="flex flex-col gap-2 mb-3 sm:gap-5 sm:items-center sm:flex-row">
        <h2 className="text-xl font-bold">Trending</h2>
        <TrendingToggle timeWindow={timeWindow} setTimeWindow={setTimeWindow} />
      </div>
      <RowList
        key={timeWindow}
        items={data?.results}
        isLoading={isLoading}
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

export default TrendingSection;
