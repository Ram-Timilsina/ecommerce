import React, { useContext, useEffect, useState } from "react";
import loader from "../../public/image/loader.gif";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
const Products = () => {
  const [sortorder, setSortOrder] = useState("");
  const [products, setProducts] = useState([]); //All data
  const [filtersearch, setFilterSearching] = useState(""); //filter product based on search
  const [categories, setCategories] = useState([]); //unique product title
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { isLoggedIn } = useContext(CartContext);
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

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(filtersearch.toLowerCase())
    );

    if (selectedCategory) {
      setFilteredProducts(
        filtered.filter((product) => product.category === selectedCategory)
      );
    } else {
      setFilteredProducts(filtered);
    }
  }, [filtersearch, selectedCategory, products]);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const sortPrice = (value) => {
    if (value === "heighest") {
      const sortedPrice = [...filteredProducts].sort(
        (item1, item2) => item2.price - item1.price
      );
      setFilteredProducts(sortedPrice);
    } else if (value === "lowest") {
      const sortedPrice = [...filteredProducts].sort(
        (item1, item2) => item1.price - item2.price
      );
      setFilteredProducts(sortedPrice);
    }
  };

  const nav = useNavigate();
  if (!isLoggedIn) {
    nav("/login");
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="py-4 bg-purple-600 text-2xl text-white font-semibold shadow-lg text-center">
        Product Catalog
      </header>
      <div className="flex justify-center h-14 my-2">
        <select
          className="bg-gray-600 text-white px-4 py-2 hover:bg-gray-700"
          onChange={(e) => sortPrice(e.target.value)}
        >
          <option value={"heighest"}>Heighest-Lowest</option>
          <option value={"lowest"}>Lowest-Heighest</option>
        </select>
      </div>

      <div className="flex px-4 lg:px-10 py-6">
        <aside
          className="max-w-55
         bg-white rounded-lg p-6 shadow-lg"
        >
          <input
            type="text"
            placeholder="Search for a product"
            value={filtersearch}
            onChange={(e) => setFilterSearching(e.target.value)}
            className="mb-4 max-w-40 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
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
                <Link to={`/viewDetails/${product.id}`}>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                    View Details
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center col-span-full text-gray-600 text-lg">
              <div className="flex justify-center">
                <img className="h-40 text-center" src={loader}></img>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
