import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Table from "./Table";

function App() {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  // use like this:

  const [yearlyData1, setYearlyData1] = useState([]);

  const resetHandler=()=>{
    setYearlyData1([]);
  };
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"];
    let initialInvestment = currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: formatter.format(yearlyInterest),
        savingsEndOfYear: formatter.format(currentSavings),
        yearlyContribution: formatter.format(yearlyContribution),
        totalInterest: formatter.format(
          currentSavings - initialInvestment - yearlyContribution * (i + 1)
        ),
        investedCapital: formatter.format(
          initialInvestment + yearlyContribution * (i + 1)
        )
      });
    }
    setYearlyData1(yearlyData);
    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />

      <Form onCalculate={calculateHandler} onReset={resetHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Table itemsList={yearlyData1} />
    </div>
  );
}

export default App;
