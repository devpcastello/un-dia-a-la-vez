import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

import { benefits } from "../../data/benefits";
import CaminoBlob from "../../assets/CaminoBlob";

export const Benefits = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [selectedBenefitDescription, setSelectedBenefitDescription] = useState(
    benefits[0].description
  );

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  const handleBenefitClick = (description) => {
    setSelectedBenefitDescription(description);
  };

  const currentBenefit = benefits[currentImageIndex];

  return (
    <section className="bg-lemon-green bg-opacity-50 mx-auto flex flex-col px-6 py-16 lg:px-32 lg:py-16 items-center">
      <div className="relative md:hidden max-w-xs">
        <h2>Te ayudamos a encontrar tu camino.</h2>
        <strong>Un día a la vez</strong>
        <CaminoBlob />
        <p className="absolute top-56 left-14">
          Te <span className="font-bold">acompañamos</span> en cada fase del
          proceso de sanación
        </p>
        <p className="absolute top-[400px] left-14">
          <span className="font-bold">No hay límites</span> geográficos
        </p>
        <p className="absolute top-[600px] left-10">
          Un espacio <span className="font-bold">amigable</span> y{" "}
          <span className="font-bold">seguro</span>
        </p>
        <div className="absolute top-[660px] left-8"></div>
      </div>
    </section>
  );
};
