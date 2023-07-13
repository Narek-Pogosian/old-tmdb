export function sortAndFilterByPopularity<
  T extends { poster_path: string; popularity: number }
>(
  items: T[],
  minimumPopularity: number
): (T & { poster_path: string; popularity: number })[] {
  return items
    .filter(
      (item) => item.poster_path !== null && item.popularity > minimumPopularity
    )
    .sort((a, b) => b.popularity - a.popularity);
}
