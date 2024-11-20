import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">MyExpenseTracker</Link>
        </div>
        <div className="space-x-6">
          <Link to="/home" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/" className="hover:text-gray-200">
            Add Expenses
          </Link>
          <Link to="/records" className="hover:text-gray-200">
            Records
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
