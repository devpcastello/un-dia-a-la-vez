// import { StaffCard } from './components/StaffCard';
import { StaffPanel } from './components/StaffPanel';

export const Staff = () => {
  return (
    <main>
      <section
        className='relative z-[-15] flex h-screen w-full flex-col items-center justify-center gap-20 bg-center text-white md:gap-8'
        style={{
          backgroundImage: `/`,
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
        <div className='grid grid-cols-1 gap-10 text-center md:grid-cols-2'>
          <div>
            <h2 className='m-auto text-4xl font-medium text-gray-10'>
              El equipo de <span className='font-bold'>Un Día a la Vez</span>
            </h2>
            <img src='' alt='' />
          </div>
          <p className='text-gray-8 xl:mx-16 xl:text-xl'>
            Nuestro equipo de Psicólogos matriculados con años de experiencia en
            el campo de la psicoterapia conductual están al servicio de nuestros
            pacientes cuando estos lo requieran
          </p>
        </div>
      </section>
      <section className='px-5 py-20'>
        <div className='m-8 text-center'>
          <h2 className='m-8 text-4xl font-medium text-gray-10'>
            El staff de psicólogos
          </h2>
          <p className='text-gray-8 xl:mx-16 xl:text-xl'>
            Nuestro equipo de Psicólogos matriculados con años de experiencia en
            el campo de la psicoterapia conductual están al servicio de nuestros
            pacientes cuando estos lo requieran
          </p>
        </div>
        <div className='flex w-full items-center justify-center'>
          <StaffPanel />
        </div>
      </section>
    </main>
  );
};
