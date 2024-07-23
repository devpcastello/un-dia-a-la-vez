import { useParams } from 'react-router-dom';
import { services } from '../data/servicesServices';
import { HeroSection } from '../components/Services/components/HeroSection';
import { DescriptionSection } from '../components/Services/components/DescriptionSection';

import { Button } from '@/components/ui/button';

export const ServicesPage = () => {
  const { service } = useParams();

  return (
    <>
      {services.map(
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
        }) => {
          if (service === id) {
            return (
              <main key={id}>
                <HeroSection
                  heroBackground={heroBackground}
                  heroTitle={heroTitle}
                  heroSubtitle={heroSubtitle}
                  heroMessage={heroMessage}
                  heroButton={heroButton}
                />
                <DescriptionSection
                  descriptionImage={descriptionImage}
                  descriptionTitle={descriptionTitle}
                  description={description}
                />
                <section className='bg-whispering-white px-5 py-20'>
                  <h2 className='mb-20 text-center text-xl font-semibold leading-5 md:mb-10'>
                    {troublesTitle}
                  </h2>
                  <div className='m-auto grid grid-cols-1 gap-16 md:w-full md:grid-cols-2  lg:w-2/3 xl:w-1/2'>
                    {troublesCards.map(
                      ({ title, description, image }, index) => (
                        <div
                          key={`${title}-${index}`}
                          className='m-auto flex flex-col items-center justify-center gap-3  text-center sm:w-full'
                        >
                          <img
                            src={image}
                            alt='trouble-card'
                            className='size-40'
                          />
                          <h3 className=' font-bold'>{title}</h3>
                          <p>{description}</p>
                        </div>
                      ),
                    )}
                  </div>
                </section>
                <section className='flex flex-col gap-10 rounded-t-[200px] bg-secondary px-5 py-20 text-white'>
                  <h2 className='mb-20 text-center text-xl font-semibold leading-5 md:mb-10'>
                    {benefitsTitle}
                  </h2>
                  <div className='m-auto grid grid-cols-1 gap-16 lg:w-2/3'>
                    {benefitsCards.map(({ description, image }, index) => (
                      <div
                        key={`${image}-${index}`}
                        className='flex items-center gap-5 text-center'
                      >
                        <img src={image} alt='benefit-card' className='w-24' />
                        <p className='text-left'>{description}</p>
                      </div>
                    ))}
                    <Button className='m-auto w-72 rounded-full'>
                      {buttonTherapy}
                    </Button>
                  </div>
                </section>
              </main>
            );
          }
          return null;
        },
      )}
    </>
  );
};
