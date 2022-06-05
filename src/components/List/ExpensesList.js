import "./ExpensesList.css";
import ExpenseItem from "../Expenses/ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expense-list__fallback">Found no expenses</h2>;
  }
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            sign={expense.sign}
            title={expense.desc}
            amount={expense.value}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;