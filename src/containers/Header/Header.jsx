import React from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import "./Header.scss";

const Header = () => {
  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="header">
      TICKET TRACKER
      <label htmlFor="search"></label>
      <input
        onInput={handleSearch}
        type="text"
        placeholder="Search"
        id="search"
      />
      <Dropdown
        optionsArr={[
          "Junior",
          "Mid",
          "Senior",
          "Tester",
          "Manager",
          "Hard Man",
        ]}
      />
    </div>
  );
};

export default Header;
