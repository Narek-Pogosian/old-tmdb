import { useEffect, useState } from "react";
import { SortOption } from "../types";
import { useSearchParams } from "react-router-dom";
import { sortOptions } from "../sortOptions";

export const useFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // sortValue is object
  const [sortValue, setSortValue] = useState<SortOption>(sortOptions[0]);
  const [genres, setGenres] = useState<number[]>([]);
  const [userScore, setUserScore] = useState<string | null>(null);
  const [minimumVotes, setMinimumVotes] = useState<string | null>(null);

  // Resets the states in case u click on movies link from the movies page
  useEffect(() => {
    // with_genres=1,2,3, map to array
    const paramsGenres = searchParams
      .get("with_genres")
      ?.split(",")
      .map((value) => Number(value));

    const currentSortValue = searchParams.get("sort_by");
    // index will be -1 if no searchparams
    const index = sortOptions.findIndex(
      (option) => option.value === currentSortValue
    );

    setSortValue(index >= 0 ? sortOptions[index] : sortOptions[0]);
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
      params.set("page", "1");
      return params;
    });
  };

  return {
    setGenres,
    setMinimumVotes,
    setNewSearchParams,
    setSortValue,
    setUserScore,
    sortValue,
    genres,
    userScore,
    minimumVotes,
  };
};
