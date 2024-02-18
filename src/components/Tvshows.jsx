import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "./partials/Searchbar";
import Dropdown from "./partials/Dropdown";
import Card from "./partials/Card";
import axios from "../../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
function Tvshows() {
  document.title = "Tv-shows";
  const navigate = useNavigate();
  const [tv, setTv] = useState([]);
  const [category, setcategory] = useState("airing_today");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTv = async () => {
    const { data } = await axios.get(`tv/${category}?page=${page}`);
    if (data.results.length > 0) {
      setTv((prev) => [...prev, ...data.results]);
      setPage((prev) => prev + 1);
    } else {
      setHasMore(false);
    }
  };

  const fetchMorePage = () => {
    if (tv.length === 0) {
      getTv();
    } else {
      setPage(page + 1);
      setTv([]);
      getTv();
    }
  };

  useEffect(() => {
    fetchMorePage();
  }, [category]);
  return (
    <div className="bg-[#1F1E24] w-full">
      <div className="flex w-full items-center justify-between px-6 py-4 ">
        <h1 className="text-2xl text-white whitespace-nowrap">
          <i
            onClick={() => navigate(-1)}
            className="mr-2 cursor-pointer ri-arrow-left-line"
          ></i>
          Tv Shows
        </h1>
        <div className="w-screen ">
          <Searchbar />
        </div>
        <div>
          <Dropdown
            title="Filter"
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            filter={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>
      <div className="w-screen">
        <InfiniteScroll
          dataLength={tv.length}
          next={getTv}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div className="flex items-start justify-center flex-wrap gap-10 ">
            {tv.map((item, index) => {
              return (
                <div key={index}>
                  <Card item={item} />
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

export default Tvshows;
