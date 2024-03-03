import { StaffCard } from './components/StaffCard';
import { StaffPanel } from './components/StaffPanel';

export const Staff = () => {
  return (
    <section className='flex h-screen flex-col items-center'>
      <div className='m-8 text-center'>
        <h2 className='m-8 text-4xl font-medium text-gray-10'>
          Nuestro Equipo
        </h2>
        <p className='text-gray-8 xl:mx-16 xl:text-xl'>
          Nuestro equipo de Psicólogos matriculados con años de experiencia en
          el campo de la psicoterapia conductual están al servicio de nuestros
          pacientes cuando estos lo requieran
        </p>
      </div>

      <div className='block xl:hidden'>
        <StaffCard />
      </div>
      <div className='hidden xl:block'>
        <StaffPanel />
      </div>
    </section>
  );
};
