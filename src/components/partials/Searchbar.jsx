import axios from "../../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Searchbar() {
  const [val, setVal] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${val}`);
      setSearches(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSearches();
  }, [val]);
  return (
    <div className="relative">
      <div className="relative h-[8vh] flex items-center justify-end mr-8 mt-3">
        <input
          onChange={(e) => setVal(e.target.value)}
          value={val}
          className="text-white rounded-full py-2 px-3 bg-transparent border border-zinc-600 w-1/3 outline-none  focus:border-[#6556CD]"
          type="text"
          placeholder="Search anything"
        />
        {val.length > 0 && (
          <div onClick={() => setVal("")} className="absolute cursor-pointer">
            <i className="text-[#6556CD] text-3xl mr-2 ri-close-fill"></i>
          </div>
        )}
      </div>
      <div className="flex items-center justify-end mr-8">
        <div className="absolute top-[100%] w-[26vw] bg-[#333238] max-h-[78vh] rounded-lg overflow-y-auto">
          {searches.map((item, index) => {
            return (
              <Link
                key={index}
                className="flex h-full w-full p-2 items-start gap-10"
              >
                <div className="h-[22.8vh] rounded-lg overflow-hidden flex-shrink-0 ">
                  <img
                    className="h-full w-full object-cover"
                    src={
                      item.poster_path ||
                      item.backdrop_path ||
                      item.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${
                            item.poster_path ||
                            item.backdrop_path ||
                            item.profile_path
                          }`
                        : `https://media.istockphoto.com/id/1352945762/vector/no-image-available-like-missing-picture.jpg?s=612x612&w=0&k=20&c=4X-znbt02a8EIdxwDFaxfmKvUhTnLvLMv1i1f3bToog=`
                    }
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <h1 className="text-white text-3xl">
                      {item.original_title || item.title || item.name}
                    </h1>
                  </div>
                  <div className="">
                    <p className="text-white text-xs">{item.overview}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
