import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch the products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      console.log("...getting data");
      const URL = "https://fakestoreapi.com/products";
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle input change for search
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter products based on searchTerm
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <header class="py-3 bg-pink-50 text-2xl">
        <div class="ml-40">/Product</div>
      </header>
      <div className="h-80 bg-red-400 w-3/12">
        <div className="p-8">
          <input
            type="text"
            placeholder="Find a product"
            value={searchTerm}
            onChange={handleInputChange}
            className="mb-2"
          />
          <button className="bg-blue-800 px-2 py-1 rounded-lg text-white mt-1">
            Submit
          </button>
          <h1 className="font-black">Products</h1>
          <div>
            {filteredProducts.map((product) => (
              <h2 key={product.id}>{product.title}</h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
