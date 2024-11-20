import React, { useState } from "react";

const Records = ({ expenses, onDeleteExpense, onEditExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({
    Title: "",
    Price: "",
    Date: "",
    category: "",
  });

  const handleEditClick = (index) => {
    const expenseToEdit = expenses[index];
    setEditFormData(expenseToEdit);
    setEditIndex(index);
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEditExpense(editIndex, editFormData);
    setIsEditing(false);
    setEditIndex(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Recorded Expenses</h2>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Edit Expense</h3>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="Title"
              value={editFormData.Title}
              onChange={handleEditChange}
              placeholder="Title"
              className="px-3 py-2 border rounded"
              required
            />
            <input
              type="text"
              name="Price"
              value={editFormData.Price}
              onChange={handleEditChange}
              placeholder="Price"
              className="px-3 py-2 border rounded"
              required
            />
            <input
              type="date"
              name="Date"
              value={editFormData.Date}
              onChange={handleEditChange}
              className="px-3 py-2 border rounded"
              required
            />
            <select
              name="category"
              value={editFormData.category}
              onChange={handleEditChange}
              className="px-3 py-2 border rounded"
              required
            >
              <option value="">Select Category</option>
              <option value="Grocery">Grocery</option>
              <option value="Food">Food</option>
              <option value="Medicine">Medicine</option>
              <option value="Stationaries">Stationaries</option>
              <option value="Fashion">Fashion</option>
            </select>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      ) : null}
      {expenses.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300">
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
                    onClick={() => handleEditClick(index)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteExpense(index)}
                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500 mt-4">No expenses recorded yet.</p>
      )}
    </div>
  );
};

export default Records;
