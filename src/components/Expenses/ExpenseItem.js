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
    return (Math.abs(props.amount / total.totalIncome) * 100).toFixed();
  };

  const capitalizedTitle =
    props.title.charAt(0).toUpperCase() + props.title.slice(1);

  if (props.sign === "-") {
    return (
      <div
        className="expense-item"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div>
          <p className="expense-item__description">{capitalizedTitle}</p>
        </div>
        <div className="expense-item__right">
          {isShown === false && (
            <p className="expense-item__value">
              {props.sign}
              {props.amount.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </p>
          )}

          {isShown ? (
            <button className="item__hidden-btn" onClick={onClickHandler}>
              <i className="fa fa-solid fa-ban fa-2x"></i>
            </button>
          ) : (
            <div
              className={
                total.totalIncome
                  ? "item__item-percentage"
                  : "item__item-percentage--hidden"
              }
            >
              {calculatePercentage()}%
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default ExpenseItem;
