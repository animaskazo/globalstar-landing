import React from 'react';
import videoBg from '../assets/video-logistic.mp4';

export default function Hero() {
  return (
    <section className="hero">
      <video 
        className="hero-video" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-glow"></div>
      <div className="hero-grid-bg"></div>
      <div className="hero-fade"></div>
      <div className="hero-inner">
        <h1 className="hero-h1 ls-tight">
          Retiramos en todo Santiago.<br />
          <span className="grad">Entregamos el mismo día.</span>
        </h1>
        <p className="hero-sub">Tu cliente hace el pedido y lo recibe antes de que termine el día. Sin demoras, sin excusas.
          100% dentro del Gran Santiago.</p>
        <div className="hero-actions">
          <a href="#recoleccion" className="btn-primary">Cómo funciona →</a>
        </div>
        <div className="trust-row">
          <span className="trust-item"><span className="trust-dot"></span>Retiro gratis</span>
          <span className="trust-sep"></span>
          <span className="trust-item"><span className="trust-dot"></span>Entrega antes de las 22 PM</span>
          <span className="trust-sep"></span>
          <span className="trust-item"><span className="trust-dot"></span>98% tasa de éxito</span>
          <span className="trust-sep"></span>
          <span className="trust-item"><span className="trust-dot"></span>30+ comunas activas</span>
        </div>
      </div>
    </section>
  );
}
