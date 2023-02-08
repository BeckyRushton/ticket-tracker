import React from "react";
import "./Card.scss";
import { useState } from "react";

const Card = (props) => {
  const { name, role } = props;
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter === 0) {
      return 0;
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="card">
      <h2>Name: {name}</h2>
      <h2>Role: {role}</h2>
      <div className="counter">
        <div onClick={handleDecrement} className="minus">
          <button className="plus">-</button>
        </div>
        <p className="ticketNum">{counter}</p>
        <div onClick={handleIncrement} className="plus">
          <button className="plus">+</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
