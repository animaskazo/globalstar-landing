import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SamedayBand from './components/SamedayBand';
import LogoCloud from './components/LogoCloud';
import StatsBand from './components/StatsBand';
import Recoleccion from './components/Recoleccion';
import EntregaSameDay from './components/EntregaSameDay';
import Tracking from './components/Tracking';
import Notificaciones from './components/Notificaciones';
import Etiquetas from './components/Etiquetas';
import Dashboard from './components/Dashboard';
import Contingencia from './components/Contingencia';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

function ScrollToTopAndHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Recoleccion />
      <EntregaSameDay />
      <Tracking />
      <Notificaciones />
      <StatsBand />
      <Contingencia />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

function AppContent() {
  const { pathname } = useLocation();

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    // Wait for components to mount
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => io.observe(el));

    return () => {
      elements.forEach(el => io.unobserve(el));
    };
  }, [pathname]);

  return (
    <>
      <ScrollToTopAndHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politicas-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos-de-uso" element={<TermsOfUse />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
