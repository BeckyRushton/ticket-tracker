import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      TICKET TRACKER
      <label htmlFor="search"></label>
      <input type="text" placeholder="Search" id="search" />
      <select id="dropDown">
        <option value="Select">Select</option>
        <option value="Junior">Junior</option>
        <option value="Mid">Mid</option>
        <option value="Senior">Senior</option>
        <option value="Manager">Manager</option>
        <option value="Tester">Tester</option>
        <option value="Hard Man">Hard Man</option>
      </select>
    </div>
  );
};

export default Header;
