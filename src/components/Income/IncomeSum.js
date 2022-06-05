import "./IncomeSum.css";

const IncomeSum = (props) => {
  // const incomes = props.sumIncome.map((item) => item);
  // const totalIncome = incomes.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="income-sum">
      <p>Income</p>
      {props.sumIncome === 0 ? (
        <p>{props.sumIncome}</p>
      ) : (
        <p>+{props.sumIncome}</p>
      )}
    </div>
  );
};

export default IncomeSum;
