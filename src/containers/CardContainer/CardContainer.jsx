import React from "react";
import "./CardContainer.scss";
import Card from "../../components/Card/Card";

const CardContainer = (props) => {
  const { teamArr } = props;
  const employeeJSX = teamArr.map((employee) => {
    return <Card name={employee.name} role={employee.role} key={employee.id} />;
  });
  return <div className="card-container">{employeeJSX}</div>;
};

export default CardContainer;
