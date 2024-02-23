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
    <div
      style={{
        background: `url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
      }}
      className="w-screen h-screen relative"
    >
      <div className="flex items-start ">
        <div className="h-[20vh] w-[20vw] object-cover mt-20 ml-20">
          <img
            src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path}`}
            alt=""
          />
        </div>
        <div className="mt-20 ml-20">
          <h1 className="text-5xl font-bold text-white">
            {info.detail.name ||
              info.detail.original_title ||
              info.detail.title ||
              info.detail.original_name}
          </h1>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

export default Moviedetails;
