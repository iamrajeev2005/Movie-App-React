import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "./partials/Searchbar";
import Dropdown from "./partials/Dropdown";
import Card from "./partials/Card";
import axios from "../../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
function movies() {
  document.title = "Movies";
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [category, setcategory] = useState("now_playing");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getMovies = async () => {
    const { data } = await axios.get(`movie/${category}?page=${page}`);
    if (data.results.length > 0) {
      setMovies((prev) => [...prev, ...data.results]);
      setPage((prev) => prev + 1);
    } else {
      setHasMore(false);
    }
  };

  const fetchMorePage = () => {
    if (movies.length === 0) {
      getMovies();
    } else {
      setPage(page + 1);
      setMovies([]);
      getMovies();
    }
  };

  useEffect(() => {
    fetchMorePage();
  }, [category]);
  return (
    <div className="bg-[#1F1E24] w-full">
      <div className="flex w-full items-center justify-between px-6 py-4 ">
        <h1 className="text-2xl text-white">
          <i
            onClick={() => navigate(-1)}
            className="mr-2 cursor-pointer ri-arrow-left-line"
          ></i>
          Movies
        </h1>
        <div className="w-screen ">
          <Searchbar />
        </div>
        <div>
          <Dropdown
            title="Filter"
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            filter={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>
      <div className="w-screen">
        <InfiniteScroll
          dataLength={movies.length}
          next={getMovies}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div className="flex items-start justify-center flex-wrap gap-10 ">
            {movies.map((item, index) => {
              return (
                <div key={index}>
                  <Card item={item} title={"movie"}/>
                  <div className="text-white font-bold text-xl pt-2 w-[15vw]">
                    {item.name ||
                      item.original_title ||
                      item.title ||
                      item.original_name}
                  </div>
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default movies;
