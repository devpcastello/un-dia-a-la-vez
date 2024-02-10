import React from "react";

import { services } from "../../data/services";

export const Services = () => {
  return (
    <section className="bg-dark-green mx-auto flex flex-col px-6 py-16 lg:px-32 lg:py-16 items-center">
      <h2>Nuestros servicios</h2>
      <p>Conoce más acerca de nuestros servicios</p>

      <div className="w-full h-auto flex flex-col items-center justify-center gap-10 text-forest-green">
        {services.map(({ name, description, image }) => (
          <div className="bg-white">
            <h1>{name}</h1>
            <p>{description}</p>
            {image}
          </div>
        ))}
      </div>
    </section>
  );
};
