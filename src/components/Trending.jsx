import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "./partials/Searchbar";
import Dropdown from "./partials/Dropdown";
import Card from "./partials/Card";
import axios from "../../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  const navigate = useNavigate();
  const [trending, setTrending] = useState([]);
  const [category, setcategory] = useState("all");

  const getTrending = async () => {
    const { data } = await axios.get(`trending/${category}/day`);
    // setTrending(data.results);
    setTrending((prev) => [...prev, ...data.results]);
  };
  console.log(trending);
  useEffect(() => {
    getTrending();
  }, [category]);

  return (
    <div className="bg-[#1F1E24] w-full  overflow-hidden overflow-y-auto mx-auto">
      <div className="flex w-full items-center justify-between px-6 py-4 ">
        <h1 className="text-2xl text-white">
          <i
            onClick={() => navigate(-1)}
            className="mr-2 cursor-pointer ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <div className="w-screen ">
          <Searchbar />
        </div>
        <div>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            filter={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>
      <div className="w-screen ">
        <InfiniteScroll
          dataLength={trending.length}
          next={getTrending}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          useWindow={false}
        >
          <div className="flex items-start justify-center flex-wrap gap-10 ">
            {trending.map((item, index) => {
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

export default Trending;
