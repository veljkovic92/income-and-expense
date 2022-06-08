import "./ExpenseSum.css";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalState";

const ExpensesSum = (props) => {
  const context = useContext(GlobalContext);

  const calculatePercentage = () => {
    return Math.abs(
      (context.totalExpense / context.totalIncome) * 100
    ).toFixed();
  };

  return (
    <div className="expense-sum">
      <p className="expense-sum__header">Expenses</p>
      <div className="expenses-sum__right">
        {context.totalExpense === 0 ? (
          <p className="expenses-sum__value">{context.totalExpense}</p>
        ) : (
          <p className="expenses-sum__value">
            {context.totalExpense.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </p>
        )}

        <div
          className={
            context.totalIncome !== 0
              ? "expenses-sum__item-percentage"
              : "expenses-sum__item-percentage expenses-sum__item-percentage--hidden"
          }
        >
          {calculatePercentage()}%
        </div>
      </div>
    </div>
  );
};

export default ExpensesSum;
