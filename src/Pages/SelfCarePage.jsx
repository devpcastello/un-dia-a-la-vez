import { Outlet } from "react-router-dom";
import { Blog, Resources } from "../components/SelfCare";

export const SelfCarePage = () => {
  return (
    <div>
      <Blog />
      <Resources />
    </div>
  );
};
