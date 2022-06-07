import "./ExpenseSum.css";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalState";

const ExpensesSum = (props) => {
  const total = useContext(GlobalContext);
  const calculatePercentage = () => {
    return (Math.abs(props.sumExpense / total.totalExpense) * 100).toFixed();
  };

  return (
    <div className="expense-sum">
      <p>Expenses</p>
      {props.sumExpense === 0 ? (
        <p>{props.sumExpense}</p>
      ) : (
        <p>
          {props.sumExpense.toLocaleString("en-US", {
            minimumFractionDigits: 2,
          })}
        </p>
      )}
      <div className="item__percentage">{calculatePercentage()}%</div>
    </div>
  );
};

export default ExpensesSum;
