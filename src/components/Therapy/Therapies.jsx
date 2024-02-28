import { therapies } from '../../data/services';

export const Therapies = () => {
  return (
    <main>
      {therapies.map(
        ({
          id,
          heroBackground,
          heroTitle,
          heroSubtitle,
          heroButton,
          descriptionTitle,
          description,
          troublesTitle,
          troublesCards,
          benefitsTitle,
          benefitsCards,
        }) => (
          <section
            key={id}
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
                <button>Solicitar terapia de pareja</button>
              </div>
            </div>
            <div></div>
          </section>
        ),
      )}
    </main>
  );
};
