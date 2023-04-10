import React from "react";

import imgStock from "../../../assets/img-stock-1.png";

export const BlogCardComponent = () => {
  return (
    <div className="bg-gray-2 w-11/12 h-96 rounded-lg mx-auto  text-center">
      <div className="h-48 w-full ">
        <img
          className="card-image w-full h-full rounded-t-lg"
          src={imgStock}
          alt=""
        />
      </div>
      <div className="p-5">
        <p className="mb-3">01/01/2023</p>
        <h3 className="text-2xl mb-3">
          Primer post que se está publicando en el blog
        </h3>
        <div className=" w-full h-12 overflow-hidden text-clip">
          <p className="text-clip overflow-hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quia ad tempora vitae. Saepe deserunt dolore iure fuga libero quod
            nostrum dignissimos illo voluptas pariatur, rem aliquid repudiandae
            inventore debitis.
          </p>
        </div>
      </div>
    </div>
  );
};
