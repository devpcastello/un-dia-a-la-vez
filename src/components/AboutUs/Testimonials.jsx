import { useParams } from 'react-router-dom';
import { TestimonialCard } from './components/TestimonialCard';
import { testimonialsData } from '../../data/aboutUsTestimonials';
import { HeroSection } from './components/HeroSection';

export const Testimonials = () => {
  const { testimonials } = useParams();
  return (
    <>
      {testimonialsData.map(
        ({
          id,
          heroBackground,
          heroTitle,
          heroMessage,
          heroImage,
          testimonialsTitle,
          testimonialsDescription,
          testimonialsCards,
        }) => {
          if (testimonials !== !testimonials) {
            return (
              <main
                key={id}
                className='flex h-auto w-full flex-col items-center justify-center'
              >
                <HeroSection
                  heroBackground={heroBackground}
                  heroTitle={heroTitle}
                  heroMessage={heroMessage}
                  heroImage={heroImage}
                />
                <div className='m-8'>
                  <h2 className='my-8 text-center text-4xl font-medium text-gray-10'>
                    {testimonialsTitle}
                  </h2>
                  <p className='text-gray-8 xl:mx-16 xl:text-xl'>
                    {testimonialsDescription}
                  </p>
                </div>
                <TestimonialCard cards={testimonialsCards} />
              </main>
            );
          }
          return null;
        },
      )}
    </>
  );
};
