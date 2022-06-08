import "./ExpensesList.css";
import ExpenseItem from "../Expenses/ExpenseItem";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalState";

const ExpensesList = (props) => {
  const context = useContext(GlobalContext);
  const chosenId = (event) => {
    props.chosenId(event);
  };

  if (context.totalExpense === 0) {
    return <h2 className="expense-list__alert">Found no expenses</h2>;
  }
  return (
    <div className="expense-list">
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
