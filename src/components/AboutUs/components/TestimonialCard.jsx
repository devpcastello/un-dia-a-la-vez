import adolescente1 from "../../../assets/adolescents/adolescente1.jpg";

export const TestimonialCard = () => {
  return (
    <div className="bg-dark-green h-[750px] w-11/12 rounded-xl flex flex-col items-center justify-evenly">
      <div className="rounded-full overflow-hidden w-64 h-64">
        <img className="object-cover" src={adolescente1} alt="" />
      </div>
      <div className="px-6 flex flex-col items-center justify-evenly">
        <h2 className="text-white font-bold text-3xl pb-4">Maritza Grados</h2>
        <p className="text-gray-2 text-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          nesciunt ea similique molestias vel minima quibusdam, ab et unde porro
          ipsum labore, corrupti aspernatur velit, cumque voluptatem reiciendis.
          Dolore, obcaecati! m labore, corrupti aspernatur velit, cumque
          voluptatem reiciendis. Dolore, obcaecati!
        </p>
      </div>
    </div>
  );
};
