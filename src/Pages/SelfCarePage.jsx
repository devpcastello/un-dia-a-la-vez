import { Outlet } from "react-router-dom";
import { Blog, Resources } from "../components/SelfCare";

export const SelfCarePage = () => {
  return (
    <div>
      <h1>SelfCarePage</h1>;
      <Blog />
      <Resources />
      <Outlet />
    </div>
  );
};
