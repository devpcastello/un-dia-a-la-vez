import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, SelfCarePage } from "../Pages";
import { Staff } from "../components/AboutUs/Staff/Staff";
import { StaffDetail } from "../components/AboutUs/components/StaffDetail";
import { Navbar } from "../components/Home";
import { Testimonials } from "../components/AboutUs/Testimonials/Testimonials";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="selfcare" element={<SelfCarePage />} />
        {/*
        <Route path="about" element={<AboutPage />} />
        <Route path="staff" element={<Staff />} />
        <Route path="staff-1" element={<StaffDetail />} /> */}

        <Route path="about" element={<AboutPage />}>
          <Route path="staff" element={<Staff />}>
            <Route path="staff-1" element={<StaffDetail />} />
          </Route>
          <Route path="testimonials" element={<Testimonials />} />
        </Route>

        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
      <Outlet />
    </>
  );
};
