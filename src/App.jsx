import React, { useEffect } from 'react';
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

function App() {
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
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Recoleccion />
      <EntregaSameDay />
      <Tracking />
      <Notificaciones />
      <Etiquetas />
      <Dashboard />
      <StatsBand />
      <Contingencia />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
