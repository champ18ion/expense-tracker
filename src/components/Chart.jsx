// components/Chart.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, BarElement, Tooltip, Legend, CategoryScale,
  LinearScale} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, BarElement, Legend, CategoryScale,
  LinearScale);



const Chart = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  // Calculate data for the chart
  const labels = expenses.map((expense) => expense.category);
  const data = {
    labels: labels, // Expense categories
    datasets: [
      {
        label: 'Expenses',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        data: expenses.map((expense) => expense.amount), // Expense amounts
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category', // Use "category" scale for x-axis
        labels: labels, // Expense categories
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Chart;
