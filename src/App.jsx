import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import EstimateModal from './components/EstimateModal.jsx';
import { CtaBand } from './components/Blocks.jsx';
import { BackToTop } from './components/Motion.jsx';
import Home from './pages/Home.jsx';
import { ServicesIndex, ServiceDetail } from './pages/Services.jsx';
import { AreasIndex, AreaDetail } from './pages/Areas.jsx';
import { About, Contact, Privacy, Terms, NotFound } from './pages/Pages.jsx';
import { services, areas } from './data/site.js';

/** Every URL the prerenderer and sitemap need to know about. */
export const allRoutes = [
  '/',
  '/about',
  '/services',
  ...services.map((s) => `/services/${s.slug}`),
  '/service-areas',
  ...areas.map((a) => `/service-areas/${a.slug}`),
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/404',
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <BackToTop />
      <Header />
      <ScrollToTop />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/service-areas/:slug" element={<AreaDetail />} />
          <Route path="/service-areas" element={<AreasIndex />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <CtaBand />
      <Footer />
      <EstimateModal />
    </>
  );
}
