import React from "react";

const AboutUs = () => {
  return (
    <div>
      <header className="py-4 bg-purple-600 text-2xl text-white font-semibold shadow-lg">
        <div className="text-center">About Us</div>
      </header>

      <div className="flex flex-col-reverse items-center justify-around px-4 lg:px-20 lg:flex-row lg:py-10">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:pl-10">
          <h1 className="text-3xl lg:text-4xl font-semibold">WHO ARE WE?</h1>
          <p className="py-5 text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            elit libero, a pharetra augue. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet. Donec ullamcorper nulla non metus
            auctor fringilla. Vestibulum id ligula porta felis euismod semper.
            Maecenas faucibus mollis interdum.
          </p>
        </div>

        <div className="flex justify-center lg:w-1/2">
          <img
            className="w-64 sm:w-80 lg:w-96 rounded-lg shadow-md my-5"
            src="/image/what.png"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
