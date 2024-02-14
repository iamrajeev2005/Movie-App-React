import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "../../../utils/axios";

function Cards() {
  const [cardImg, setCardImg] = useState([]);

  const getCardImg = async () => {
    const { data } = await axios.get(`trending/all/day`);
    setCardImg(data.results);
  };
  useEffect(() => {
    getCardImg();
  }, []);
  return (
    <div className="horizontal-scroll overflow-x-auto">
      <div className=" px-4 w-full h-fit my-2" >
        <h1 className="text-white font-semibold text-2xl py-2">Trending</h1>
        <div className="flex w-[315vw] items-center gap-4">
          {cardImg.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
