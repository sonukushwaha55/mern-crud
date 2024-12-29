import React, { useState } from "react";
import CreatePage from '../pages/CreatePage'
import { FaShoppingCart, FaPlus, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };
 
  return (
    <>
 <nav className={`flex justify-between items-center px-16 py-4 shadow-md ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
      
      <div className="flex items-center gap-3">
        <h1 className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
        <Link to={"/"}> Product Store</Link>
          </h1>
        <FaShoppingCart size={24} className={`${darkMode ? "text-white" : "text-gray-800"}`} />
      </div>

      <div className="flex items-center gap-4">
        <button
        
          className={`p-2 rounded-md ${darkMode ? "bg-gray-600 text-white" : "bg-blue-500 text-white"} hover:opacity-80`}
        >
          
          <Link to={"/create"}><FaPlus size={16} /></Link>
        </button>

        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-md ${darkMode ? "bg-gray-600 text-white" : "bg-yellow-400 text-gray-800"} hover:opacity-80`}
        >
          {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>
      </div>
    </nav>
    <CreatePage/>

    </>
  )
}

export default NavBar
