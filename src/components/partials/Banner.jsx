import { Link } from "react-router-dom";
import axios from "../../../utils/axios";
import React, { useEffect, useState } from "react";

function Banner() {
  const [banner, setBanner] = useState([]);

  const getBanner = async () => {
    const { data } = await axios.get(`trending/all/day`);
    setBanner(data.results[Math.floor(Math.random() * data.results.length)]);
  };
  useEffect(() => {
    getBanner();
  }, []);

  return (
    <div className="relative w-full h-[50vh]">
      <div className="relative w-full h-full">
        <img
          className=" w-full h-full object-cover object-center"
          src={`https://image.tmdb.org/t/p/original/${
            banner.backdrop_path || banner.profile_path
          })`}
          alt=""
        />
        <div
          style={{
            background: `linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.4),rgba(0,0,0,.7))`,
          }}
          className="absolute top-0 left-0 w-full h-full z-10"
        ></div>
        <div className="absolute z-20 bottom-[10%] left-[2%] text-white flex flex-col gap-4">
          <h1 className="text-6xl font-semibold">
            {banner.name ||
              banner.original_title ||
              banner.title ||
              banner.original_name}
          </h1>
          <p className="text-sm font-semibold w-[80%]">{banner.overview}</p>
          <Link
            to={`${banner.media_type}/details/${banner.id}`}
            className="bg-[#6556CD] text-white w-fit py-2 px-3 rounded-md font-semibold"
          >
            <i className="ri-play-fill"></i> Watch trailer
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
