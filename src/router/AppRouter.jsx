import { Navigate, Outlet, Route, Router, Routes } from "react-router-dom";
import { HomePage, AboutPage, SelfCarePage, TherapyPage } from "../Pages";

import { Footer, Navbar } from "../ui";
import { Blog, Resources } from "../components/SelfCare";
import { Fqa, Testimonials, Staff } from "../components/AboutUs";
import { InPerson, Online, Social } from "../components/Therapy";
import { BlogEntry } from "../components/SelfCare/components/BlogEntry";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/therapy" element={<TherapyPage />} />
        <Route path="/therapy/online" element={<Online />} />
        <Route path="/therapy/in-person" element={<InPerson />} />
        <Route path="/therapy/social" element={<Social />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/staff/:person" element={<Staff />} />
        <Route path="/about/testimonials" element={<Testimonials />} />
        <Route path="/about/fqa" element={<Fqa />} />

        <Route path="/self-care" element={<SelfCarePage />} />
        <Route path="/self-care/blog" element={<Blog />} />
        <Route path="/self-care/blog/:index" element={<BlogEntry />} />

        <Route path="/self-care/resources" element={<Resources />} />

        {/* <Route path="/*" element={<Navigate to={"/"} />} /> */}
      </Routes>

      <Footer />
      <Outlet />
    </>
  );
};
