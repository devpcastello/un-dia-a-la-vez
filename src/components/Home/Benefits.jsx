// import { benefits } from '../../data/benefits';
import CaminoBlobMobile from '../../assets/CaminoBlobMobile';
import CaminoBlobDesktop from '../../assets/CaminoBlobDesktop';
import { useState, useEffect } from 'react';

export const Benefits = () => {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const [selectedBenefitDescription, setSelectedBenefitDescription] = useState(
  //   benefits[0].description,
  // );

  // const handleNextImage = () => {
  //   setCurrentImageIndex((prevIndex) => prevIndex + 1);
  // };

  // const handlePrevImage = () => {
  //   setCurrentImageIndex((prevIndex) => prevIndex - 1);
  // };

  // const handleBenefitClick = (description) => {
  //   setSelectedBenefitDescription(description);
  // };

  // const currentBenefit = benefits[currentImageIndex];

  return (
    <section className=' w-full bg-dark-green'>
      <div className='mx-auto flex flex-col items-center bg-lemon-green px-6 py-16 lg:items-start lg:rounded-b-[300px] lg:px-32'>
        <div className='text-gray-8 lg:w-full'>
          <div className='relative max-w-xs md:hidden'>
            <h2>Te ayudamos a encontrar tu camino.</h2>
            <strong>Un día a la vez</strong>
            <CaminoBlobMobile />
            <p className='absolute left-14 top-56'>
              Te <span className='font-bold'>acompañamos</span> en cada fase del
              proceso de sanación
            </p>
            <p className='absolute left-14 top-[400px]'>
              <span className='font-bold'>No hay límites</span> geográficos
            </p>
            <p className='absolute left-10 top-[600px]'>
              Un espacio <span className='font-bold'>amigable</span> y{' '}
              <span className='font-bold'>seguro</span>
            </p>
          </div>

          <div className='m-auto hidden justify-center lg:flex lg:py-20'>
            <CaminoBlobDesktop width={1200} height={600} />
          </div>
          <div className='m-auto hidden justify-center md:flex lg:hidden lg:py-20'>
            <CaminoBlobDesktop width={900} height={400} />
          </div>
          {/* <div className='relative hidden w-[1200px] md:flex md:min-h-[500px] md:items-center md:justify-center md:text-h6 lg:text-h5 xl:my-20'> */}
          {/* <h2 className='absolute left-0 top-0 md:text-h5 lg:left-32 lg:text-h4 xl:left-28'>
              Te ayudamos a encontrar tu camino.
              <br />
              <strong>Un día a la vez</strong>
            </h2> */}
          {/* <div className='md:min-w-[700px] lg:my-40 lg:min-w-[780px] xl:min-w-[1050px]'></div> */}

          {/* <p className='absolute md:left-[200px] md:top-[110px] lg:left-[430px] lg:top-[160px] '>
              <span className='font-bold'>No hay límites</span> geográficos
            </p>
            <div className='absolute bottom-6 flex h-auto w-full gap-6 xl:left-[250px] xl:gap-[110px]'>
              <p className='w-80'>
                Te acompañamos en cada fase del proceso de sanación
              </p>
              <p className=''>
                Un espacio <span className='font-bold'>amigable</span> y{' '}
                <span className='font-bold'>seguro</span>
              </p>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};
