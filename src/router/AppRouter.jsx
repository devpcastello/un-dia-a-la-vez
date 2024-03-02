import { Outlet, Route, Routes } from 'react-router-dom';
import { HomePage, AboutPage, SelfCarePage, TherapyPage } from '../Pages';

import { Footer, Navbar } from '../ui';
import { Blog, Resources } from '../components/SelfCare';
import { Fqa, Testimonials, Staff } from '../components/AboutUs';
import { BlogEntry } from '../components/SelfCare/components/BlogEntry';
import { StaffDetail } from '../components/AboutUs/components/StaffDetail';

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/therapy/:service' element={<TherapyPage />} />

        <Route path='/about' element={<AboutPage />} />
        <Route path='/about/testimonials' element={<Testimonials />} />
        <Route path='/about/fqa' element={<Fqa />} />
        <Route path='/about/staff' element={<Staff />} />
        <Route path='/about/staff/:index' element={<StaffDetail />} />

        <Route path='/self-care' element={<SelfCarePage />} />
        <Route path='/self-care/blog' element={<Blog />} />
        <Route path='/self-care/blog/:index' element={<BlogEntry />} />

        <Route path='/self-care/resources' element={<Resources />} />
      </Routes>

      <Footer />
      <Outlet />
    </>
  );
};
