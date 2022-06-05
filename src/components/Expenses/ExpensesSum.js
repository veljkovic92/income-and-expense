import "./ExpenseSum.css";

const ExpensesSum = (props) => {
  // const expenses = props.sumExpense.map((item) => item);
  // const totalExpense = expenses.reduce((acc, item) => (acc += item), 0);
  return (
    <div className="expense-sum">
      <p>Expenses</p>
      <p>{props.sumExpense}</p>
    </div>
  );
};

export default ExpensesSum;
