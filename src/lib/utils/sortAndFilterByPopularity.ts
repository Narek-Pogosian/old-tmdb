export function sortAndFilterByPopularity<T>(
  items: T[],
  minimumPopularity: number
): T[] {
  return items
    .filter(
      (item) => item.poster_path !== null && item.popularity > minimumPopularity
    )
    .sort((a, b) => b.popularity - a.popularity);
}
