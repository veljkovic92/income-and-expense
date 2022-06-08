import "./IncomeList.css";
import IncomeItem from "../Income/IncomeItem";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalState";

const IncomeList = (props) => {
  const context = useContext(GlobalContext);

  const chosenId = (event) => {
    props.chosenId(event);
  };
  if (context.totalIncome === 0) {
    return <h2 className="income-list__alert">Found no income</h2>;
  }
  return (
    <div className="income-list">
      <h2 className="income-list__header">Income</h2>
      <div className="income-list__items">
        {props.items.map((income) => (
          <IncomeItem
            key={income.id}
            id={income.id}
            sign={income.sign}
            title={income.desc}
            amount={income.value}
            chosenId={chosenId}
          />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
