import axios from "../../../utils/axios";
import React, { useEffect, useState } from "react";

function Banner() {
  const [banner, setBanner] = useState([]);

  const getBanner = async () => {
    const { data } = await axios.get(`trending/all/day`);
    setBanner(data.results[(Math.random() * data.results.length).toFixed()]);
  };
  useEffect(() => {
    getBanner();
  }, []);

  return (
    <div className="relative w-full h-[50vh] z-10">
      <img
        className="w-full h-full absolute top-0 left-0 object-cover object-center"
        src={`https://image.tmdb.org/t/p/original/${
          banner.backdrop_path || banner.profile_path
        })`}
        alt=""
      />
    </div>
  );
}

export default Banner;
