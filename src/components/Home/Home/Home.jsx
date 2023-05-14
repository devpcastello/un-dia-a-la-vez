import dulcinea from "../../../assets/dulcinea-1.png";
import blob from "../../../assets/blob.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div
      className=" h-screen w-full grid justify-center items-center md:grid-cols-2  gap-8"
      id="home"
      style={{ justifyItems: "center", alignItems: "center" }}
    >
      <div className="w-auto h-1/2 mt-[200px] flex justify-center items-center z-10 relative md:mt-[100px]">
        <img
          className="w-[400px] max-w-md w-min-96 h-min-96 absolute z-[-10] md:min-w-[500px] md:min-h-[500px] xl:min-w-[900px] xl:min-h-[900px] animate__animated animate__fadeInUp"
          src={blob}
          alt=""
        />
        <img
          className="w-40 h-40 md:min-w-[230px] md:min-h-[230px] xl:min-w-[400px] xl:min-h-[400px] animate__animated animate__fadeInUp"
          src={dulcinea}
          alt=""
        />
      </div>
      <div className=" mt-5 text-white flex flex-col justify-center items-center z-10 gap-4 md:gap-12">
        <h2 className="text-2xl font-bold text-center md:text-4xl xl:text-6xl">
          Una terapia única y enfocada en el ser humano
        </h2>
        <p className="md:text-xl xl:text-4xl">
          Nuestros servicios se diferencian por
        </p>
      </div>
      <button className="bg-dark-green bottom-10 absolute py-2 px-4 rounded-full text-white xl:text-2xl xl:py-4 xl:px-6">
        <Link to="/about">Quiero saber más!</Link>
      </button>
    </div>
  );
};
