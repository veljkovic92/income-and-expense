import "./ExpenseSum.css";

const ExpensesSum = (props) => {
  const otherThanNull = () => {
    if (props.sumExpense !== 0) {
      return props.sumExpense.toFixed(2);
    } else {
      return props.sumExpense;
    }
  };

  return (
    <div className="expense-sum">
      <p>Expenses</p>
      <p>{otherThanNull()}</p>
    </div>
  );
};

export default ExpensesSum;
