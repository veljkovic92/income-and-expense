import "./IncomeList.css";
import IncomeItem from "../Income/IncomeItem";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalState";

const IncomeList = (props) => {
  const context = useContext(GlobalContext);

  const chosenId = (event) => {
    props.chosenId(event);
  };
  if (props.items.length === 0) {
    return <h2 className="expense-list__header">Found no incomes</h2>;
  }
  return (
    <div>
      <h2>Incomes</h2>
      <ul>
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
      </ul>
    </div>
  );
};

export default IncomeList;
