import { Outlet } from "react-router-dom";
import { InPerson, Online, Social } from "../components/Therapy";

export const TherapyPage = () => {
  return (
    <div className="pt-14">
      <Online />
      <InPerson />
      <Social />
      <Outlet />
    </div>
  );
};
