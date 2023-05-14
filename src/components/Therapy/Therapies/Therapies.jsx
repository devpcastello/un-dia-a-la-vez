import { therapies } from "../../../data/therapies";

export const Therapies = () => {
  return (
    <div>
      {therapies.map((therapy) => (
        <div key={therapy.title} className="m-4 xl:mx-16 xl:mb-20">
          <h1 className="text-3xl text-center text-gray-10 font-bold m-10 xl:text-4xl">
            {therapy.title}
          </h1>
          <p className="text-gray-8 font-light mt-5 xl:text-xl">
            {therapy.description}
          </p>
        </div>
      ))}
    </div>
  );
};
