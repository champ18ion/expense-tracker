// App.js
import React from 'react';
import './style.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Chart from './components/Chart';

const App = () => {
  return (
    <div className="App">
      <h1>Expense Tracker PWA</h1>
      <ExpenseForm />
      <ExpenseList />
      <Chart />
    </div>
  );
};

export default App;
