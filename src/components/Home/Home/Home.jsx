import dulcinea from "../../../assets/dulcinea-1.png";

export const HomeComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center" id="home">
      <img className="w-40 h-40 z-10" src={dulcinea} alt="" />
      <div className=" mt-5 text-white flex flex-col justify-center items-center z-10">
        <h2 className=" text-2xl text-center">
          Una terapia única y enfocada en el ser humano
        </h2>
        <p className="mt-3">Nuestros servicios se diferencian por</p>
        <button
          className="bg-dark-green bottom-10 absolute py-2 px-4 rounded-full"
          id="button"
        >
          Quiero saber más!
        </button>
      </div>
    </div>
  );
};
