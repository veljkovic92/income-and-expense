import "./IncomeSum.css";

const IncomeSum = (props) => {
  // const otherThanNull = () => {
  //   if (props.sumIncome !== 0) {
  //     return {};
  //   } else {
  //     return props.sumIncome;
  //   }
  // };

  return (
    <div className="income-sum">
      <p>Income</p>
      {props.sumIncome === 0 ? (
        <p>{props.sumIncome}</p>
      ) : (
        <p>
          +
          {props.sumIncome.toLocaleString("en-US", {
            minimumFractionDigits: 2,
          })}
        </p>
      )}
    </div>
  );
};

export default IncomeSum;
