import "./App.scss";
import CardContainer from "./containers/CardContainer/CardContainer";
import team from "./data/employee-data";
import Dropdown from "./components/Dropdown/Dropdown";
import { useState } from "react";

function App() {
  const [filteredArr, setFilteredArr] = useState(team);
  const handleSelect = (event) => {
    const filteredByRoleArr = team.filter((employee) => {
      return employee.role.includes(event.target.value);
    });
    setFilteredArr(filteredByRoleArr);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredSearch = team.filter((employee) => {
      if (employee.name.toLowerCase().includes(searchTerm)) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredArr(filteredSearch);
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
