import React from "react";

const Home = () => {
  return (
    <div class="">
      <div class="flex">
        <div class="py-24 px-28">
          <h1 class="text-5xl">The best for the best price</h1>
          <br />
          <p>
            Discover the Best for Best Prices! Explore our vast product range,
            enjoy unbeatable <br />
            prices, and shop with confidence. We prioritize quality and bring
            you the ultimate online
            <br /> shopping experience. Visit us now!
          </p>
          <div class="py-16">
            <button class="bg-cyan-400 p-3 rounded-lg font-semibold">
              SHOP NOW
            </button>
          </div>
        </div>

        <div class="col-md-6">
          <img class="py-16" src="/image/desktop.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
