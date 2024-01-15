import React from "react";
import { Link } from "react-router-dom";

import { staff } from "../../../data/staff";

export const StaffPanel = () => {
  console.log(staff);
  return (
    <>
      <div className="w-full h-full flex flex-row  gap-8" key={name}>
        {staff.map(({ id, name, image }) => (
          <div className="bg-color9 relative w-[350px] h-[480px] rounded-2xl flex flex-col justify-center items-center ">
            <div className="flex flex-col justify-center items-center mt-10">
              <div className="w-[280px] h-[360px] flex items-center justify-center">
                <img
                  className="cover rounded-xl h-[380px]"
                  src={image}
                  alt=""
                />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-medium mt-5">{name}</h2>
              <Link to={`/about/staff/${id}`}>
                <p className="text-sm text-center font-light">Ver más</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
