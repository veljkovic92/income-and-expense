import { useState } from "react";
import "./IncomeItem.css";

const IncomeItem = (props) => {
  const [isShown, setIsShown] = useState(false);

  const id = props.id;
  const onClickHandler = () => {
    props.chosenId(id);
  };

  const capitalizedTitle =
    props.title.charAt(0).toUpperCase() + props.title.slice(1);

  if (props.sign === "+") {
    return (
      <div
        className="item"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <p className="item__description">{capitalizedTitle}</p>
        {isShown === false && (
          <p className="item__value">
            {props.sign}
            {props.amount.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </p>
        )}
        {isShown && (
          <button className="item__hidden-btn" onClick={onClickHandler}>
            <i className="fa fa-solid fa-ban fa-2x"></i>
          </button>
        )}
      </div>
    );
  }
};

export default IncomeItem;
