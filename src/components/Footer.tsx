import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-primary">
      <div className="container flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Link to="/">
          <img src="/tmdb.svg" alt="tmdb" width={90} height={40} />
        </Link>
        <p className="text-sm font-semibold">
          This website is powered by the{" "}
          <a
            href="https://developer.themoviedb.org/docs"
            target="_blank"
            className="underline underline-offset-2"
          >
            TMDb Api
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
