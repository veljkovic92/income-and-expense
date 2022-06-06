import IncomeSum from "../Income/IncomeSum";
import ExpensesSum from "../Expenses/ExpensesSum";
import "./Header.css";
import { date } from "../Date";

const Header = (props) => {
  const totalSum = props.sumIncome + props.sumExpense;
  const otherThanNull = () => {
    if (totalSum !== 0) {
      return totalSum.toFixed(2);
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

        {/* {totalSum > 0 ? (
          <h1 className="headerMain">+{otherThanNull()}</h1>
        ) : (
          <h1 className="headerMain">{totalSum}</h1>
        )} */}

        <h1 className="headerMain">{header()}</h1>
        <IncomeSum sumIncome={props.sumIncome} />
        <ExpensesSum sumExpense={props.sumExpense} />
      </div>
    </div>
  );
};

export default Header;
