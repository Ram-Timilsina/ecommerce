import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ViewDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [counter, setCounter] = useState(0);
  console.log(product);
  useEffect(() => {
    const apiFetch = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data1 = await response.json();
      setProduct(data1);
    };
    apiFetch();
  }, [id]);
  return (
    <div>
      <div className="absolute">
        <Link to="/ourProducts">
          <button className="bg-blue-200 ">Back to Products</button>
        </Link>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden ">
          <div className="w-full  shadow-lg mb-4 object-cover">
            <img src={product.image} alt={product.title} className="" />
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-bold text-purple-700 mb-2 text-center">
              {product.title}
            </h2>
            <p className="text-lg font-semibold text-gray-800 text-center mb-4">
              Price: <span className="text-purple-600">${product.price}</span>
            </p>
            <p className="text-md font-medium text-gray-600 text-center mb-4">
              Category: {product.category}
            </p>
            <p className="text-base text-gray-700 leading-relaxed text-justify">
              {product.description}
            </p>
            <div>
              <div className=" flex justify-center text-6xl">
                <button
                  onClick={() => {
                    if (counter > 0) {
                      setCounter(counter - 1);
                    }
                  }}
                >
                  -
                </button>
                {counter}
                <button
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
