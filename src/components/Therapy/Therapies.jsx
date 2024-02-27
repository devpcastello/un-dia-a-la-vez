import { therapies } from '../../data/services';

export const Therapies = () => {
  return (
    <div>
      {therapies.map((therapy) => (
        <div key={therapy.title} className='m-4 xl:mx-16 xl:mb-20'>
          <h1 className='m-10 text-center text-3xl font-bold text-gray-10 xl:text-4xl'>
            {therapy.title}
          </h1>
          <p className='mt-5 font-light text-gray-8 xl:text-xl'>
            {therapy.description}
          </p>
        </div>
      ))}
    </div>
  );
};
