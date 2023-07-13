import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center text-center pt-14 ">
      <h1 className="mb-4 text-transparent text-8xl bg-gradient-to-r from-secondary to-tertiary bg-clip-text w-fit">
        Oops!
      </h1>
      {/* <h2 className="text-3xl mb-7">Something went wrong</h2> */}
      <p className="max-w-md mb-10 text-xl text-neutral-200 balance">
        Either something went wrong or the content you are looking for doesn't
        exist.
      </p>

      <Link
        to="/"
        className="px-4 py-3 text-sm font-semibold transition-shadow rounded outline-none w-fit bg-secondary focus:ring-4 focus:ring-secondary/50"
      >
        Go To Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
