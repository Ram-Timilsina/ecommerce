import React from "react";

const AboutUs = () => {
  return (
    <div>
      <header class="py-3 bg-pink-50 text-4xl">
        <div class="ml-40">/About</div>
      </header>
      <div class="flex">
        <div class="w-full pt-5 pl-40 ml-2/4">
          <h1 class="text-4xl font-semibold ">WHO ARE WE?</h1>
          <p class="py-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            elit libero, a pharetra <br />
            augue.Integer posuere erat a ante venenatis dapibus posuere velit
            aliquet. Donec
            <br /> ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod <br />
            semper. Maecenas faucibus mollis interdum
          </p>
        </div>
        <div class="px-10">
          <img class="h-4/5 my-3" src="/image/what.png" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
