import SearchSection from "../components/Home/SearchSection";
import TopMovies from "../components/Home/TopMovies";
import TopTvShows from "../components/Home/TopTvShow";
import TrendingSection from "../components/Home/TrendingSection";

const Home = () => {
  return (
    <>
      <SearchSection />
      <div className="pt-16 space-y-20">
        <TrendingSection />
        <TopMovies />
        <TopTvShows />
      </div>
    </>
  );
};

export default Home;
