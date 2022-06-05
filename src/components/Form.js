import { useState } from "react";
import "./Form.css";

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
    const uniqueKey = Math.random() * 1;

    event.preventDefault();

    const enteredData = {
      key: uniqueKey,
      id: uniqueKey,
      sign: enteredSign,
      desc: enteredDesc,
      value: +enteredValue,
    };

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