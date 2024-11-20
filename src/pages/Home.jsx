import React from "react";
import Navbar from'../components/Navbar'

const Home = () => {
  return (
    <>

    <Navbar />
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      <p className="text-gray-600 mt-4">Explore your expenses and records here.</p>
    </div>


    </>
    
  );
};

export default Home;
