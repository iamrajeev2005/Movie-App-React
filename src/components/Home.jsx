import React from "react";
import Sidebar from "./partials/Sidebar";
import Searchbar from "./partials/Searchbar";
import Banner from "./partials/Banner";
import Cards from "./partials/Cards";

function Home() {
  document.title = "Homepage";
  return (
    <>
      <Sidebar />
      <div className="w-[80%] h-screen overflow-y-auto overflow-hidden">
        <Searchbar />
        <Banner />
        <Cards />
      </div>
    </>
  );
}

export default Home;
