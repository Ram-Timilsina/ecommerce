import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        <div className="py-12 lg:py-24 lg:px-16 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold">
            The best for the best price
          </h1>
          <p className="mt-4 text-gray-700">
            Discover the Best for Best Prices! Explore our vast product range,
            enjoy unbeatable prices, and shop with confidence. We prioritize
            quality and bring you the ultimate online shopping experience. Visit
            us now!
          </p>
          <div className="mt-8">
            <Link to="/OurProducts">
              <button className="bg-cyan-400 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-500 transition">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-8 lg:mt-0 lg:px-8 flex justify-center">
          <img
            className="w-full max-w-md lg:max-w-lg mt-6 "
            src="/image/desktop.jpg"
            alt="Product display"
          />
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-center mt-16">WHY US?</h1>
      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-stretch mt-8 space-y-8 lg:space-y-0 lg:space-x-6">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
          <h2 className="text-xl font-semibold mb-2">Quality Selection</h2>
          <p className="text-gray-700">
            Our expertly chosen selection caters to discerning shoppers seeking
            only the best in fashion, electronics, and home decor. Trust our
            commitment to quality for an exceptional shopping experience.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
          <h2 className="text-xl font-semibold mb-2">
            Seamless Shopping Experience
          </h2>
          <p className="text-gray-700">
            Our user-friendly platform offers a seamless browsing and purchasing
            process. Enjoy hassle-free online shopping with us.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
          <h2 className="text-xl font-semibold mb-2">Unbeatable Prices</h2>
          <p className="text-gray-700">
            We offer unbeatable prices on a wide range of products, ensuring you
            get the most value for your money. Shop smart and enjoy high-quality
            items without compromising your budget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
