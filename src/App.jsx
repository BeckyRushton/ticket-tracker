import "./App.scss";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import team from "./data/employee-data";

function App() {
  const employeeJSX = team.map((employee) => {
    const randomNum = Math.floor(Math.random() * 10);
    return (
      <Card
        name={employee.name}
        role={employee.role}
        ticketAmount={randomNum}
        key={employee.id}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <div className="employeeCards">{employeeJSX}</div>
    </div>
  );
}

export default App;
