import "./App.scss";
import CardContainer from "./containers/CardContainer/CardContainer";
import team from "./data/employee-data";
import Dropdown from "./components/Dropdown/Dropdown";
import { useState } from "react";

function App() {
  const handleSearch = (event) => {
    console.log(event.target.value);
  };
  const [filteredArr, setFilteredArr] = useState(team);

  const handleSelect = (event) => {
    const filteredByRoleArr = team.filter((employee) => {
      return employee.role.includes(event.target.value);
    });
    setFilteredArr(filteredByRoleArr);
  };

  return (
    <div className="app">
      <div className="header">
        {" "}
        TICKET TRACKER
        <label htmlFor="search"></label>
        <input
          onInput={handleSearch}
          type="text"
          placeholder="Search"
          id="search"
        />
        <Dropdown
          handleSelect={handleSelect}
          optionsArr={[
            "Junior Software Developer",
            "Software Developer",
            "Senior Software Developer",
            "Tester",
            "Project Manager",
            "Hard Man",
          ]}
        />
      </div>

      <CardContainer teamArr={filteredArr} />
    </div>
  );
}

export default App;

// Logic for functions in app

// Add a filter function to the dropdown options where it only shows
// the cards with that role
// Add a filter function that takes the typed input and sees if
// it is included in the name/role of the employee and show the
// relevant cards
