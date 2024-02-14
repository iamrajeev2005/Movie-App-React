import React from "react";

function Card({ item }) {
  return (
    <div className="w-[15vw] h-[40vh] rounded-lg overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path})`}
        alt=""
      />
    </div>
  );
}

export default Card;
