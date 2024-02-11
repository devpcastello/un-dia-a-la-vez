import dulcinea from "../../assets/dulcinea-1.png";
import blob from "../../assets/blob.svg";
import { Link } from "react-router-dom";
import bgImage from "../../assets/home-background-image.jpg";

export const Hero = () => {
  return (
    <div
      className="h-screen w-full grid grid-rows-2 justify-center items-center md:grid-cols-2 gap-8 bg-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-gray-8 bg-opacity-20 h-full w-full absolute inset-0" />
      <div className="xl:mt-[500px] relative">
        <div className="w-auto h-1/2 mt-[200px] flex justify-center items-center z-10 relative md:mt-[100px]">
          <img
            className="w-[400px] max-w-80 w-min-96 h-min-96 absolute z-[-10] md:min-w-[500px] md:min-h-[500px] xl:min-w-[900px] xl:min-h-[900px] animate__animated animate__fadeInUp"
            src={blob}
            alt=""
          />
          <img
            className="w-40 h-40 md:min-w-[230px] md:min-h-[230px] xl:min-w-[400px] xl:min-h-[400px] animate__animated animate__fadeInUp"
            src={dulcinea}
            alt=""
          />
        </div>
      </div>
      <div className="mt-5 text-white flex flex-col justify-center items-center z-20 gap-4 md:gap-12 xl:mt-[500px] relative">
        <h2 className="text-2xl font-bold text-center md:text-4xl xl:text-6xl">
          Una terapia única y enfocada en el ser humano
        </h2>
        {/* <p className="md:text-xl xl:text-4xl">Nuestros servicios</p> */}
      </div>
      <button className="bg-dark-green bottom-10 absolute py-2 px-4 rounded-full text-white xl:text-2xl xl:py-4 xl:px-6 z-20">
        <Link to="/about">¿Empezamos tu proceso?</Link>
      </button>
    </div>
  );
};
