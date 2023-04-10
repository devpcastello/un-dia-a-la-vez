import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, SelfCarePage } from "../Pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="selfcare" element={<SelfCarePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
