import "./IncomeSum.css";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalState";
const IncomeSum = () => {
  const context = useContext(GlobalContext);

  return (
    <div className="income-sum">
      <p className="income-sum__header">Income</p>
      {context.totalIncome === 0 ? (
        <p className="income-sum__value">{context.totalIncome}</p>
      ) : (
        <p className="income-sum__value">
          +
          {context.totalIncome.toLocaleString("en-US", {
            minimumFractionDigits: 2,
          })}
        </p>
      )}
    </div>
  );
};

export default IncomeSum;
