import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSettvs, resetInfo } from "../store/actions/tvActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "./partials/Card";
import Logo from "./partials/Logo";

function tvdetails() {
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.tv);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncSettvs(id));
    return () => {
      dispatch(resetInfo());
    };
  }, [id]);
  return info ? (
    <div className="w-screen min-h-screen relative">
      <img
        className="h-screen w-screen opacity-20 object-cover object-center"
        src={`https://image.tmdb.org/t/p/original/${info?.detail?.backdrop_path}`}
        alt=""
      />
      <div className="flex items-start absolute top-0 left-0">
        <div className="flex items-center gap-2 ">
          <i
            onClick={() => navigate(-1)}
            className="text-yellow-500 text-3xl pl-5 pt-5 cursor-pointer ri-arrow-left-line"
          ></i>
          <Link to={`/`} className="mt-4">
            <Logo />
          </Link>
        </div>
        <div className="text-yellow-500 flex items-center gap-3 absolute top-4 right-5 cursor-pointer">
          <a
            target="_blank"
            href={`https://www.wikidata.org/wiki/${info?.detail?.homepage}`}
          >
            Wikipedia
          </a>
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${info?.externalId?.imdb_id}`}
          >
            IMDB
          </a>
          <a target="_blank" href={info?.detail?.homepage}>
            Homepage
          </a>
        </div>
        <div className="h-[25vw] w-[65vw] mt-20 ml-20">
          <img
            className="h-full w-full object-contain"
            src={`https://image.tmdb.org/t/p/original/${info?.detail?.poster_path}`}
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
              ({info.detail.first_air_date})
            </h3>
          </div>
          <p className="text-md font-semibold mt-6 text-white w-[70%]">
            {info.detail.overview}
          </p>
          <Link
            to={`https://www.youtube.com/watch?v=${info?.videos?.key}`}
            className="bg-white text-black w-fit mt-6 py-3 px-3 rounded-md font-semibold"
          >
            <i className="ri-play-fill"></i> Watch trailer
          </Link>
          <div className="flex items-start gap-5  ">
            {info.watchProviders?.buy ? (
              <div className="flex items-center">
                <div className="bg-black text-yellow-500 mt-5 rounded-lg py-3 px-5">
                  Buy
                  <i className="text-yellow-500 ri-arrow-right-s-line"></i>
                </div>
                {info.watchProviders?.buy?.map((item, index) => {
                  return (
                    <div key={index} className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-lg ml-4 mt-4"
                        src={`https://image.tmdb.org/t/p/original/${item?.logo_path}`}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            {info.watchProviders ? (
              <Link to={info?.watchProviders?.link}>
                <div className="bg-black text-yellow-500 mt-5 rounded-lg py-3 px-5">
                  Watch
                  <i className="text-yellow-500 ri-arrow-right-s-line"></i>
                </div>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="-mt-52">
        <div className="bg-zinc-300 h-[1px] w-screen "></div>
        <h1 className="text-white text-3xl ml-5 font-semibold mt-2">Seasons</h1>
        <div className="relative">
          {info.detail.seasons ? (
            <div className="horizontal-scroll overflow-x-auto">
              <div className=" px-4 w-full h-fit my-2">
                <div className="flex w-fit items-center gap-4">
                  {info.detail.seasons.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col">
                        <Card item={item} title={"tv"} />;
                        <h1 className="text-2xl text-white font-semibold">
                          {item.name}
                        </h1>
                        ;
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <h1 className="text-5xl text-white text-center">
              No Information Availabke
            </h1>
          )}
        </div>
        <div className="bg-zinc-300 h-[1px] w-screen "></div>
        <h1 className="text-white text-3xl ml-5 font-semibold mt-2">
          Recommended For You
        </h1>
        <div className="relative">
          {info?.recommendations.length > 0 ? (
            <div className="horizontal-scroll overflow-x-auto">
              <div className=" px-4 w-full h-fit my-2">
                <div className="flex w-fit items-center gap-4">
                  {info?.recommendations.map((item, index) => {
                    return <Card key={index} item={item} />;
                  })}
                </div>
              </div>
            </div>
          ) : (
            <h1 className="text-5xl text-white text-center">
              No Information Availabke
            </h1>
          )}
        </div>
      </div>
    </div>
  ) : (
    <h1 className="text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      Loading...
    </h1>
  );
}

export default tvdetails;
