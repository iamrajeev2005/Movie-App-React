import React from "react";

function Card({ item }) {
  return (
    <div className="relative group w-[15vw] h-[50vh] rounded-lg overflow-hidden cursor-pointer z-10">
      <img
        className=" w-full h-full object-contain"
        src={`https://image.tmdb.org/t/p/w500${item.poster_path})`}
        alt=""
      />
      <div className="bg-black h-full w-full absolute top-0 opacity-0 z-20 group-hover:opacity-45 transition-all"></div>
    </div>
  );
}

export default Card;
 