import { useParams } from "react-router-dom";
import { staff } from "../../../data/staff.js";

const person1 = "../../../assets/people/person2.jpg";

export const StaffDetail = () => {
  const { index } = useParams();
  const person = staff.find((p) => p.id === parseInt(index));

  console.log(person);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center gap-8 p-8 pt-14">
      {person ? (
        <>
          <h2 className="text-4xl font-bold text-gray-10">{person.name}</h2>
          <div className=" w-[280px] h-[360px] flex items-center justify-center">
            <img className="h-[380px] cover" src={person.image} alt="" />
          </div>
          <p className="text-gray-8 font-light">{person.description}</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </>
      ) : undefined}
    </div>
  );
};
