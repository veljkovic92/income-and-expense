import "./IncomeSum.css";

const IncomeSum = (props) => {
  const otherThanNull = () => {
    if (props.sumExpense !== 0) {
      return props.sumIncome.toFixed(2);
    } else {
      return props.sumIncome;
    }
  };

  return (
    <div className="income-sum">
      <p>Income</p>
      {props.sumIncome === 0 ? (
        <p>{props.sumIncome}</p>
      ) : (
        <p>+{otherThanNull()}</p>
      )}
    </div>
  );
};

export default IncomeSum;
