import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import { newDate } from "../../lib/utils/newDate";
import { MovieCrew, Genre, Video } from "../../types/type";
import TrailerModal from "./TrailerModal";

type Props = {
  poster: string;
  backdrop: string;
  title: string;
  vote: number;
  voteCount: number;
  release: string;
  genres: Genre[];
  overview: string;
  crew: MovieCrew[];
  trailer: Video | undefined;
};

const DetailsInfo = ({
  poster,
  backdrop,
  crew,
  genres,
  overview,
  release,
  title,
  trailer,
  vote,
  voteCount,
}: Props) => {
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex flex-col gap-6 md:gap-10 lg:gap-20 md:pt-10 md:flex-row pb-14">
      {isTablet ? (
        poster ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster}`}
            alt={title}
            className="w-64 h-fit"
            width={256}
          />
        ) : (
          <div className="grid h-[320px] w-56 bg-neutral-200/10 place-content-center">
            <img src="/no-image.svg" alt="" />
          </div>
        )
      ) : backdrop ? (
        <img
          src={`https://image.tmdb.org/t/p/w1000_and_h450_multi_faces/${backdrop}`}
          alt=""
        />
      ) : (
        <div className="grid w-full h-44 bg-neutral-200/10 place-content-center">
          <img src="/no-image.svg" alt="" />
        </div>
      )}

      <div>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div className="space-x-2 text-sm mb-5 divide-x-[1px] divide-neutral-400 text-neutral-400">
          <span>
            <span className="mr-1 text-base text-secondary">&#9733;</span>
            <span>
              {`${vote.toFixed(1)} / ${voteCount} ${
                voteCount === 1 ? "Vote" : "Votes"
              }`}
            </span>
          </span>
          <span className="pl-1"> {newDate(release)}</span>
          <span className="pl-1">
            {" "}
            {genres.map((genre) => genre.name).join(", ")}{" "}
          </span>
        </div>
        <p className="max-w-2xl mb-4 text-sm leading-6 md:mb-8 text-neutral-100">
          {overview}
        </p>

        <div className="mb-8">
          <h3 className="mb-2 font-semibold">Featured Crew</h3>
          <div className="flex flex-wrap gap-6">
            {crew
              .sort((a, b) => b.popularity - a.popularity)
              .slice(0, 3)
              .map((person, i) => (
                <div className="text-sm" key={i}>
                  <Link
                    to={`/person/${person.id}`}
                    className="block hover:underline"
                  >
                    {person.name}
                  </Link>
                  <span className="text-xs text-neutral-400">{person.job}</span>
                </div>
              ))}
          </div>
        </div>

        {trailer && <TrailerModal trailer={trailer} />}
      </div>
    </div>
  );
};

export default DetailsInfo;
