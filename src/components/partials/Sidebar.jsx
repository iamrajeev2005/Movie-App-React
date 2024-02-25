import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo"

function Sidebar() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-600 text-white p-6">
      <div className="flex items-center gap-3 ">
        <div className="h-7 w-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(101,86,205,1)"
          >
            <path d="M15.4142 4.99998H21.0082C21.556 4.99998 22 5.44461 22 6.00085V19.9991C22 20.5519 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5553 2 19.9991V6.00085C2 5.44808 2.45531 4.99998 2.9918 4.99998H8.58579L6.05025 2.46445L7.46447 1.05023L11.4142 4.99998H12.5858L16.5355 1.05023L17.9497 2.46445L15.4142 4.99998Z"></path>
          </svg>
        </div>
        <Link to={`/`}>
          <Logo />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold py-5">New Feeds</h1>
        <Link
          to="/trending"
          className="hover:text-white hover:bg-[#6556CD] p-4 duration-200 rounded-lg"
        >
          <i className="mr-1 ri-fire-fill"></i>
          Trending
        </Link>
        <Link
          to="/popular"
          className="hover:text-white hover:bg-[#6556CD] p-4 duration-200 rounded-lg"
        >
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link
          to="/movie"
          className="hover:text-white hover:bg-[#6556CD] p-4 duration-200 rounded-lg"
        >
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link
          to="/tv-shows"
          className="hover:text-white hover:bg-[#6556CD] p-4 duration-200 rounded-lg"
        >
          <i className="mr-2 ri-tv-2-fill"></i>
          Tv Shows
        </Link>
        <Link
          to="/people"
          className="hover:text-white hover:bg-[#6556CD] p-4 duration-200 rounded-lg"
        >
          <i className="mr-2 ri-team-fill"></i>
          People
        </Link>
      </div>
      <hr className="border-none bg-zinc-600 h-[1px] my-3" />
      <div className="flex flex-col gap-2">
        <Link className="hover:text-white hover:bg-[#6556CD] p-4 duration-200 rounded-lg">
          <i className="mr-2 ri-information-fill"></i>
          About Us
        </Link>
        <Link className="hover:text-white hover:bg-[#6556CD] p-4 duration-200 rounded-lg">
          <i className="mr-2 ri-phone-fill"></i>
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
