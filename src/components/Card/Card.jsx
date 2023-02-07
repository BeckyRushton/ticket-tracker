import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { name, role, ticketAmount } = props;
  return (
    <div className="card">
      <h2>Name: {name}</h2>
      <h2>Role: {role}</h2>
      <div className="counter">
        <button className="minus">-</button>
        <p>{ticketAmount}</p>
        <button className="plus">+</button>
      </div>
    </div>
  );
};

export default Card;
