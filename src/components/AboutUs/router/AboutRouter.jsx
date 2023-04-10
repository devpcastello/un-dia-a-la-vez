import { Route, Routes } from "react-router-dom";
import { Staff } from "../Staff";
import { Testimonials } from "../Testimonials/Testimonials";
import { Fqa } from "../FQA/Fqa";

export const AboutRouter = () => {
  return (
    <>
      <Routes>
        <Route path="staff" element={<Staff />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="fqa" element={<Fqa />} />
      </Routes>
    </>
  );
};
