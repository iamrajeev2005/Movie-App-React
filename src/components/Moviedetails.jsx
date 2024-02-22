import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSetMovies, resetInfo } from "../store/actions/movieAction";
import { useParams } from "react-router-dom";

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
        background:
          `url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
          backgroundPosition:`center`,
          backgroundSize:`cover`,
          backgroundRepeat:`no-repeat`,
          opacity:`0.3`
      }}
      className="w-screen h-screen "
    ></div>
  ) : (
    <h1>Loading</h1>
  );
}

export default Moviedetails;
