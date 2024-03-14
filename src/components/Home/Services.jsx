import { Link } from 'react-router-dom';
import { services } from '../../data/homeServices';

export const Services = () => {
  return (
    <section className='w-full bg-dark-green'>
      <div className='mx-auto flex flex-col items-center bg-lemon-green px-6 py-16 lg:rounded-t-[200px] lg:px-32 lg:py-16'>
        <h2 className='mb-8 self-center text-h4 font-bold text-gray-9 '>
          Nuestros servicios
        </h2>
        <p className='mb-10 text-h6 text-gray-9'>
          Conoce más acerca de nuestros servicios
        </p>

        <div className='grid h-auto w-full grid-cols-1 items-center justify-center gap-10 text-forest-green md:min-w-[600px] md:max-w-[800px] md:grid-cols-2 lg:max-w-[1200px]  lg:grid-cols-3 '>
          {services.map(({ link, name, description, image }) => (
            <Link
              to={link}
              key={name}
              className='flex h-96  flex-col items-center justify-between rounded-lg bg-white px-8 pt-12'
            >
              <div className=''>
                <div>
                  <h3 className='mb-6 text-h6 font-semibold'>{name}</h3>
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
