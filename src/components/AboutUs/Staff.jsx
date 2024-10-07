// import { StaffCard } from './components/StaffCard';
import { StaffPanel } from './components/StaffPanel';

import { members } from '../../data/aboutUsMembers';
import { useParams } from 'react-router-dom';
import { HeroSection } from './components/HeroSection';
import { EnterpriseCards } from './components/EnterpriseCard';

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
                <section className='flex flex-col gap-16 bg-whispering-white p-4 sm:px-6 sm:py-20'>
                  <div className='text-center'>
                    <h2 className='text-2xl font-medium'>
                      {psychologistTitle}
                    </h2>
                    {/* <p className='xl:mx-16 xl:text-xl'>
                      {psychologistDescription}
                    </p> */}
                  </div>
                  <div className='flex w-full items-center justify-center '>
                    <StaffPanel cards={psychologistCards} />
                  </div>
                </section>
                <section className='flex flex-col gap-16 bg-whispering-white px-4 py-20 sm:px-6'>
                  <div className='text-center'>
                    <h2 className='text-2xl font-medium'>{enterpriseTitle}</h2>
                    {/* <p className='xl:mx-16 xl:text-xl'>
                      {enterpriseDescription}
                    </p> */}
                  </div>
                  <div className='flex w-full items-center justify-center'>
                    <EnterpriseCards cards={enterpriseCards} />
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
