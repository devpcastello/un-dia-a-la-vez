import React from "react";

import { services } from "../../data/services";

export const Services = () => {
  return (
    <section className="bg-lemon-green bg-opacity-50 mx-auto flex flex-col px-6 py-16 lg:px-32 lg:py-16 items-center ">
      <h2 className="justify-self-start align-self-start text-h4 text-gray-9 font-bold mb-8 ">
        Nuestros servicios
      </h2>
      <p className="text-gray-9 text-h6 mb-10">
        Conoce más acerca de nuestros servicios
      </p>

      <div className="w-full h-auto flex flex-col items-center justify-center gap-10 text-forest-green">
        {services.map(({ name, description, image }) => (
          <div className="bg-white rounded-lg  px-8 pt-12 h-80 flex flex-col flex-1 items-center justify-center ">
            <div>
              <h3 className="text-h6 font-semibold mb-6">{name}</h3>
              <p>{description}</p>
            </div>
            {image}
          </div>
        ))}
      </div>
    </section>
  );
};
