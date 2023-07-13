export function sortAndFilterByPopularity<
  T extends { poster_path: string; popularity: number }
>(items: T[], minimumPopularity: number): T[] {
  return items
    .filter(
      (item) => item.poster_path !== null && item.popularity > minimumPopularity
    )
    .sort((a, b) => b.popularity - a.popularity);
}
