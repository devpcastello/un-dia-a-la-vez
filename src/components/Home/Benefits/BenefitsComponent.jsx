import React from "react";

import rightButton from "../../../assets/right-button.png";
import leftButton from "../../../assets/left-button.png";
import dulcinea from "../../../assets/dulcinea-2.png";

import "./styles.css";
import "../../../styles.css";

export const BenefitsComponent = () => {
  return (
    <div className="h-screen bg-gray-1" id="benefits">
      <div className="w-full pt-14 flex flex-col justify-around items-center text-center">
        <p>
          La psicología online es una nueva forma de terapia cómoda y flexible,
          que permite acercar a paciente y terapeuta sin límites geográficos,y
          que puede ser realizada en cualquier momento del día en base al
          horario que te resulte más cómodo
        </p>

        <div className="h-64 w-64 mt-5 border border-slate-800 rounded-2xl flex flex-col">
          <div className="h-5/6 flex justify-around items-center">
            <img className="w-8 h-8" src={leftButton} alt="left button" />
            <img className="w-30 h-32" src={dulcinea} alt="dulcinea dog" />
            <img className="w-8 h-8" src={rightButton} alt="right button" />
          </div>
          <p>No hay límites geográficos</p>
        </div>
        <button className="w-fit py-2 px-4 mt-5 rounded-full" id="button">
          Descubrir más
        </button>
      </div>
    </div>
  );
};
