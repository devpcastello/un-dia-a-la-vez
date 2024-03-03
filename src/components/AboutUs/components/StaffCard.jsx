import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import { staff } from '../../../data/staff';

export const StaffCard = () => {
  // Se crea un estado para almacenar dónde estamos al momento de mostrar las tarjetas
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
    <section className='flex h-auto w-full flex-col items-center justify-center gap-8'>
      <div className='bg-color9 relative flex h-[480px] w-[350px] flex-col items-center justify-center rounded-2xl '>
        <div className='mt-10 flex flex-col items-center justify-center'>
          {currentImageIndex > 0 && (
            <ChevronLeftIcon
              className='absolute left-0 size-10 cursor-pointer'
              onClick={handlePrevImage}
            />
          )}
          <div className='flex h-[360px] w-[280px] items-center justify-center'>
            <img
              className='cover h-[380px] rounded-xl'
              src={currentStaff.image}
              alt=''
            />
          </div>
          {currentImageIndex < staff.length - 1 && (
            <ChevronRightIcon
              className='absolute right-0 size-10 cursor-pointer'
              onClick={handleNextImage}
            />
          )}
        </div>
        <div>
          <h2 className='mt-5 text-xl font-medium'>{currentStaff.name}</h2>
          <Link to={`/about/staff/${currentStaff.id}`}>
            <p className='text-center text-sm font-light'>Ver más</p>
          </Link>
        </div>
      </div>
    </section>
  );
};
