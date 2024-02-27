import dulcinea from '../../assets/dulcinea-3.png';

export const Subscription = () => {
  return (
    <div className='mx-auto flex flex-col items-center bg-dark-green px-6 py-16 text-white lg:px-32 lg:py-16'>
      <div className='h-auto w-10/12'>
        <div className='mb-5 text-center md:mb-12 '>
          <h3 className='mb-8 text-3xl font-medium md:text-4xl xl:text-5xl'>
            Subscríbete a nuestro News Letter!
          </h3>
          <p className=' text-lg font-light md:text-xl md:leading-10 xl:text-2xl'>
            Recibe contenido exclusivo en tu correo personal de forma semanal:
            libros, podcast, videos, conferencias, webinars entre otros.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-8 md:my-20 md:grid-cols-2 xl:gap-0'>
          <div className='flex flex-col justify-center gap-2 xl:gap-4'>
            <label className='xl:h-8'>Nombres:</label>
            <input
              className='w-full rounded-full bg-light-blue px-4 py-2 text-white xl:h-12 xl:w-5/6 xl:px-6 xl:py-3'
              type='text'
              name='name'
              id='name'
            />
            <label className=''>Email:</label>
            <input
              className='w-full rounded-full bg-light-blue px-4 py-2 text-start text-white xl:h-12 xl:w-5/6 xl:px-6 xl:py-3'
              type='email'
              name='email'
              id='email'
            />
            <button className='mt-6 w-full rounded-full bg-swamp-green px-6 py-2 text-base font-semibold xl:h-12 xl:w-5/6 xl:px-6 xl:py-3 xl:text-2xl'>
              Subscribirme!
            </button>
          </div>
          <img src={dulcinea} alt='' />
        </div>
      </div>
    </div>
  );
};
