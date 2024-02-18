import React from "react";

function Card({ item }) {
  return (
    <div className="relative group w-[15vw] h-[50vh] rounded-lg overflow-hidden cursor-pointer z-10">
      <img
        className=" w-full h-full object-cover"
        src={
          item.poster_path || item.backdrop_path || item.profile_path
            ? `https://image.tmdb.org/t/p/w500/${
                item.poster_path || item.backdrop_path || item.profile_path
              }`
            : `https://media.istockphoto.com/id/1352945762/vector/no-image-available-like-missing-picture.jpg?s=612x612&w=0&k=20&c=4X-znbt02a8EIdxwDFaxfmKvUhTnLvLMv1i1f3bToog=`
        }
        alt=""
      />
      <div className="bg-black h-full w-full absolute top-0 opacity-0 z-20 group-hover:opacity-45 transition-all"></div>
    </div>
  );
}

export default Card;
