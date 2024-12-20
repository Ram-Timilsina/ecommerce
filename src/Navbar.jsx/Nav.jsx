import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../Context/CartContext";

const Nav = () => {
  const { cart, isLoggedIn, setIsLoggedIn } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-blue-600">ONLINE</span>
          <span className="text-green-600 mx-2">|</span>
          <span className="text-gray-700">STORE</span>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-gray-600 md:hidden"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 underline" : "text-gray-700"
              }
            >
              Home
            </NavLink>
          </li>

          {isLoggedIn && (
            <>
              <li>
                <NavLink
                  to="/AboutUs"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 underline" : "text-gray-700"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/OurProducts"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 underline" : "text-gray-700"
                  }
                >
                  Our Products
                </NavLink>
              </li>
              <li>
                <Link to="/cartItems" className="relative flex items-center">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-purple-600 text-2xl"
                  />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                </Link>
              </li>
            </>
          )}

          <li>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-blue-500"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-blue-500">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 mt-4 text-lg md:hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 underline" : "text-gray-700"
              }
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Home
            </NavLink>
          </li>

          {isLoggedIn && (
            <>
              <li>
                <NavLink
                  to="/AboutUs"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 underline" : "text-gray-700"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/OurProducts"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 underline" : "text-gray-700"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Products
                </NavLink>
              </li>
              <li>
                <Link
                  to="/cartItems"
                  className="relative flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-purple-600 text-2xl"
                  />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                </Link>
              </li>
            </>
          )}

          <li>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false); // Close the menu on logout
                }}
                className="text-gray-700 hover:text-blue-500"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
