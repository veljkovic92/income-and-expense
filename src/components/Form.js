import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import "./Form.css";

function updateLocalStorage(enteredData, key) {
  let list = JSON.parse(localStorage.getItem(key));
  list ? list.push(enteredData) : (list = [enteredData]);

  localStorage.setItem(key, JSON.stringify(list));
}

const Form = (props) => {
  const [enteredSign, setEnteredSign] = useState("-");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [enteredValue, setEnteredValue] = useState("");

  const signChangeHandler = (event) => {
    setEnteredSign(event.target.value);
  };

  const descChangeHandler = (event) => {
    setEnteredDesc(event.target.value);
  };

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const submitHandler = (event) => {
    const uniqueKey = Math.random();

    event.preventDefault();

    const enteredData = {
      key: uniqueKey,
      id: uniqueKey,
      sign: enteredSign,
      desc: enteredDesc,
      value: +enteredValue,
    };

    enteredData.sign === "-"
      ? updateLocalStorage(enteredData, "listOfExpenses")
      : updateLocalStorage(enteredData, "listOfIncomes");

    props.onSaveEnteredData(enteredData);

    setEnteredDesc("");
    setEnteredValue("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <select
        className="form__select"
        value={enteredSign}
        onChange={signChangeHandler}
      >
        <option>+</option>
        <option>-</option>
      </select>
      <input
        className="form__input form__input--desc"
        name="desc"
        value={enteredDesc}
        placeholder="Add description"
        maxLength="50"
        onChange={descChangeHandler}
      ></input>
      <input
        className="form__input form__input--value"
        name="value"
        value={enteredValue}
        placeholder="Value"
        type="number"
        onChange={valueChangeHandler}
      ></input>
      <button
        className={
          enteredSign === "+"
            ? "form__button form__button--plus"
            : "form__button form__button--minus"
        }
        type="submit"
        value={enteredSign}
      >
        <i className="fa fa-solid fa-check fa-1x"></i>
      </button>
    </form>
  );
};

export default Form;
