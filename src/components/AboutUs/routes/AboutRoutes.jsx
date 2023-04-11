import { Route, Routes } from "react-router-dom";
import { Staff, Testimonials, Fqa } from "../index";
import { Navbar } from "../../Home/Navbar/Navbar";

export const AboutRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="staff" element={<Staff />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="fqa" element={<Fqa />} />
      </Routes>
    </>
  );
};
