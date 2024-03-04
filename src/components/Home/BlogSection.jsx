import image2 from '../../assets/selfCare/posts/post3.jpg';
import image1 from '../../assets/selfCare/posts/post2.jpg';

export const BlogSection = () => {
  return (
    <section className='mx-auto flex flex-col items-center bg-dark-green px-6 py-16 lg:px-32 lg:py-16'>
      <div className='md:hidden '>
        <h2 className='mb-12 text-h4 font-semibold text-white'>
          Descubre los recursos disponibles para ayudarte
        </h2>
        <div className='mb-10 text-white'>
          <div className='relative mb-6'>
            <img
              src={image1}
              alt=''
              className='card-image size-full rounded-xl'
            />
            <p className='absolute bottom-0 px-5 py-2 text-h6 font-semibold '>
              Información valiosa para tu bienestar mental
            </p>
          </div>
          <h3 className='mb-2 text-h5 font-bold'>Accede a nuestro blog</h3>
          <p className='text-base '>
            Contenido gratuito que te ayudará a conocerte a ti mismo
          </p>
          <button className='mt-6 rounded-full bg-swamp-green px-6 py-3 text-base font-semibold'>
            Ver más
          </button>
        </div>
        <div className='text-white'>
          <div className='relative mb-6 rounded-xl bg-light-blue'>
            <img
              src={image2}
              alt=''
              className='card-image size-full rounded-xl px-5 pt-5'
            />
            <p className='px-5 py-2 text-h6 font-semibold '>
              Información valiosa para tu bienestar mental
            </p>
          </div>
          <h3 className='mb-2 text-h5 font-bold'>
            Descarga recursos prácticos
          </h3>
          <p className='text-base '>
            Contenido gratuito que te ayudará a conocerte a ti mismo
          </p>
          <button className='mt-6 rounded-full bg-swamp-green px-6 py-3 text-base font-semibold'>
            Ver más
          </button>
        </div>
      </div>
      <div className='hidden w-full flex-col gap-16 md:flex'>
        <h2 className='mb-12 self-end text-h4 font-semibold text-white'>
          Descubre los recursos disponibles para ayudarte
        </h2>
        <div className='mb-10 mr-40 self-end text-white md:max-w-[700px]'>
          <div className='relative mb-6 max-w-[1400px] md:w-[600px]'>
            <img
              src={image1}
              alt=''
              className='h-80 w-full rounded-t-xl object-cover'
            />
            <p className='absolute bottom-0 px-5 py-2 text-h6 font-semibold '>
              Información valiosa para tu bienestar mental
            </p>
          </div>
          <h3 className='mb-2 text-h5 font-bold'>Accede a nuestro blog</h3>
          <p className='text-base '>
            Contenido gratuito que te ayudará a conocerte a ti mismo
          </p>
          <button className='mt-6 rounded-full bg-swamp-green px-6 py-3 text-base font-semibold'>
            Ver más
          </button>
        </div>
        <div className='ml-40 self-start text-white md:max-w-[600px]'>
          <div className='relative mb-6 grid grid-cols-2 overflow-hidden rounded-xl bg-light-blue'>
            <img
              src={image2}
              alt=''
              className='order-1 h-80 w-full rounded-t-xl object-cover'
            />
            <p className='order-2 self-center px-5 py-2 text-h6 font-semibold'>
              Información valiosa para tu bienestar mental
            </p>
          </div>
          <h3 className='mb-2 text-h5 font-bold'>
            Descarga recursos prácticos
          </h3>
          <p className='text-base'>
            Contenido gratuito que te ayudará a conocerte a ti mismo
          </p>
          <button className='mt-6 rounded-full bg-swamp-green px-6 py-3 text-base font-semibold'>
            Ver más
          </button>
        </div>
      </div>
    </section>
  );
};
