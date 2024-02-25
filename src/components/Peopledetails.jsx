import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSetperson, resetInfo } from "../store/actions/peopleAction";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "./partials/Card";
import Logo from "./partials/Logo";

function Peopledetails() {
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.people);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncSetperson(id));
    return () => {
      dispatch(resetInfo());
    };
  }, [id]);
  return info ? (
    <div className="w-screen min-h-screen relative">
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
        <div className="text-yellow-500 flex items-center gap-3 absolute top-4 right-16 cursor-pointer">
          <a
            target="_blank"
            href={`https://www.wikidata.org/wiki/${info?.externalId?.wikidata_id}`}
          >
            Wikipedia
          </a>
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${info.externalId.imdb_id}`}
          >
            IMDB
          </a>
          {info?.detail?.homepage && (
            <a target="_blank" href={info?.detail?.homepage}>
              Homepage
            </a>
          )}
          {info?.externalId?.instagram_id && (
            <a
              target="_blank"
              href={`https://www.instagram.com/${info?.externalId?.instagram_id}`}
            >
              Instagram
            </a>
          )}
        </div>
        <div className="h-[25vw] w-[65vw] mt-20 ml-18 ">
          <img
            className="h-full w-full object-contain"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
        </div>
        <div className="mt-20 ml-18 flex flex-col items-start w-fit">
          <h1 className="text-5xl font-bold text-white">
            {info.detail.name ||
              info.detail.original_title ||
              info.detail.title ||
              info.detail.original_name}
          </h1>
          <p className="text-sm font-semibold mt-6 text-white w-[80%]">
            {info.detail.biography.slice(0, 600)}
          </p>
          <div className="flex items-start gap-5 flex-col">
            <div className="flex items-center gap-3">
              <div className="border-white border-[2px] flex items-center h-10 pb-6 px-2 mt-4 gap-3 ">
                <h1 className="text-sm font-semibold mt-6 text-white">
                  Birthday
                </h1>
                <p className="text-sm text-yellow-500 font-semibold mt-6">
                  {info.detail.birthday}
                </p>
              </div>
              <div className="border-white border-[2px] flex items-center h-10 pb-6 px-2 mt-4 gap-3 ">
                <h1 className="text-sm font-semibold mt-6 text-white ">
                  Deathday
                </h1>
                <p className="text-sm font-semibold mt-6 text-yellow-500">
                  {info.detail?.deathday
                    ? info.detail?.deathday
                    : "Funcking Alive"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="border-white border-[2px] flex items-center h-10 pb-6 px-2 mt-4 gap-3 ">
                <h1 className="text-sm font-semibold mt-6 text-white">
                  Gender
                </h1>
                <p className="text-sm font-semibold mt-6 text-yellow-500">
                  {info.detail.gender === 2 ? "Male" : "Female"}
                </p>
              </div>
              <div className="border-white border-[2px] flex items-center h-10 pb-6 px-2 mt-4 gap-3 ">
                <h1 className="text-sm font-semibold mt-6 text-white ">
                  Known For
                </h1>
                <p className="text-sm font-semibold mt-6 text-yellow-500">
                  {info.detail.known_for_department}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-[40vw]">
        <div className="mb-12">
          <div className="bg-zinc-300 h-[1px] w-screen "></div>
          <h1 className="text-white text-3xl ml-5 font-semibold mt-2">
            Movies
          </h1>
          <div className="relative">
            {info?.movieCredits?.length > 0 ? (
              <div className="horizontal-scroll overflow-x-auto">
                <div className=" px-4 w-full h-fit my-2">
                  <div className="flex w-fit items-center gap-4">
                    {info.movieCredits?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-start justify-start"
                        >
                          <Card item={item} title={"movie"} />;
                          <h1 className="text-xl text-white font-semibold">
                            {item.original_title.slice(0, 20)}
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
        </div>
        <div>
          <div className="bg-zinc-300 h-[1px] w-screen "></div>
          <h1 className="text-white text-3xl ml-5 font-semibold mt-2">
            Tv shows
          </h1>
          <div className="relative">
            {info?.tvCredits?.length > 0 ? (
              <div className="horizontal-scroll overflow-x-auto">
                <div className=" px-4 w-full h-fit my-2">
                  <div className="flex w-fit items-center gap-4">
                    {info.tvCredits?.map((item, index) => {
                      return (
                        <div key={index} className="flex flex-col items-start">
                          <Card item={item} title={"tv"} />;
                          <h1 className="text-xl text-white font-semibold">
                            {item.name ||
                              item.original_title ||
                              item.title ||
                              item.original_name}
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
        </div>
      </div>
    </div>
  ) : (
    <h1 className="text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      Loading...
    </h1>
  );
}

export default Peopledetails;
