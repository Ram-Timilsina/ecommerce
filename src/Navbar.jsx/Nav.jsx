import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/OurProducts">Our Products</Link>
          </li>

          <div className="bg-red-300"></div>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
