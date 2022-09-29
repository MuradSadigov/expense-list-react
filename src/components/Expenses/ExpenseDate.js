const ExpenseDate = (props) => {
  const year = new Date(props.date).getFullYear();
  const month = new Date(props.date).toLocaleString("default", {
    month: "long",
  });
  const day = new Date(props.date).getDate();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
