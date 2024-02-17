import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "./partials/Searchbar";
import Dropdown from "./partials/Dropdown";
import Card from "./partials/Card";
import axios from "../../utils/axios";

function Trending() {
  const navigate = useNavigate();
  const [trending, setTrending] = useState([]);
  const [category, setcategory] = useState("all");

  const getTrending = async () => {
    const { data } = await axios.get(`trending/${category}/day`);
    setTrending(data.results);
  };
  useEffect(() => {
    getTrending();
  }, [category]);

  return (
    <div className="w-screen h-screen overflow-hidden overflow-y-auto">
      <div className="flex w-full items-center justify-between p-8">
        <h1 className="text-2xl text-white">
          <i
            onClick={() => navigate(-1)}
            class="mr-2 cursor-pointer ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <div className="w-[100vw]">
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
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {trending.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Trending;
