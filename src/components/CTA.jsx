import React from 'react';

export default function CTA() {
  return (
    <section className="cta-sec">
      <div className="cta-glow"></div>
      <div className="cta-grid-bg"></div>
      <div className="cta-inner reveal">
        <div className="cta-pill">🚀 Empieza a entregar hoy mismo</div>
        <h2 className="cta-h2 ls-tight">Retiro en la mañana.<br /><span className="cg">Entrega ese mismo día.</span></h2>
        <p className="cta-sub">Tu tienda, con la velocidad de entrega que tus clientes esperan. Sin contratos ni volumen
          mínimo en el plan Starter.</p>
        <div className="cta-btns">
          <a href="#precios" className="btn-primary" style={{ padding: '14px 32px' }}>Crear cuenta gratis</a>
          <a href="mailto:hola@globalstar.cl" className="btn-outline-dark" style={{ padding: '14px 32px' }}>Hablar con ventas →</a>
        </div>
      </div>
    </section>
  );
}
