import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, SelfCarePage } from "../Pages";
import { Staff } from "../components/AboutUs/Staff/Staff";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="selfcare" element={<SelfCarePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="staff" element={<Staff />} />

        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
