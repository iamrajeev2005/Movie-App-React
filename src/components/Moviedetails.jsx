import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSetMovies, resetInfo } from "../store/actions/movieAction";
import { Link, useParams } from "react-router-dom";
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
        className="h-screen w-screen opacity-20 object-cover object-center"
        src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}`}
        alt=""
      />
      <div className="flex items-start absolute top-0 left-0">
        <div className="h-1/3 w-1/3 mt-20 ml-20">
          <img
            className="h-full w-full object-cover"
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
          <Link className="bg-white text-black w-fit mt-6 py-3 px-3 rounded-md font-semibold">
            <i className="ri-play-fill"></i> Watch trailer
          </Link>
          <div className="flex items-start gap-5  ">
            <div className="flex items-center">
              <div className="bg-black text-yellow-500 mt-5 rounded-lg py-3 px-5">
                Buy
                <i className="text-yellow-500 ri-arrow-right-s-line"></i>
              </div>
              {info.watchProviders.buy.map((item, index) => {
                return (
                  <div key={index} className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-lg ml-4 mt-4"
                      src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
            <Link to={info.watchProviders.link}>
              <div className="bg-black text-yellow-500 mt-5 rounded-lg py-3 px-5">
                Watch
                <i className="text-yellow-500 ri-arrow-right-s-line"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

export default Moviedetails;
