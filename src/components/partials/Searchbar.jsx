import React, { useState } from "react";

function Searchbar() {
  const [val, setVal] = useState("");

  console.log(val);

  return (
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
  );
}

export default Searchbar;
