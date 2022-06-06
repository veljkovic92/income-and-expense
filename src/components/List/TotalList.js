import { useContext } from "react/cjs/react.production.min";
import GlobalContext from "../../context/GlobalState";
import ExpensesList from "./ExpensesList";
import IncomeList from "./IncomeList";
import "./TotalList.css";

const TotalList = (props) => {
  
  const chosenId = (event) => {
    props.chosenId(event);
  };
  return (
    <div className="total-list">
      <IncomeList items={props.items} chosenId={chosenId} />
      <ExpensesList items={props.items} chosenId={chosenId} />
    </div>
  );
};

export default TotalList;
