import "./ExpensesList.css";
import ExpenseItem from "../Expenses/ExpenseItem";

const ExpensesList = (props) => {
  const chosenId = (event) => {
    props.chosenId(event);
  };

  if (props.items.length === 0) {
    return <h2 className="expense-list__fallback">Found no expenses</h2>;
  }
  return (
    <div>
      <h2 className="expense-list__header">Expenses</h2>
      <div className="expense-list__items">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            sign={expense.sign}
            title={expense.desc}
            amount={expense.value}
            chosenId={chosenId}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpensesList;
