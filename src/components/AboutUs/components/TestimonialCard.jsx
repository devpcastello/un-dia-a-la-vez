import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { testimonials } from "../../../data/testimonials";

export const TestimonialCard = () => {
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

  const currentTestimonial = testimonials[currentImageIndex];

  return (
    <section className="bg-dark-green h-[750px] w-10/12 rounded-xl flex flex-col items-center justify-evenly">
      <div className="text-center relative w-10/12 h-[700px] rounded-2xl flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center my-8">
          {currentImageIndex > 0 && (
            <ChevronLeftIcon
              className="absolute w-10 h-10 left-0 cursor-pointer text-white"
              onClick={handlePrevImage}
            />
          )}
          <div className="rounded-full overflow-hidden w-64 h-64">
            <img
              className="object-cover"
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
            />
          </div>
          {currentImageIndex < testimonials.length - 1 && (
            <ChevronRightIcon
              className="absolute w-10 h-10 right-0 cursor-pointer text-white   "
              onClick={handleNextImage}
            />
          )}
        </div>
        <div>
          <h2 className="text-white font-bold text-3xl pb-4">
            {currentTestimonial.name}
          </h2>
          <p className="text-gray-2 text-xl text-center font-light">
            {currentTestimonial.description}
          </p>
        </div>
      </div>
    </section>
  );
};
