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
          heroButton,
          descriptionTitle,
          description,
          descriptionImage,
          troublesTitle,
          troublesCards,
          benefitsTitle,
          benefitsCards,
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
                <div className='mx-10 flex flex-col items-center justify-center gap-5 text-center '>
                  <h1 className='text-white'>{heroTitle}</h1>
                  <p className='text-white'>{heroSubtitle}</p>
                  <p className='text-white'>{descriptionTitle}</p>
                  <button> {heroButton} </button>
                </div>
              </div>
            </section>
            <section className='flex h-auto w-full flex-col gap-5 bg-yellow-green px-10 py-20'>
              <h2>{descriptionTitle}</h2>
              <p>{description}</p>
              <img src={descriptionImage} alt='' />
            </section>
            <section>
              <h2>{troublesTitle}</h2>
              {troublesCards.map(({ title, description, image }) => (
                <div key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <img src={image} alt='trouble-card' />
                </div>
              ))}
            </section>
            <section>
              <h2>{benefitsTitle}</h2>
              {benefitsCards.map(({ title, description, image }) => (
                <div key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <img src={image} alt='benefit-card' />
                </div>
              ))}
            </section>
          </main>
        ),
      )}
    </>
  );
};
