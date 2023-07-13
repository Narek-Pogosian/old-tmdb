import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieDetails from "./pages/MovieDetails";
import TvDetails from "./pages/TvDetails";
import Person from "./pages/Person";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";

const App = () => {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <div className="container flex-1 py-4">
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<TvShows />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/tv/:id" element={<TvDetails />} />
          <Route path="/person/:id" element={<Person />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
