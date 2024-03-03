// import { StaffCard } from './components/StaffCard';
import { StaffPanel } from './components/StaffPanel';

import { members } from '../../data/aboutUsMembers';
import { useParams } from 'react-router-dom';
import { HeroSection } from './components/HeroSection';

export const Staff = () => {
  const { staff } = useParams();

  return (
    <>
      {members.map(
        ({
          id,
          heroBackground,
          heroTitle,
          heroMessage,
          heroImage,
          psychologistTitle,
          psychologistDescription,
          psychologistCards,
          enterpriseTitle,
          enterpriseDescription,
          enterpriseCards,
        }) => {
          if (staff !== !staff) {
            console.log(psychologistCards);
            return (
              <main key={id}>
                <HeroSection
                  heroBackground={heroBackground}
                  heroTitle={heroTitle}
                  heroMessage={heroMessage}
                  heroImage={heroImage}
                />
                <section className='px-5 py-20'>
                  <div className='m-8 text-center'>
                    <h2 className='m-8 text-4xl font-medium text-gray-10'>
                      {psychologistTitle}
                    </h2>
                    <p className='text-gray-8 xl:mx-16 xl:text-xl'>
                      {psychologistDescription}
                    </p>
                  </div>
                  <div className='flex w-full items-center justify-center'>
                    <StaffPanel cards={psychologistCards} />
                  </div>
                </section>
                <section className='px-5 py-20'>
                  <div className='m-8 text-center'>
                    <h2 className='m-8 text-4xl font-medium text-gray-10'>
                      {enterpriseTitle}
                    </h2>
                    <p className='text-gray-8 xl:mx-16 xl:text-xl'>
                      {enterpriseDescription}
                    </p>
                  </div>
                  <div className='flex w-full items-center justify-center'>
                    <StaffPanel cards={enterpriseCards} />
                  </div>
                </section>
              </main>
            );
          }
          console.log('error');
          return null;
        },
      )}
    </>
  );
};
