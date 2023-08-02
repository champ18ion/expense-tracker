// components/ExpenseList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpenseFromDB } from '../features/expenses/expensesService';
import { deleteExpense } from '../features/expenses/expensesSlice';

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    deleteExpenseFromDB(id); // Delete the expense from IndexedDB
    dispatch(deleteExpense(id)); // Delete the expense from Redux store
  };

  return (
    <ul>
      {/* Render the list of expenses */}
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.title} - {expense.amount}
          <button onClick={() => handleDelete(expense.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
