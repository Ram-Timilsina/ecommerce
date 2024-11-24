import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../Context/CartContext";

const Nav = () => {
  const { cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-4xl font-bold flex items-center">
          <span className="text-blue-600">ONLINE</span>
          <span className="text-green-600 mx-2">|</span>
          <span className="text-gray-700">STORE</span>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 text-3xl md:hidden"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        <ul className="hidden md:flex gap-8 items-center text-xl">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline decoration-blue-500" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline decoration-blue-500" : ""
              }
              to="/AboutUs"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline decoration-blue-500" : ""
              }
              to="/OurProducts"
            >
              Our Products
            </NavLink>
          </li>
          <li>
            <Link to="/cartItems" className="flex items-center gap-2">
              <h3 className="font-bold">Cart</h3>
              <div className="relative">
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </div>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-purple-600 text-2xl"
                />
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <ul className="flex flex-col mt-4 gap-4 md:hidden text-lg">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline decoration-blue-500" : ""
              }
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline decoration-blue-500" : ""
              }
              to="/AboutUs"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline decoration-blue-500" : ""
              }
              to="/OurProducts"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Products
            </NavLink>
          </li>
          <li>
            <Link
              to="/cartItems"
              className="flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <h3 className="font-bold">Cart</h3>
              <div className="relative">
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </div>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-purple-600 text-2xl"
                />
              </div>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
