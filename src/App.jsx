import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import Tvshows from "./components/Tvshows";
import People from "./components/People";

function App() {
  return (
    <div className="bg-[#1F1E24] w-screen  flex min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<Tvshows />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </div>
  );
}

export default App;
