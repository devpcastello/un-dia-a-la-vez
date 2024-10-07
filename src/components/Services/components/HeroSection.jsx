import PropTypes from 'prop-types';

import { Button } from '@/components/ui/button';

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
    <section className='relative flex h-screen w-full flex-col items-center justify-center gap-20 bg-center text-white md:gap-8'>
      <div
        className='absolute inset-0 -z-30'
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div
        className='absolute inset-0 -z-20 bg-gradient-to-b from-transparent to-tertiary to-70% opacity-100'
        style={{ filter: 'blur(0px)' }}
      ></div>
      <div>
        <div className='mx-auto flex flex-col items-center justify-center gap-32 text-center sm:gap-40 md:w-4/5'>
          <div className='mx-auto flex flex-col gap-4'>
            <h1 className='font-semibold text-white md:text-xl'>{heroTitle}</h1>
            <p className='text-2xl font-bold text-white md:text-4xl'>
              {heroSubtitle}
            </p>
          </div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <p className='text-white sm:text-lg '>{heroMessage}</p>
            <Button
              variant={'secondary'}
              onClick={() => {
                handleOpenWtpp(heroTitle);
              }}
            >
              {heroButton}
            </Button>
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
