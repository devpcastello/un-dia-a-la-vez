import { useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import { PropTypes } from 'prop-types';

export const TestimonialCard = ({ cards }) => {
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

  const currentTestimonial = cards[currentImageIndex];

  // console.log(testimonials);
  // console.log(cards);

  return (
    <section className='flex h-[750px] w-[350px] flex-col items-center justify-evenly rounded-xl bg-dark-green'>
      <div className='relative flex  h-[700px] flex-col items-center justify-center rounded-2xl text-center '>
        <div className='my-8 flex flex-col items-center justify-center'>
          {currentImageIndex > 0 && (
            <ChevronLeftIcon
              className='absolute left-0 size-10 cursor-pointer text-white'
              onClick={handlePrevImage}
            />
          )}
          <div className='size-64 overflow-hidden rounded-full'>
            <img
              className='object-cover'
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
            />
          </div>
          {currentImageIndex < cards.length - 1 && (
            <ChevronRightIcon
              className='absolute right-0 size-10 cursor-pointer text-white   '
              onClick={handleNextImage}
            />
          )}
        </div>
        <div>
          <h2 className='pb-4 text-3xl font-bold text-white'>
            {currentTestimonial.name}
          </h2>
          <p className='text-center text-xl font-light text-gray-2'>
            {currentTestimonial.description}
          </p>
        </div>
      </div>
    </section>
  );
};

TestimonialCard.propTypes = {
  cards: PropTypes.array.isRequired,
};
