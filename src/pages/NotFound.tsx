import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid pt-20 text-center place-content-center">
      <h1 className="mb-3 text-6xl">404</h1>
      <h2 className="mb-8 text-2xl">Page not found</h2>

      <Link
        to="/"
        className="px-4 py-3 text-sm font-semibold transition-shadow rounded outline-none bg-secondary focus:ring-4 focus:ring-secondary/50"
      >
        Go To Homepage
      </Link>
    </div>
  );
};

export default NotFound;
