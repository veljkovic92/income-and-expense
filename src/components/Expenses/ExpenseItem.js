import { useContext } from "react";
import GlobalContext from "../../context/GlobalState";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const total = useContext(GlobalContext);

  const calculatePercentage = () => {
    return (Math.abs(props.amount / total.totalExpense) * 100).toFixed();
  };

  if (props.sign === "-") {
    return (
      <li className="item">
        <p className="item__description">{props.title}</p>
        <p className="item__value">
          {props.sign}
          {props.amount}
        </p>
        <div class="percentage">{calculatePercentage()}%</div>
      </li>
    );
  }
};

export default ExpenseItem;
