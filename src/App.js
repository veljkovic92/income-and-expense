import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form";
import TotalList from "./components/List/TotalList";
import GlobalContext from "./context/GlobalState";

function App() {
  const [data, setData] = useState([]);
  const saveEnteredData = (enteredData) => {
    setData((prevExpenses) => {
      return [enteredData, ...prevExpenses];
    });
    
    localStorage.setItem("data", JSON.stringify(data));
  };

  

    const localData = localStorage.getItem("data");

    const localOrNot = () => {
      return localData ? (data = JSON.parse(localData)) : data;
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

    for (var i = 0; i < data.length; i++) {
      if (data[i].id === clickedId) {
        data.splice(i, 1);
        i--;
      }
    }
    setData(() => {
      return [...data];
    });
  };

  return (
    <div>
      <Header sumIncome={totalIncome} sumExpense={totalExpense} />
      <Form onSaveEnteredData={saveEnteredData} />
      <GlobalContext.Provider value={{ totalIncome, totalExpense }}>
        <TotalList
          items={data}
          value={{ totalIncome, totalExpense }}
          chosenId={chosenId}
        />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
