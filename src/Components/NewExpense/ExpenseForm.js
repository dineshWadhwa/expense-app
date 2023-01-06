import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const initialState = {
    title: "",
    amount: "",
    date: "",
  };
  const [userInput, setUserInput] = useState(initialState);

  const onValueChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!userInput.title || !userInput.amount || !userInput.date) {
      alert("Please fill all the inputs");
      return;
    }
    let expenseData = { ...userInput, date: new Date(userInput.date) };
    // console.log('expenseData',expenseData);
    props.onSaveExpenseData(expenseData);
    setUserInput(initialState);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={userInput.title}
            onChange={onValueChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={userInput.amount}
            onChange={onValueChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            name="date"
            value={userInput.date}
            onChange={onValueChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
