import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "../../../utils/axios";
import Dropdown from "./Dropdown";

function Cards() {
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
    <div>
      <div className="flex items-center justify-between px-4">
        <h1 className="text-white font-semibold text-2xl py-2 ">Trending</h1>
        <Dropdown
          title="Filter"
          options={["tv", "movie", "all"]}
          filter={(e) => setcategory(e.target.value)}
        />
      </div>
      <div className="horizontal-scroll overflow-x-auto">
        <div className=" px-4 w-full h-fit my-2">
          <div className="flex w-fit items-center gap-4">
            {trending.map((item, index) => {
              return <Card key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
