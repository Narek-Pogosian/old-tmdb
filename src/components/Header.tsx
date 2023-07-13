import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 py-4 border-b bg-background border-primary">
      <div className="container flex items-center gap-8">
        <Link to="/">
          <img src="/tmdb.svg" alt="tmdb" width={70} height={40} />
        </Link>
        <div className="flex gap-4">
          <Link to="/movie" className="text-sm font-semibold">
            Movies
          </Link>
          <Link to="/tv" className="text-sm font-semibold">
            Tv Shows
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
