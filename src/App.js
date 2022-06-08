import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Form from "./components/InputForm/Form";
import TotalList from "./components/List/TotalList";
import GlobalContext from "./context/GlobalState";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let totalList = [];
    const listOfExpenses = JSON.parse(localStorage.getItem("listOfExpenses"));
    const listOfIncomes = JSON.parse(localStorage.getItem("listOfIncomes"));
    if (listOfExpenses) totalList = [...totalList, ...listOfExpenses];
    if (listOfIncomes) totalList = [...totalList, ...listOfIncomes];
    setData(totalList);
  }, []);

  const saveEnteredData = (enteredData) => {
    localStorage.setItem("data", JSON.stringify(enteredData));
    setData((prevExpenses) => {
      return [enteredData, ...prevExpenses];
    });
  };

  let totalIncome = 0;
  data.forEach((item) => {
    if (item.sign === "+") {
      totalIncome += item.value;
    }
  });
  let totalExpense = 0;
  data.forEach((item) => {
    if (item.sign === "-") {
      totalExpense -= item.value;
    }
  });

  const chosenId = (event) => {
    const clickedId = event;
    let expensesItems = JSON.parse(localStorage.getItem("listOfExpenses"));
    let incomesItems = JSON.parse(localStorage.getItem("listOfIncomes"));

    for (var i = 0; i < data.length; i++) {
      if (data[i].id === clickedId) {
        data.splice(i, 1);
        i--;
      }
    }

    for (let i = 0; i < expensesItems.length; i++) {
      if (expensesItems[i].id === clickedId) {
        expensesItems.splice(i, 1);
      }
    }
    expensesItems = JSON.stringify(expensesItems);
    localStorage.setItem("listOfExpenses", expensesItems);

    for (let i = 0; i < incomesItems.length; i++) {
      if (incomesItems[i].id === clickedId) {
        incomesItems.splice(i, 1);
      }
    }
    incomesItems = JSON.stringify(incomesItems);
    localStorage.setItem("listOfIncomes", incomesItems);

    setData(() => {
      return [...data];
    });
  };

  return (
    <div>
      <GlobalContext.Provider value={{ totalIncome, totalExpense }}>
        <Header />
        <Form onSaveEnteredData={saveEnteredData} />
        <TotalList items={data} chosenId={chosenId} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
