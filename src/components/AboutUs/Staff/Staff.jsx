import { StaffCard } from "../components/StaffCard";
import { StaffPanel } from "../components/StaffPanel";

export const Staff = () => {
  return (
    <section className="flex flex-col items-center h-screen">
      <div className="m-8 text-center">
        <h2 className="text-gray-10 text-4xl m-8 font-medium">
          Nuestro Equipo
        </h2>
        <p className="text-gray-8 xl:text-xl xl:mx-16">
          Nuestro equipo de Psicólogos matriculados con años de experiencia en
          el campo de la psicoterapia conductual están al servicio de nuestros
          pacientes cuando estos lo requieran
        </p>
      </div>

      <div className="block xl:hidden">
        <StaffCard />
      </div>
      <div className="hidden xl:block">
        <StaffPanel />
      </div>
    </section>
  );
};
