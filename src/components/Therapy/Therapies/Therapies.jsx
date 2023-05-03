import { therapies } from "../../../data/therapies";

export const Therapies = () => {
  return (
    <div>
      {therapies.map((therapy) => (
        <div key={therapy.title} className="m-4">
          <h1 className="text-3xl text-center text-gray-10 font-bold m-10">
            {therapy.title}
          </h1>
          <p className="text-gray-8 font-light mt-5">{therapy.description}</p>
        </div>
      ))}
    </div>
  );
};
