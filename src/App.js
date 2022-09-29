import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import "./styles/App.css";

const INITIAL_DATA = [
  { title: "Car", amount: "10500", date: "2022-09-28", id: "0.21" },
  { title: "Chair", amount: "200", date: "2022-09-28", id: "0.22" },
  { title: "Food", amount: "30", date: "2022-09-28", id: "0.23" },
];

const App = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const ExpenseDataFinalStep = (ed) => {
    setData((prev) => [ed, ...prev]);
  };

  return (
    <div className="App">
      <NewExpense toApp={ExpenseDataFinalStep} />
      <Expenses data={data} />
    </div>
  );
};

export default App;
