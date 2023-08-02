// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import expensesReducer from './features/expenses/expensesSlice';

// Create the Redux store with the expensesReducer
const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the App component with the Redux Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
