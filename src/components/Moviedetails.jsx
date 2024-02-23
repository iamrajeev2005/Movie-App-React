import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSetMovies, resetInfo } from "../store/actions/movieAction";
import { useParams } from "react-router-dom";
import Searchbar from "../components/partials/Searchbar";

function Moviedetails() {
  const { info } = useSelector((state) => state.movie);
  console.log(info);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncSetMovies(id));
    return () => {
      dispatch(resetInfo());
    };
  }, []);
  return info ? (
    <div className="w-screen h-screen relative">
      <img
        className="h-screen w-screen opacity-30 object-cover object-center"
        src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}`}
        alt=""
      />
      <div className="flex items-start absolute top-0 left-0">
        <div className=" w-[40vw] object-cover mt-20 ml-20">
          <img
            src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path}`}
            alt=""
          />
        </div>
        <div className="mt-20 ml-20 flex flex-col items-start">
          <div className=" flex items-end justify-center">
            <h1 className="text-5xl font-bold text-white">
              {info.detail.name ||
                info.detail.original_title ||
                info.detail.title ||
                info.detail.original_name}
            </h1>
            <h3 className="text-xl font-bold text-zinc-200">
              ({info.detail.release_date})
            </h3>
          </div>
          <p className="text-md font-semibold mt-6 text-white w-[70%]">
            {info.detail.overview}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

export default Moviedetails;
