import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

import person1 from "../../../assets/people/person2.jpg";

export const StaffCard = () => {
  return (
    <div className="bg-light-green relative w-10/12 h-[480px] rounded-2xl flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center mt-10">
        <ChevronLeftIcon className="absolute w-10 h-10 left-0" />
        <div className=" w-[280px] h-[360px] flex items-center justify-center">
          <img className="cover rounded-xl h-[380px]" src={person1} alt="" />
        </div>
        <ChevronRightIcon className="absolute w-10 h-10 right-0" />
      </div>
      <h2 className="text-xl font-medium mt-5">Marianella Vorza</h2>
      <p className="text-sm font-light">Ver más </p>
    </div>
  );
};
