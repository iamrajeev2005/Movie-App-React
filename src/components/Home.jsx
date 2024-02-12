import React from "react";
import Sidebar from "./partials/Sidebar";

function Home() {
  document.title = "Homepage";
  return (
    <>
      <Sidebar />
      <div className="w-[80%] h-full "></div>
    </>
  );
}

export default Home;
