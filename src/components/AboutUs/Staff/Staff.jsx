import { StaffCard } from "../components/StaffCard";

export const Staff = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="m-8 text-center">
        <h1 className="text-gray-10 text-2xl mb-4">Nuestro Equipo</h1>
        <p className="text-gray-8">
          Nuestro equipo de Psicólogos matriculados con años de experiencia en
          el campo de la psicoterapia conductual están al servicio de nuestros
          pacientes cuando estos lo requieran
        </p>
      </div>
      <StaffCard />
    </div>
  );
};
