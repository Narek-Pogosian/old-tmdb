import SearchBox from "./SearchBox";

const SearchSection = () => {
  return (
    <div className="max-w-4xl py-8 mx-auto">
      <h1 className="mb-8 text-center md:text-left">
        <span className="text-5xl font-bold text-transparent bg-gradient-to-r from-secondary to-tertiary bg-clip-text">
          Welcome.
        </span>{" "}
        <br />
        <span className="text-3xl font-semibold balance">
          Millions of movies, tv shows and people to discover. <br /> Explore
          now.
        </span>
      </h1>
      <SearchBox />
    </div>
  );
};

export default SearchSection;
