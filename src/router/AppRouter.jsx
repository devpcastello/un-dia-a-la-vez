import { Navigate, Outlet, Route, Router, Routes } from "react-router-dom";
import { HomePage, AboutPage, SelfCarePage } from "../Pages";
import { Staff } from "../components/AboutUs/Staff/Staff";
import { Footer, Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="selfcare" element={<SelfCarePage />} />

        <Route path="about" element={<AboutPage />}>
          <Route path="staff" element={<Staff />} />
        </Route>

        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>

      <Footer />
      <Outlet />
    </>
  );
};
