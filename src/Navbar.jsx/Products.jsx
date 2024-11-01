import React, { useEffect, useState } from "react";
import Footer from "./Footer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const URL = "https://fakestoreapi.com/products";
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      const categoryList = [...new Set(data.map((item) => item.category))];
      setCategories(categoryList);
    };
    fetchProducts();
  }, []);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="py-4 bg-purple-600 text-2xl text-white font-semibold shadow-lg">
        <div className="text-center">Product Catalog</div>
      </header>

      <div className="flex px-4 lg:px-10 py-6">
        {/* Sidebar with categories */}
        <aside className="w-1/4 bg-white rounded-lg p-6 shadow-lg">
          <input
            type="text"
            placeholder="Search for a product"
            className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md w-full hover:bg-purple-700 transition-colors">
            Search
          </button>

          <h3 className="font-semibold text-lg mt-6 mb-4">Categories</h3>
          <ul className="space-y-2">
            <li
              onClick={() => handleCategoryFilter("")}
              className={`cursor-pointer ${
                selectedCategory === "" ? "text-purple-600 font-semibold" : ""
              } hover:text-purple-600 transition-colors`}
            >
              All Products
            </li>
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => handleCategoryFilter(category)}
                className={`cursor-pointer ${
                  selectedCategory === category
                    ? "text-purple-600 font-semibold"
                    : ""
                } hover:text-purple-600 transition-colors`}
              >
                {category}
              </li>
            ))}
          </ul>
          {selectedCategory && (
            <button
              className="text-red-500 mt-4 underline cursor-pointer"
              onClick={() => handleCategoryFilter("")}
            >
              Clear Filter
            </button>
          )}
        </aside>

        {/* Product Grid */}
        <main className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-contain mb-4"
                />
                <h3 className="text-center font-semibold text-lg text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-center text-gray-600 mb-4">
                  ${product.price}
                </p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                  View Details
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600 text-lg">
              .....Loading......
            </p>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
