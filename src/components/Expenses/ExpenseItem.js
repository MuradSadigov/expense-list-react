import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setClick] = useState(props.title);
  const clickHandler = () => {
    setClick("Changed!");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <div className="expense-item">{title}</div>
        <div className="expense-item__price">{props.amount + "$"}</div>
      </div>
      <button className="itemButton" onClick={clickHandler}>
        Click me
      </button>
    </div>
  );
};

export default ExpenseItem;
