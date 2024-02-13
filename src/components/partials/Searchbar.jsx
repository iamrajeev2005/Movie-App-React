import React, { useState } from "react";

function Searchbar() {
  const [val, setVal] = useState("");

  console.log(val);

  return (
    <div className="relative">
      <div className="relative h-[8vh] flex items-center justify-end mr-8 mt-3">
        <input
          onChange={(e) => setVal(e.target.value)}
          value={val}
          className="text-white rounded-full py-2 px-3 bg-transparent border border-zinc-600 w-1/3 outline-none  focus:border-[#6556CD]"
          type="text"
          placeholder="Search anything"
        />
        {val.length > 0 && (
          <div onClick={() => setVal("")} className="absolute cursor-pointer">
            <i class="text-[#6556CD] text-3xl mr-2 ri-close-fill"></i>
          </div>
        )}
      </div>
      <div className="flex items-center justify-end mr-8">
        <div className="absolute top-[100%] w-[26vw] bg-[#333238] max-h-[78vh] rounded-lg">
          {/* <div className="flex h-full w-full p-2 items-start gap-10">
            <div className="h-[22.8vh] rounded-lg overflow-hidden flex-shrink-0 ">
              <img
                className="h-full w-full object-cover"
                src="https://m.media-amazon.com/images/I/71niXI3lxlL._AC_UF1000,1000_QL80_.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <h1 className="text-white text-3xl">Avengers</h1>
              </div>
              <div>
                <p className="text-white text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, quas!
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
