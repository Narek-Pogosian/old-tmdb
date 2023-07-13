import { Video } from "../../types/type";

const Trailer = ({ trailer }: { trailer: Video }) => {
  return (
    <iframe
      className="z-50 w-full h-full"
      src={`https://www.youtube-nocookie.com/embed/${trailer.key}`}
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
  );
};

export default Trailer;
