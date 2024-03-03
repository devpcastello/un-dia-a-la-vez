import { TestimonialCard } from '../components/TestimonialCard';

export const Testimonials = () => {
  return (
    <section className='flex h-auto w-full flex-col items-center justify-center'>
      <div className='m-8'>
        <h2 className='my-8 text-center text-4xl font-medium text-gray-10'>
          Testimonios
        </h2>
        <p className='text-gray-8 xl:mx-16 xl:text-xl'>
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
