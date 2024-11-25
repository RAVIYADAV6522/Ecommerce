import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.jpg"; //
import loggedIn from "../images/loggedIn.jpg"; 


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("bouquets");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSignOut = () => {
    // Clear any stored authentication tokens or session details
    console.log("User signed out");
    setDropdownVisible(false);
    navigate("/"); // Navigate back to the home page
  };

  return (
    <nav className="relative flex items-center justify-between px-4 py-4 bg-white h-auto">
      {/* Logo */}
      <div className="w-[130px] h-[42px]">
        <img src={logo} alt="Zuvees Logo" className="w-full h-full" />
      </div>

      {/* Menu Section */}
      <div className="flex items-center justify-between w-full max-w-[896px] bg-[#D9D9D9] rounded-full px-4 py-2 mx-4 mt-4">
        <Link
          to="/bouquets"
          onClick={() => handleMenuClick("bouquets")}
          className={`w-[192px] h-[56px] font-medium text-center rounded-[28px] flex items-center justify-center transition-all ${
            activeMenu === "bouquets"
              ? "bg-[#AD8888] text-white"
              : "text-gray-500 hover:bg-[#AD8888] hover:text-white"
          }`}
        >
          Bouquets
        </Link>
        <Link
          to="/cakes"
          onClick={() => handleMenuClick("cakes")}
          className={`w-[192px] h-[56px] font-medium text-center rounded-[28px] flex items-center justify-center transition-all ${
            activeMenu === "cakes"
              ? "bg-[#AD8888] text-white"
              : "text-gray-500 hover:bg-[#AD8888] hover:text-white"
          }`}
        >
          Cakes
        </Link>
        <Link
          to="/cards"
          onClick={() => handleMenuClick("cards")}
          className={`w-[192px] h-[56px] font-medium text-center rounded-[28px] flex items-center justify-center transition-all ${
            activeMenu === "cards"
              ? "bg-[#AD8888] text-white"
              : "text-gray-500 hover:bg-[#AD8888] hover:text-white"
          }`}
        >
          Cards
        </Link>
        <Link
          to="/chocolates"
          onClick={() => handleMenuClick("chocolates")}
          className={`w-[192px] h-[56px] font-medium text-center rounded-[28px] flex items-center justify-center transition-all ${
            activeMenu === "chocolates"
              ? "bg-[#AD8888] text-white"
              : "text-gray-500 hover:bg-[#AD8888] hover:text-white"
          }`}
        >
          Chocolates
        </Link>
      </div>

      {/* User Icon with Dropdown */}
      <div className="relative">
        <div
          className="w-[48px] h-[48px] cursor-pointer"
          onClick={toggleDropdown}
        >
          <img
            src={loggedIn}
            alt="User Icon"
            className="w-full h-full rounded-full"
          />
        </div>

        {/* Dropdown Menu */}
        {dropdownVisible && (
          <div className="absolute right-0 mt-2 w-[150px] bg-white rounded-lg shadow-lg">
            <Link
              to="/inventory"
              className="block text-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setDropdownVisible(false)}
            >
              Inventory
            </Link>
            <button
              className="block w-full text-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
