import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Expenses from "./pages/Expenses";
import Records from "./pages/Records";
import Navbar from "./components/Navbar";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  // Function to handle adding a new expense
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

   // Function to handle deleting an expense
   const deleteExpense = (index) => {
    setExpenses((prevExpenses) => prevExpenses.filter((_, i) => i !== index));
  };
 
   // Function to edit an expense
   const editExpense = (index, updatedExpense) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index] = updatedExpense;
    setExpenses(updatedExpenses);
  };

  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Expenses onAddExpense={addExpense} />} />
        <Route path="/records" element={<Records expenses={expenses} onDeleteExpense={deleteExpense} onEditExpense={editExpense}/>} />
      </Routes>
    </Router>
  );
};

export default App;
