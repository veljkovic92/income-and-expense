import { useState } from "react";
import "./IncomeItem.css";

const IncomeItem = (props) => {
  const [isShown, setIsShown] = useState(false);

  const id = props.id;
  const onClickHandler = () => {
    props.chosenId(id);
  };

  if (props.sign === "+") {
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
        {isShown && (
          <button className="item__hidden-btn" onClick={onClickHandler}>
            <i className="fa fa-solid fa-ban fa-2x"></i>
          </button>
        )}
      </li>
    );
  }
};

export default IncomeItem;
