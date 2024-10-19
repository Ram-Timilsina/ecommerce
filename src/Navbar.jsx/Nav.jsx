import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav" class="py-7  text-2xl place-content-between">
      <ul class="flex gap-48">
        <li>
          <Link to="/">
            <div class="px-28 ">
              <span class="text-blue-600 font-bold p-1 text-4xl">ONLINE</span>
              <span class="text-green-600 font-bold p-1 text-4xl">|</span>
              <span class="text-gray-700 font-bold text-4xl">STORE</span>
            </div>
          </Link>
        </li>
        <div class="flex gap-x-8 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/OurProducts">Our Products</Link>
          </li>

          <div class="bg-red-300">
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
