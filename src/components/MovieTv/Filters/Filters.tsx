import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { sortOptions } from "../../../lib/data/sortOptions";
import { SortOptionType } from "../../../types/type";
import SortOptions from "./SortOptions";
import VoteRange from "./VoteRange";
import ScoreRange from "./ScoreRange";
import Genres from "./Genres";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // sortValue is object
  const [sortValue, setSortValue] = useState<SortOptionType>(sortOptions[0]!);
  const [genres, setGenres] = useState<number[]>([]);
  const [userScore, setUserScore] = useState<string | null>(null);
  const [minimumVotes, setMinimumVotes] = useState<string | null>(null);

  // Gets the states from the url params
  useEffect(() => {
    // with_genres=1,2,3, map to array
    const paramsGenres = searchParams
      .get("with_genres")
      ?.split(",")
      .map((value) => Number(value));

    const currentSortValue = searchParams.get("sort_by");
    const index = sortOptions.findIndex(
      (option) => option.value === currentSortValue
    );

    setSortValue(index >= 0 ? sortOptions[index]! : sortOptions[0]!);

    setGenres(paramsGenres || []);
    setUserScore(searchParams.get("vote_average.gte") || null);
    setMinimumVotes(searchParams.get("vote_count.gte") || null);
  }, [searchParams]);

  const setNewSearchParams = () => {
    setSearchParams((params) => {
      if (userScore) params.set("vote_average.gte", userScore);

      if (minimumVotes) params.set("vote_count.gte", minimumVotes);

      if (genres.length > 0) {
        params.set("with_genres", genres.join(","));
      } else {
        params.delete("with_genres");
      }

      params.set("sort_by", sortValue.value);
      return params;
    });
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1 sm:gap-x-8">
      <SortOptions sortValue={sortValue} setSortValue={setSortValue} />
      <Genres genres={genres} setGenres={setGenres} />
      <ScoreRange setUserScore={setUserScore} />
      <VoteRange setMinimumVotes={setMinimumVotes} />
      <button
        onClick={setNewSearchParams}
        className="py-2 mt-4 text-lg font-semibold transition-opacity rounded-full xl:col-span-1 sm:col-span-2 hover:opacity-70 bg-secondary"
      >
        Search
      </button>
    </div>
  );
};

export default Filters;
