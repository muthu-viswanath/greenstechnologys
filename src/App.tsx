import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import GAssistChatbot from './components/GAssistChatbot';
import GSAPPreloader from './components/GSAPPreloader';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Certifications from './pages/Certifications';
import CertificationDetail from './pages/CertificationDetail';
import PagePlaceholder from './pages/PagePlaceholder';
import HostelFacilities from './pages/HostelFacilities';
import ContactUs from './pages/ContactUs';
import Franchise from './pages/Franchise';
import Careers from './pages/Careers';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Placements from './pages/Placements';
import './App.css';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top on route change
  useEffect(() => {
    if (!isLoading) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, isLoading]);

  return (
    <>
      {/* 1. GSAP Logo Preloader: Cinematic Laser-Sweep & Shutter Split */}
      {isLoading && <GSAPPreloader onComplete={() => setIsLoading(false)} />}

      {/* 2. Entire Website: Smoothly Revealed as the Shutters Part */}
      <div className="app-shell flex flex-col min-h-screen relative">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/certifications/:slug" element={<CertificationDetail />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:slug" element={<CourseDetail />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/hostel-facilities" element={<HostelFacilities />} />
              <Route path="/placements" element={<Placements />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/franchise" element={<Franchise />} />
              <Route path="*" element={<PagePlaceholder title="Page Not Found" subtitle="The requested page could not be found." />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <WhatsAppButton />
        <GAssistChatbot />
      </div>
    </>
  );
}

export default App;
