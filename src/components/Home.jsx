import React from "react";
import Sidebar from "./partials/Sidebar";
import Searchbar from "./partials/Searchbar";
import Banner from "./partials/Banner";

function Home() {
  document.title = "Homepage";
  return (
    <>
      <Sidebar />
      <div className="w-[80%] h-full ">
        <Searchbar />
        <Banner/>
      </div>
    </>
  );
}

export default Home;
