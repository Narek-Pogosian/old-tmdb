import { Link } from "react-router-dom";

type Props = {
  id: number;
  img: string;
  name: string;
  character: string;
};

const PersonCard = ({ character, id, img, name }: Props) => {
  return (
    <>
      <Link to={`/person/${id}`}>
        <img
          src={`https://www.themoviedb.org/t/p/w500/${img}`}
          alt=""
          className="w-full duration-200 hover:opacity-70 transit"
          loading="lazy"
        />
      </Link>
      <div className="pt-1">
        <Link to={`person/${id}`} className="block text-sm font-semibold">
          {name}
        </Link>
        <span className="text-xs text-neutral-200">{character}</span>
      </div>
    </>
  );
};

export default PersonCard;
