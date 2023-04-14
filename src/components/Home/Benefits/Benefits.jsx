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
        <p className="text-xl text-gray-8 font-light md:leading-10 md:text-2xl xl:max-w-[1200px] xl:leading-loose">
          {currentBenefit.description}
        </p>

        <div>
          <div className="h-64 w-64 mt-5 border border-slate-800 rounded-2xl flex flex-col md:h-96 md:w-96 xl:min-w-[400px] xl:min-h-[400px] xl:mt-1 xl:hidden">
            <div className="h-5/6 flex flex-row justify-around items-center relative left-2 ">
              {currentImageIndex > 0 && (
                <ChevronLeftIcon
                  className="w-8 h-8 col-span1 absolute left-2"
                  onClick={handlePrevImage}
                />
              )}

              <img
                className="w-40 h-40 col-span-4 xl:w-56 xl:h-56"
                src={currentBenefit.image}
                alt="dulcinea dog"
              />

              {currentImageIndex < benefits.length - 1 && (
                <ChevronRightIcon
                  className="w-8 h-8 col-span-1 absolute right-2"
                  onClick={handleNextImage}
                />
              )}
            </div>
            <p className="text-lg md:text-2xl">{currentBenefit.title}</p>
          </div>
          <button className="w-fit py-2 px-4 mt-5 rounded-full bg-bright-green md:py-3 md:px-5 md:text-xl">
            <Link to="/about">Descubrir más</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
