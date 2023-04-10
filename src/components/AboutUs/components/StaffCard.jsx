import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

import person1 from "../../../assets/people/person2.jpg";

export const StaffCard = () => {
  return (
    <div className="bg-light-green relative w-11/12 h-[500px] rounded-2xl flex flex-col justify-center items-center gap-2">
      <ChevronLeftIcon className="absolute w-12 h-12 left-0" />
      <div className=" w-[280px] h-[360px] ">
        <img className="cover rounded-xl" src={person1} alt="" />
      </div>
      <h2 className="text-xl font-medium">Marianella Vorza</h2>
      <p className="text-sm font-light">Ver más </p>
      <ChevronRightIcon className="absolute w-12 h-12 right-0" />
    </div>
  );
};
