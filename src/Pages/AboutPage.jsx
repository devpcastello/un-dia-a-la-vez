import { Outlet } from "react-router-dom";
import { Fqa, Staff, Testimonials } from "../components/AboutUs";

export const AboutPage = () => {
  return (
    <div className="pt-14">
      <Staff />
      <Testimonials />
      <Fqa />
      <Outlet />
    </div>
  );
};
