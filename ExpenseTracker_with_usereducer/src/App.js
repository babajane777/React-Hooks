import { useState, useReducer } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  // Remove the useState hook and replace it with useReducer hook
  // Implement the functionality to add and remove the transaction in reducer function

  // const blogsReducer = (state, action) => {
  //   switch (action.type) {
  //     case "ADD":
  //       return [action.blog, ...state];
  //     case "REMOVE":
  //       return state.filter((blog, index) => index !== action.index);
  //     default:
  //       return [];
  //   }
  // };

  const expensesreducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [action.expenses, ...state];
      case "remove":
        return state.filter((expense, index) => expense.id != action.index);
      default:
        return [];
    }

  };

    // const [expenses, setExpenses] = useState([]);
    const [expenses, dispatch] = useReducer(expensesreducer, []);


    const addExpense = (expense) => {
      // setExpenses((prevState) => [expense, ...prevState]);
      dispatch({ type: "add", expenses: expense  })
    };


    const deleteExpense = (id) => {
      // setExpenses((prevExpenses) => {
      // return prevExpenses.filter((expense) => expense.id !== id);
      dispatch({ type: "remove", index: id })
    };
  

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm addexpense={addExpense} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        </div>
      </div>
    </>
  );
}

export default App;
