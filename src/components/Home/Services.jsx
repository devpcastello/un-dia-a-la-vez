import { Link } from 'react-router-dom';
import { services } from '../../data/homeServices';

export const Services = () => {
  return (
    <section className='w-full bg-whispering-white'>
      <div className='mx-auto flex flex-col items-center gap-16 bg-secondary px-6 py-16 lg:rounded-t-[200px] lg:px-32 lg:py-16'>
        <h2 className='self-center text-2xl font-bold text-white'>
          Conoce más acerca de nuestros servicios
        </h2>

        <div className='grid h-auto w-full grid-cols-1 items-center justify-center gap-10 md:min-w-[600px] md:max-w-[800px] md:grid-cols-2 lg:max-w-[1200px]  lg:grid-cols-3 '>
          {services.map(({ link, name, description, image }) => (
            <Link
              to={link}
              key={name}
              className='flex h-96 flex-col items-center justify-between rounded-lg bg-white px-8 pt-12 shadow-2xl duration-300 ease-in-out hover:scale-110'
            >
              <div className=''>
                <div>
                  <h3 className='mb-6 font-semibold'>{name}</h3>
                  <p>{description}</p>
                </div>
              </div>
              <div className='lg:min-w-20'>{image}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
