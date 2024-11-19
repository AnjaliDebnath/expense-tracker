import React, { useState, useEffect } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    Title: '',
    Price: '',
    Date: '',
    category: '',
  });
  const [expenses, setExpenses] = useState([]);

  // Load expenses from local storage on initial render
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing data and add new data
    const updatedExpenses = [...expenses, formData];

    // Save to local storage
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));

    // Update state
    setExpenses(updatedExpenses);

    // Clear form fields
    setFormData({ Title: '', Price: '', Date: '', category: '' });

    alert('Expense added successfully!');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded shadow-md">
      <form onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold mb-4 text-gray-800">Enter Your Daily Expenses</h2>

        <div className="mb-4 flex items-center">
          <label htmlFor="Title" className="w-24 text-gray-700 font-medium">
            Title:
          </label>
          <input
            type="text"
            name="Title"
            id="Title"
            value={formData.Title}
            onChange={handleChange}
            className="flex-grow px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4 flex items-center">
          <label htmlFor="Price" className="w-24 text-gray-700 font-medium">
            Price:
          </label>
          <input
            type="text"
            name="Price"
            id="Price"
            value={formData.Price}
            onChange={handleChange}
            className="flex-grow px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4 flex items-center">
          <label htmlFor="Date" className="w-24 text-gray-700 font-medium">
            Date:
          </label>
          <input
            type="date"
            name="Date"
            id="Date"
            value={formData.Date}
            onChange={handleChange}
            className="flex-grow px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4 flex items-center">
          <label htmlFor="category" className="w-24 text-gray-700 font-medium">
            Category:
          </label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="flex-grow px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select</option>
            <option value="Grocery">Grocery</option>
            <option value="Food">Food</option>
            <option value="Medicine">Medicine</option>
            <option value="Stationaries">Stationaries</option>
            <option value="Fashion">Fashion</option>
          </select>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Expense
          </button>
        </div>
      </form>

      <h3 className="text-lg font-bold mt-8 text-gray-800">Your Expenses:</h3>
      <ul className="mt-4">
        {expenses.map((expense, index) => (
          <li
            key={index}
            className="mb-2 p-4 border rounded bg-white shadow-sm"
          >
            <p>
              <strong>Title:</strong> {expense.Title}
            </p>
            <p>
              <strong>Price:</strong> ₹{expense.Price}
            </p>
            <p>
              <strong>Date:</strong> {expense.Date}
            </p>
            <p>
              <strong>Category:</strong> {expense.category}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;