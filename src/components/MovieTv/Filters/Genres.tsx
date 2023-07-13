import { Listbox } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../../../lib/services/tmdb";

type Props = {
  setGenres: (value: number[]) => void;
  genres: number[] | null;
};

const Genres = ({ genres, setGenres }: Props) => {
  // pathname either movie or tv
  const { pathname } = useLocation();

  const { data } = useQuery(["genres", pathname], () => getGenres(pathname));

  return (
    <Listbox
      value={genres}
      onChange={setGenres}
      multiple
      as="div"
      className="relative text-sm"
    >
      <Listbox.Button className="flex items-center justify-between w-full px-4 py-2 mb-2 rounded shadow bg-background dark:text-white">
        <span>Genres</span>
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
            fill="#fff"
          />
        </svg>
      </Listbox.Button>

      <Listbox.Options className="absolute grid w-full grid-cols-2 gap-1 px-2 py-4 border rounded shadow xl:grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 border-primary bg-background top-10 focus:outline-none">
        {data?.genres.map((genre) => (
          <Listbox.Option
            key={genre.id}
            value={genre.id}
            aria-label={genre.name}
            className={({ active }) =>
              `cursor-pointer xl:truncate xl:w-auto w-fit h-fit  ${
                active ? "bg-primary rounded" : ""
              }`
            }
          >
            {({ selected }) => (
              <>
                <span
                  className={`block rounded p-1 ${
                    selected || genres?.includes(genre.id)
                      ? "font-medium bg-white text-primary"
                      : "font-normal"
                  }`}
                >
                  {genre.name}
                </span>
              </>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default Genres;
