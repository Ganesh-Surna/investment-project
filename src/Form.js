import React, { useState } from "react";
import styles2 from "./Form.module.css";

const Form = ({ onCalculate,onReset }) => {
  const [userInput, setUserInput] = useState({
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: ""
  });

  const handleCurSavingsChange = (event) => {
    setUserInput((prevData) => {
      return { ...prevData, "current-savings": event.target.value };
    });
  };

  const handleYearSavingsChange = (event) => {
    setUserInput((prevData) => {
      return { ...prevData, "yearly-contribution": event.target.value };
    });
  };

  const handleReturnChange = (event) => {
    setUserInput((prevData) => {
      return { ...prevData, "expected-return": event.target.value };
    });
  };

  const handleDurationChange = (event) => {
    setUserInput((prevData) => {
      return { ...prevData, duration: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCalculate(userInput);
    setUserInput({
      "current-savings": "",
      "yearly-contribution": "",
      "expected-return": "",
      duration: ""
    });
  };

  const handleReset = () => {
    setUserInput({
      "current-savings": "",
      "yearly-contribution": "",
      "expected-return": "",
      duration: ""
    });
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles2.form}>
      <div className={styles2["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            value={userInput["current-savings"]}
            id="current-savings"
            onChange={handleCurSavingsChange}
            required
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            required
            value={userInput["yearly-contribution"]}
            id="yearly-contribution"
            onChange={handleYearSavingsChange}
          />
        </p>
      </div>
      <div className={styles2["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            required
            value={userInput["expected-return"]}
            id="expected-return"
            onChange={handleReturnChange}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            required
            onChange={handleDurationChange}
          />
        </p>
      </div>
      <p className={styles2.actions}>
        <button
          type="reset"
          onClick={handleReset}
          className={styles2.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles2.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
export default Form;
