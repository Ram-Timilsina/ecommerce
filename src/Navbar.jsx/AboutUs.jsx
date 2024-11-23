import React, { useState } from "react";
const AboutUs = () => {
  return (
    <div>
      <header className="py-4 bg-purple-600 text-2xl text-white font-semibold shadow-lg">
        <div className="text-center">About Us</div>
      </header>

      <div className="flex flex-col-reverse items-center justify-around md:flex-row">
        <div className="w-full pt-5 pl-40 ml-2/4">
          <h1 className="text-4xl font-semibold ">WHO ARE WE?</h1>
          <p className="py-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            elit libero, a pharetra <br />
            augue.Integer posuere erat a ante venenatis dapibus posuere velit
            aliquet. Donec
            <br /> ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod <br />
            semper. Maecenas faucibus mollis interdum
          </p>
        </div>
        <div className="px-10">
          <img className="w-80  my-3" src="/image/what.png" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
