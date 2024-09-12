import PropTypes from 'prop-types';

export const HeroSection = ({
  heroBackground,
  heroTitle,
  heroMessage,
  heroImage,
}) => {
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
        className='absolute inset-0 -z-10  bg-gradient-to-b from-transparent to-secondary to-70% opacity-100'
        style={{ filter: 'blur(0px)' }}
      ></div>
      <div>
        <div className='mx-auto grid w-11/12 grid-cols-1 items-center justify-center gap-10 text-center md:w-3/4 lg:w-3/4 lg:grid-cols-2 lg:gap-20'>
          <div className='mx-auto flex flex-col gap-5 lg:gap-10'>
            <h1 className='text-xl font-bold text-white md:text-2xl lg:text-3xl lg:leading-[60px]'>
              {heroTitle}
            </h1>
            <p className='text-base text-white'>{heroMessage}</p>
          </div>
          <img className='rounded-lg' src={heroImage} alt={heroTitle} />
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  heroBackground: PropTypes.string.isRequired,
  heroTitle: PropTypes.string.isRequired,
  heroImage: PropTypes.string.isRequired,
  heroMessage: PropTypes.string.isRequired,
};
