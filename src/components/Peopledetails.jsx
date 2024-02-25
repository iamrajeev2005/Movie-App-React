import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSetperson, resetInfo } from "../store/actions/peopleAction";
import { Link, useNavigate, useParams } from "react-router-dom";

function Peopledetails() {
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.people);
  console.log(info);
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
      <i
        onClick={() => navigate(-1)}
        className="text-yellow-500 text-3xl pl-5 pt-5 cursor-pointer ri-arrow-left-line"
      ></i>
      <div className="text-yellow-500 flex items-center gap-3 absolute top-4 right-5 cursor-pointer">
        <a target="_blank" href={`https://www.wikidata.org/wiki/${info?.externalId?.wikidata_id}`}>
          Wikipedia
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.detail.imdb_id}`}
        >
          IMDB
        </a>
        {info.detail.homepage ? (
          <a target="_blank" href={info.detail.homepage}>
            Homepage
          </a>
        ) : (
          ""
        )}
      </div>
      <div className="h-[25vw] w-[35vw] mt-20 ml-20">
        <img
          className="h-full w-full object-contain"
          src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
          alt=""
        />
      </div>
    </div>
  ) : (
    <h1 className="text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      Loading...
    </h1>
  );
}

export default Peopledetails;
