import { Link } from "react-router-dom";

type Props = {
  mediaType: string;
  id: number;
  img: string;
  title: string;
  release: string;
  vote: number;
};

const Card = ({ img, title, release, vote, mediaType, id }: Props) => {
  return (
    <div className="flex flex-col h-full">
      <Link to={`/${mediaType}/${id}`} className="flex-1">
        {img ? (
          <img
            src={`https://www.themoviedb.org/t/p/w500/${img}`}
            alt=""
            className="w-full duration-200 hover:opacity-70 transit"
            loading="lazy"
          />
        ) : (
          <div className="grid h-full bg-opacity-50 bg-neutral-400 place-content-center">
            <img src="/no-image.svg" alt="" />
          </div>
        )}
      </Link>
      <div className="pt-1">
        <Link
          to={`${mediaType}/${id}`}
          className="text-sm leading-[2px] font-semibold"
        >
          {title}
        </Link>
        <div className="space-x-2 text-xs divide-x-[1px] divide-neutral-400 text-neutral-400">
          <span>
            <span className="mr-1 text-base text-tertiary">&#9733;</span>
            <span>{vote.toFixed(1)}</span>
          </span>
          <span className="pl-1"> {release}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
