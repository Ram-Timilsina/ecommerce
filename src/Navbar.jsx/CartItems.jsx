import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartItems = () => {
  const { cart, setCart } = useContext(CartContext);
  const [counts, setCounts] = useState(1); // Calculate the total amount for the cart
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 text-lg">Your cart is empty!</p>
          <Link to="/OurProducts">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mt-4">
              Shop More
            </button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              {/* Item Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-600 text-sm">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div>
                <button
                  className="text-2xl text-gray-600 p-2 rounded border border-gray-300"
                  onClick={() => setCounts(counts + 1)}
                >
                  +
                </button>
                <span className="mx-4 text-lg">{counts}</span>
                <button
                  className="text-2xl text-gray-600 p-2 rounded border border-gray-300"
                  onClick={() => counts > 1 && setCounts(counts - 1)}
                >
                  -
                </button>
              </div>

              <div className="text-right">
                <p className="text-gray-600">Subtotal:</p>
                <p className="text-xl font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          {/* Total Amount */}
          <div className="flex justify-between items-center bg-gray-200 p-4 rounded-lg shadow-md mt-6">
            <h2 className="text-lg font-bold">Total:</h2>
            <p className="text-xl font-bold">${totalAmount.toFixed(2)}</p>
          </div>

          {/* Shop More Button */}
          <div className="mt-6 text-center">
            <Link to="/shop">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Shop More
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
