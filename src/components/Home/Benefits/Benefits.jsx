import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

import { benefits } from "../../../data/benefits";

export const Benefits = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  const currentBenefit = benefits[currentImageIndex];

  return (
    <div className="h-screen bg-gray-1">
      <div className="w-full h-full pt-14 p-8 flex flex-col justify-around items-center text-center ">
        <p className="text-xl text-gray-8 font-light">
          {currentBenefit.description}
        </p>

        <div>
          <div className="h-64 w-64 mt-5 border border-slate-800 rounded-2xl flex flex-col">
            <div className="h-5/6 grid grid-cols-6 justify-around items-center">
              {currentImageIndex > 0 && (
                <ChevronLeftIcon
                  className="w-8 h-8 col-span1"
                  onClick={handlePrevImage}
                />
              )}

              <img
                className="w-40 h-40 col-span-4"
                src={currentBenefit.image}
                alt="dulcinea dog"
              />

              {currentImageIndex < benefits.length - 1 && (
                <ChevronRightIcon
                  className="w-8 h-8 col-span-1"
                  onClick={handleNextImage}
                />
              )}
            </div>
            <p>{currentBenefit.title}</p>
          </div>
          <button className="w-fit py-2 px-4 mt-5 rounded-full bg-bright-green">
            <Link to="/about">Descubrir más</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
