import axios from "axios";
import {
  GetGenreRespone,
  Movie,
  MovieDetails,
  Person,
  Response,
  SearchResult,
  TimeWindow,
  TvDetails,
  TvShow,
} from "../../types/type";

export const movieDbClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY as string}`,
  },
});

// * ---------- Trending --------------
export const getTrendingMovies = async (
  timeWindow: TimeWindow
): Promise<Response<Movie>> => {
  const res = await movieDbClient.get(`/trending/movie/${timeWindow}`);

  return res.data;
};

// * ------------ Discover ----------
export const getMovies = async (query = ""): Promise<Response<Movie>> => {
  const res = await movieDbClient.get(
    `/discover/movie?${query}&language=en-US`
  );
  return res.data;
};

export const getTvShows = async (query = ""): Promise<Response<TvShow>> => {
  const res = await movieDbClient.get(`/discover/tv?${query}&language=en-US`);
  return res.data;
};

// * ------------- Search ---------------
export const getSearchResults = async (
  query: string
): Promise<Response<SearchResult>> => {
  const res = await movieDbClient.get(
    `/search/multi?include_adult=false&language=en-US&page=1&query=${query}`
  );
  return res.data;
};

// * ----------- Details --------------
export const getMovieDetails = async (id = ""): Promise<MovieDetails> => {
  const res = await movieDbClient.get(
    `/movie/${id}?append_to_response=credits,videos,images`
  );
  return res.data;
};

export const getTvDetails = async (id = ""): Promise<TvDetails> => {
  const res = await movieDbClient.get(
    `/tv/${id}?append_to_response=credits,videos,images`
  );
  return res.data;
};

export const getPersonDetails = async (id = ""): Promise<Person> => {
  const res = await movieDbClient.get(
    `/person/${id}?append_to_response=external_ids,combined_credits`
  );
  return res.data;
};

// * --------- Genres ----------
export const getGenres = async (
  mediaType: string
): Promise<GetGenreRespone> => {
  const res = await movieDbClient.get(`/genre/${mediaType}/list`);
  return res.data;
};
