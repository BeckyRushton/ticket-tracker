import React from "react";
import "./Dropdown.scss";

const Dropdown = (props) => {
  const { optionsArr } = props;
  const optionsJSX = optionsArr.map((option, index) => {
    return (
      <option value={option} key={index}>
        {option}
      </option>
    );
  });
  return (
    <select id="dropDown">
      <option value="Select">Select</option>
      {optionsJSX}
    </select>
  );
};

export default Dropdown;
