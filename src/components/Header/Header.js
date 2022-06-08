import IncomeSum from "../Income/IncomeSum";
import ExpensesSum from "../Expenses/ExpensesSum";
import "./Header.css";
import { date } from "../../utility/Date";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalState";

const Header = () => {
  const context = useContext(GlobalContext);
  const totalSum = context.totalIncome + context.totalExpense;
  const otherThanNull = () => {
    if (totalSum !== 0) {
      return totalSum.toLocaleString("en-US", {
        minimumFractionDigits: 2,
      });
    } else {
      return totalSum;
    }
  };
  const header = () => {
    if (totalSum > 0) {
      return "+" + otherThanNull();
    } else if (totalSum < 0) {
      return otherThanNull();
    } else {
      return totalSum;
    }
  };

  return (
    <div className="header">
      <div className="header__container">
        <p>Available budget in {date}:</p>

        <h1 className="headerMain">{header()}</h1>
        <IncomeSum />
        <ExpensesSum />
      </div>
    </div>
  );
};

export default Header;
