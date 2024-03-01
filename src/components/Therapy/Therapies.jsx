import { therapies } from '../../data/services';

export const Therapies = () => {
  return (
    <>
      {therapies.map(
        ({
          id,
          heroBackground,
          heroTitle,
          heroSubtitle,
          heroMessage,
          heroButton,
          descriptionTitle,
          description,
          descriptionImage,
          troublesTitle,
          troublesCards,
          benefitsTitle,
          benefitsCards,
          buttonTherapy,
        }) => (
          <main key={id}>
            <section
              className='relative z-[-15] flex h-screen w-full flex-col items-center justify-center gap-20 bg-center text-white md:gap-8'
              style={{
                backgroundImage: `url(${heroBackground})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                height: '100vh',
                width: '100%',
              }}
            >
              <div
                className='absolute inset-0 z-[-10]  bg-gradient-to-b from-transparent to-yellow-green to-70% opacity-100'
                style={{ filter: 'blur(0px)' }}
              ></div>
              <div>
                <div className='mx-auto flex flex-col items-center justify-center gap-10 text-center md:w-1/2 lg:w-2/3'>
                  <div className='mx-auto flex flex-col gap-4'>
                    <h1 className='font-semibold text-white lg:text-h6'>
                      {heroTitle}
                    </h1>
                    <p className=' text-h4 font-bold text-white md:text-h5 lg:text-h1 lg:leading-[60px]'>
                      {heroSubtitle}
                    </p>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-4'>
                    <p className='text-base text-white lg:text-h6'>
                      {heroMessage}
                    </p>
                    <button className='w-64 rounded-full bg-dark-green px-4 py-2'>
                      {heroButton}
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className='m-auto grid w-full grid-cols-1 items-center justify-center gap-8 bg-yellow-green px-5 pb-20 pt-10 text-white lg:grid-cols-2 lg:px-40'>
              <img
                src={descriptionImage}
                alt=''
                className='order-last m-auto w-56 sm:order-first'
              />
              <div className='flex flex-col gap-8 md:gap-4'>
                <h2 className='text-center text-h4 font-semibold leading-h4 md:text-left md:text-h6 lg:text-h5'>
                  {descriptionTitle}
                </h2>
                <p className='leading-[18px] lg:text-h6 lg:leading-[24px]'>
                  {description}
                </p>
              </div>
            </section>

            <section className='px-5 py-20'>
              <h2 className='mb-20 text-center text-h4 font-semibold leading-h4 md:mb-10'>
                {troublesTitle}
              </h2>
              <div className='m-auto grid grid-cols-1 gap-16 md:w-full md:grid-cols-2  lg:w-2/3 xl:w-1/2'>
                {troublesCards.map(({ title, description, image }) => (
                  <div
                    key={title}
                    className='m-auto flex flex-col items-center justify-center gap-3  text-center sm:w-full'
                  >
                    <img src={image} alt='trouble-card' className='size-40' />
                    <h3 className='text-h6 font-bold'>{title}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className='flex flex-col gap-10 px-5 py-20'>
              <h2 className='mb-20 text-center text-h4 font-semibold leading-h4 md:mb-10'>
                {benefitsTitle}
              </h2>
              <div className='m-auto grid grid-cols-1 gap-16 lg:w-2/3'>
                {benefitsCards.map(({ description, image }) => (
                  <div
                    key={image}
                    className='flex items-center gap-5 text-center'
                  >
                    <img src={image} alt='benefit-card' className='w-24' />
                    <p>{description}</p>
                  </div>
                ))}
                <button className='m-auto w-72 rounded-full bg-dark-green px-4 py-2 text-white'>
                  {buttonTherapy}
                </button>
              </div>
            </section>
          </main>
        ),
      )}
    </>
  );
};
