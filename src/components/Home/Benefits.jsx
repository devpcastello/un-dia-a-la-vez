// import { benefits } from '../../data/benefits';
import CaminoBlobMobile from '../../assets/CaminoBlobMobile';
import CaminoBlobDesktop from '../../assets/CaminoBlobDesktop';

export const Benefits = () => {
  return (
    <section className=' w-full bg-whispering-white'>
      <div className='mx-auto flex flex-col items-center rounded-b-[60px] bg-primary px-6 py-16 lg:items-start lg:rounded-b-[200px] lg:px-32'>
        <div className='lg:w-full'>
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

          <div className='m-auto hidden justify-center lg:flex '>
            <CaminoBlobDesktop width={1200} height={600} />
          </div>
          <div className='m-auto hidden justify-center md:flex lg:hidden lg:py-20'>
            <CaminoBlobDesktop width={900} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
};
