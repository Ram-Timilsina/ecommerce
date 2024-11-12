import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className="py-7  text-2xl place-content-between">
      <ul className="flex gap-48">
        <li>
          <Link to="/">
            <div className="px-28 ">
              <span className="text-blue-600 font-bold p-1 text-4xl">
                ONLINE
              </span>
              <span className="text-green-600 font-bold p-1 text-4xl">|</span>
              <span className="text-gray-700 font-bold text-4xl">STORE</span>
            </div>
          </Link>
        </li>
        <div className="flex gap-x-8 ">
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
          <div>
            {" "}
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-purple-600 text-2xl"
            />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
