import React, { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    Title: '',
    Price: '',
    Date: '',
    category: '',
  });

  const [expenses, setExpenses] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedExpenses = [...expenses, formData];
    setExpenses(updatedExpenses);
    setFormData({ Title: '', Price: '', Date: '', category: '' });
    alert('Expense added successfully!');
  };

  const handleDelete = (indexToRemove) => {
    const updatedExpenses = expenses.filter((_, index) => index !== indexToRemove);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded shadow-md">
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
      {expenses.length > 0 ? (
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{expense.Title}</td>
                <td className="border border-gray-300 px-4 py-2">₹{expense.Price}</td>
                <td className="border border-gray-300 px-4 py-2">{expense.Date}</td>
                <td className="border border-gray-300 px-4 py-2">{expense.category}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500 mt-4">No expenses added yet.</p>
      )}
    </div>
  );
};

export default Home;
