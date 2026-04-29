import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
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
        <div className="hero-screen">
          <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=85&auto=format&fit=crop"
            alt="Dashboard GlobalStar" />
          <div className="screen-ov"></div>
          <div className="hchip hchip-tl">
            <div className="hc-lbl">Entregas hoy</div>
            <div className="hc-val">247 <span className="pos">↑ 12%</span></div>
          </div>
          <div className="hchip hchip-br">
            <div className="hc-row">
              <div className="hc-dot"></div>
              <div className="hc-sm">En ruta ahora</div>
            </div>
            <div className="hc-sub">38 paquetes · 6 conductores</div>
          </div>
        </div>
      </div>
    </section>
  );
}
