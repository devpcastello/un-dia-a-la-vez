import { Outlet } from "react-router-dom";
import { InPerson, Online, Social } from "../components/Therapy";

export const TherapyPage = () => {
  return (
    <div className="pt-14">
      <h1>TherapyPage</h1>
      <Online />
      <InPerson />
      <Social />
      <Outlet />
    </div>
  );
};
