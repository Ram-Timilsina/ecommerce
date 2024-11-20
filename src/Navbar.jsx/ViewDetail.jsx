import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const ViewDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const apiFetch = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    apiFetch();
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { setCart, cart } = useContext(CartContext);

  const handleAddToCart = () => {
    const result = cart.find((items) => items.id == product.id);
    console.log(result);
    setCart([...cart, { ...product, quantity: counter }]);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <div className="w-full mb-6">
        <Link to="/ourProducts">
          <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
            Back to Products
          </button>
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl w-full flex p-6">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain w-full h-full"
          />
        </div>

        <div className="w-1/2 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {product.title}
          </h2>
          <p className="text-sm text-yellow-500 mb-2">
            ★ {product.rating?.rate}/5 ({product.rating?.count} customer
            reviews)
          </p>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            ${product.price}
          </p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-gray-500 text-sm mb-6">
            Category: {product.category}
          </p>

          <div className="flex items-center mb-6">
            <button
              onClick={() => counter > 1 && setCounter(counter - 1)}
              className="text-2xl text-gray-600 p-2 rounded border border-gray-300"
            >
              -
            </button>
            <span className="mx-4 text-lg">{counter}</span>
            <button
              onClick={() => setCounter(counter + 1)}
              className="text-2xl text-gray-600 p-2 rounded border border-gray-300"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-yellow-500 text-white w-full py-2 rounded hover:bg-yellow-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
