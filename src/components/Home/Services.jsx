import React from "react";

import { services } from "../../data/services";

export const Services = () => {
  return (
    <section className="bg-dark-green w-full">
      <div className="bg-lemon-green lg:rounded-t-[300px] mx-auto flex flex-col px-6 py-16 items-center lg:px-32 lg:py-16">
        <h2 className="justify-self-start align-self-start text-h4 text-gray-9 font-bold mb-8 ">
          Nuestros servicios
        </h2>
        <p className="text-gray-9 text-h6 mb-10">
          Conoce más acerca de nuestros servicios
        </p>

        <div className="w-full h-auto grid grid-cols-1 items-center justify-center gap-10 text-forest-green md:min-w-[600px] md:max-w-[800px] md:grid-cols-2 lg:max-w-[1200px]  lg:grid-cols-3 ">
          {services.map(({ name, description, image }) => (
            <div className="bg-white rounded-lg  px-8 pt-12 h-96 flex flex-col items-center justify-between">
              <div className="">
                <div>
                  <h3 className="text-h6 font-semibold mb-6">{name}</h3>
                  <p>{description}</p>
                </div>
              </div>
              <div className="lg:min-w-20">{image}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
