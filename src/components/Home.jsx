import React from "react";
import Sidebar from "./partials/Sidebar";
import Searchbar from "./partials/Searchbar";

function Home() {
  document.title = "Homepage";
  return (
    <>
      <Sidebar />
      <div className="w-[80%] h-full ">
        <Searchbar/>
      </div>
    </>
  );
}

export default Home;
