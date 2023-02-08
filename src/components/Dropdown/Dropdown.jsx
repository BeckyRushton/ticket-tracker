import React from "react";
import "./Dropdown.scss";

const Dropdown = (props) => {
  const { optionsArr, handleSelect } = props;
  const optionsJSX = optionsArr.map((option, index) => {
    return (
      <option value={option} key={index}>
        {option}
      </option>
    );
  });
  return (
    <select onChange={handleSelect} id="dropDown">
      <option value="Select">Select</option>
      {optionsJSX}
    </select>
  );
};

export default Dropdown;
