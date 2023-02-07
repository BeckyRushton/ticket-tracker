import React from "react";
import "./CardContainer.scss";
import Card from "../../components/Card/Card";

const CardContainer = (props) => {
  const { teamArr } = props;
  const employeeJSX = teamArr.map((employee) => {
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
  return <div className="card-container">{employeeJSX}</div>;
};

export default CardContainer;
