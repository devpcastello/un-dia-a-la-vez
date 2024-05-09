import PropTypes from 'prop-types';

export const HeroSection = ({
  heroBackground,
  heroTitle,
  heroSubtitle,
  heroMessage,
  heroButton,
}) => {
  const handleOpenWtpp = (heroTitle) => {
    window.open(
      `https://wa.me/+51923022460?text=${encodeURIComponent(`Hola, me gustaría agendar una cita de ${heroTitle}`)}`,
      '_blank',
    );
  };

  return (
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
            <h1 className='font-semibold text-white lg:text-h6'>{heroTitle}</h1>
            <p className=' text-h4 font-bold text-white md:text-h5 lg:text-h1 lg:leading-[60px]'>
              {heroSubtitle}
            </p>
          </div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <p className='text-base text-white lg:text-h6'>{heroMessage}</p>
            <button
              className='w-64 cursor-pointer rounded-full bg-dark-green px-4 py-2'
              onClick={() => {
                handleOpenWtpp(heroTitle);
              }}
            >
              {heroButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  heroBackground: PropTypes.string.isRequired,
  heroTitle: PropTypes.string.isRequired,
  heroSubtitle: PropTypes.string.isRequired,
  heroMessage: PropTypes.string.isRequired,
  heroButton: PropTypes.string.isRequired,
};
