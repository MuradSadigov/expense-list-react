import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const getDataFromChild = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.toApp(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm getDataToParent={getDataFromChild} />
    </div>
  );
};

export default NewExpense;
