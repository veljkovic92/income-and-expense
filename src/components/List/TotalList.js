import ExpensesList from "./ExpensesList";
import IncomeList from "./IncomeList";
import "./TotalList.css";

const TotalList = (props) => {
  const chosenId = (event) => {
    props.chosenId(event);
  };
  return (
    <div className="total-list">
      <IncomeList chosenId={chosenId} />
      <ExpensesList chosenId={chosenId} />
    </div>
  );
};

export default TotalList;
