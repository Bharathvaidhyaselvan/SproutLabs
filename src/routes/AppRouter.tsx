import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Programs from '../pages/Programs';
import ProgramDetail from '../pages/ProgramDetail';
import SchoolPartnerships from '../pages/SchoolPartnerships';
import StudentClubs from '../pages/StudentClubs';
import LabSetup from '../pages/LabSetup';
import Events from '../pages/Events';
import Gallery from '../pages/Gallery';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="our-programs" element={<Programs />} />
        <Route path="our-programs/:id" element={<ProgramDetail />} />
        <Route path="school-partnerships" element={<SchoolPartnerships />} />
        <Route path="student-clubs" element={<StudentClubs />} />
        <Route path="lab-setup-support" element={<LabSetup />} />
        <Route path="events" element={<Events />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact-us" element={<Contact />} />
      </Route>
    </Routes>
  );
}
