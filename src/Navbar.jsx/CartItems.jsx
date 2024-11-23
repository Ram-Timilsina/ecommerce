import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartItems = () => {
  const { cart, setCart } = useContext(CartContext);
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const updateQuantity = (id, action) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const DeleteItem = (index) => {
    const update = cart.filter((item) => item.id !== index);
    setCart(update);
  };
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
        <div className=" ">
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="col-span-2  w-20 h-20 object-cover rounded-md"
              />
              <div className="col-span-6 space-x-4 w-">
                <div className="max-w-18 justify-between">
                  <h2 className="text-xl font-semibold  justify-betwee">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="col-span-2 tems-center">
                <button
                  className="text-2xl text-gray-600 p-2 rounded border border-gray-300"
                  onClick={() => updateQuantity(item.id, "increase")}
                >
                  +
                </button>
                <span className="mx-4 text-lg">{item.quantity}</span>
                <button
                  className="text-2xl text-gray-600 p-2 rounded border border-gray-300"
                  onClick={() => updateQuantity(item.id, "decrease")}
                >
                  -
                </button>
              </div>

              <div className=" col-span-2 text-right">
                <p className="text-gray-600">Subtotal:</p>
                <p className="text-xl font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <br />
                <button
                  onClick={() => DeleteItem(item.id)}
                  className="border p-2 rounded bg-blue-500 hover:bg-blue-700 text-white"
                >
                  Delete From Cart
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center bg-gray-200 p-4 rounded-lg shadow-md mt-6">
            <h2 className="text-lg font-bold">Total:</h2>
            <p className="text-xl font-bold">${totalAmount.toFixed(2)}</p>
          </div>

          <div className="mt-6 text-center">
            <Link to="/OurProducts">
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
