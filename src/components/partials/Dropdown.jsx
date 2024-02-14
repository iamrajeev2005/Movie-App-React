import React from "react";

function Dropdown({title,options,filter}) {
  return <div className="select">
    <select defaultValue={0} onChange={filter} name="format" id="format">
        <option value="0" disabled>
            {title}
        </option>
        {options.map((option, index) => {
            return <option key={index} value={option}>{option}</option>
        })}
    </select>
  </div>;
}

export default Dropdown;
