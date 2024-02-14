import React from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "./partials/Searchbar";

function Trending() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen p-8">
      <div className="flex w-full items-center justify-between">
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
      </div>
    </div>
  );
}

export default Trending;
