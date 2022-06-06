import { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalState";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const total = useContext(GlobalContext);
  const [isShown, setIsShown] = useState(false);

  const id = props.id;
  const onClickHandler = () => {
    props.chosenId(id);
  };

  const calculatePercentage = () => {
    return (Math.abs(props.amount / total.totalExpense) * 100).toFixed();
  };

  if (props.sign === "-") {
    return (
      <li
        className="item"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <p className="item__description">{props.title}</p>
        {isShown === false && (
          <p className="item__value">
            {props.sign}
            {props.amount}
          </p>
        )}
        
        {isShown ? (
          <button className="item__hidden-btn" onClick={onClickHandler}>
            <i className="fa fa-solid fa-ban fa-2x"></i>
          </button>
        ) : <div className="percentage">{calculatePercentage()}%</div>}
      </li>
    );
  }
};

export default ExpenseItem;
