import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="py-24 px-28">
          <h1 className="text-5xl">The best for the best price</h1>
          <br />
          <p>
            Discover the Best for Best Prices! Explore our vast product range,
            enjoy unbeatable <br />
            prices, and shop with confidence. We prioritize quality and bring
            you the ultimate online
            <br /> shopping experience. Visit us now!
          </p>
          <div className="py-16">
            <Link to="/OurProducts">
              <button className="bg-cyan-400 p-3 rounded-lg font-semibold">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>

        <div className="col-md-6">
          <img className="py-16" src="/image/desktop.jpg"></img>
        </div>
      </div>
      <h1 className="text-2xl justify-center flex font-semibold">WHY US ?</h1>
      <div className="flex flex-col lg:flex-row justify-around items-center lg:my-12 mb-0">
        <div
          className="bg-white rounded-lg shadow-lg mx-3 p-6 pt-4 mb-6 lg:mb-0"
          style={{ width: "18rem" }}
        >
          <h2 className="text-xl font-semibold mb-2">Quality Selection</h2>
          <p className="text-gray-700">
            Our expertly chosen selection caters to discerning shoppers seeking
            only the best in fashion, electronics, and home decor. Trust our
            commitment to quality for an exceptional shopping experience.
          </p>
        </div>

        <div
          className="bg-white rounded-lg shadow-lg mx-3 p-6 pt-4 mt-3 lg:mt-0"
          style={{ width: "18rem" }}
        >
          <h2 className="text-xl font-semibold mb-2">
            Seamless Shopping Experience
          </h2>
          <p className="text-gray-700">
            Our user-friendly platform offers a seamless browsing and purchasing
            process. Enjoy hassle-free online shopping with us.
          </p>
        </div>

        <div
          className="bg-white rounded-lg shadow-lg mx-3 p-6 pt-4"
          style={{ width: "18rem" }}
        >
          <h2 className="text-xl font-semibold mb-2">Unbeatable Prices</h2>
          <p className="text-gray-700">
            We offer unbeatable prices on a wide range of products, ensuring you
            get the most value for your money. Shop smart and enjoy high-quality
            items without compromising your budget.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
