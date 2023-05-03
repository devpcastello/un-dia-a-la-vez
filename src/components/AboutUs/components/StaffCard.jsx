import { useState } from "react";
import { Link } from "react-router-dom";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { staff } from "../../../data/staff";

export const StaffCard = () => {
  // Se crea un estado para almacenar dónde estamos al momento de renderizar las tarjetas
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Maneja la transición de las tarjetas al presionar sobre el ícono de siguiente
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  // Maneja la transición de las tarjetas al presionar sobre el ícono de anterior
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  const currentStaff = staff[currentImageIndex];
  console.log(currentStaff);

  return (
    <section className="w-full h-auto flex flex-col justify-center items-center gap-8">
      <div className="bg-light-green relative w-10/12 h-[480px] rounded-2xl flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center mt-10">
          {currentImageIndex > 0 && (
            <ChevronLeftIcon
              className="absolute w-10 h-10 left-0 cursor-pointer"
              onClick={handlePrevImage}
            />
          )}
          <div className="w-[280px] h-[360px] flex items-center justify-center">
            <img
              className="cover rounded-xl h-[380px]"
              src={currentStaff.image}
              alt=""
            />
          </div>
          {currentImageIndex < staff.length - 1 && (
            <ChevronRightIcon
              className="absolute w-10 h-10 right-0 cursor-pointer"
              onClick={handleNextImage}
            />
          )}
        </div>
        <div>
          <h2 className="text-xl font-medium mt-5">{currentStaff.name}</h2>
          <Link to={`/about/staff/${currentStaff.id}`}>
            <p className="text-sm text-center font-light">Ver más</p>
          </Link>
        </div>
      </div>
    </section>
  );
};
