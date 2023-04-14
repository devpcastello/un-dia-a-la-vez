import React from "react";
import { TestimonialCard } from "../components/TestimonialCard";

export const Testimonials = () => {
  return (
    <section className="w-full h-auto flex flex-col justify-center items-center">
      <div className="m-8">
        <h2 className="text-gray-10 text-4xl my-8 text-center font-medium">
          Testimonios
        </h2>
        <p className="text-gray-8">
          ¡Aquí te presentamos algunas opiniones de nuestros clientes
          satisfechos! Nos enorgullece saber que hemos cumplido con sus
          expectativas y hemos brindado soluciones efectivas a sus necesidades.
          Esperamos que sus testimonios te den la confianza que necesitas para
          elegir nuestro producto/servicio y unirte a nuestra comunidad de
          clientes satisfechos. ¡Gracias por confiar en nosotros!
        </p>
      </div>

      <TestimonialCard />
    </section>
  );
};
