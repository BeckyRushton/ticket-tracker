import "./App.scss";
import Header from "./containers/Header/Header";
import CardContainer from "./containers/CardContainer/CardContainer";
import team from "./data/employee-data";

function App() {
  return (
    <div className="App">
      <Header />
      <CardContainer teamArr={team} />
    </div>
  );
}

export default App;

// Logic for functions in app

// Add a function when you click + button, it adds one to the number
// counter - same function but for - button
// Add a filter function to the dropdown options where it only shows
// the cards with that role
// Add a filter function that takes the typed input and sees if
// it is included in the name/role of the employee and show the
// relevant cards
