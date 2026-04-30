import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="ft">
        <div className="left-section">
          <div className="fl-logo">
            <div className="logo-gem">GS</div>
            <span>GlobalStar</span>
          </div>
          <p className="fl-tag">Servicio de última milla para tiendas online en el Gran Santiago. Retiro AM, entrega PM, siempre.</p>
        </div>
        <div className="right-section">
          <div className="fc2">
            <h5>Soluciones</h5>
            <a href="#recoleccion">Cómo funciona</a>
            <a href="#notificaciones">Notificaciones</a>
            <a href="#tracking">Seguimiento</a>
            <a href="#pricing">Precios</a>
          </div>
          <div className="fc2">
            <h5>Compañía</h5>
            <a href="#hero">Sobre nosotros</a>
            <a href="#stats">Impacto</a>
            <a href="#testimonials">Testimonios</a>
            <a href="#faq">Preguntas</a>
          </div>
          <div className="fc2">
            <h5>Contacto</h5>
            <a href="mailto:hola@globalstar.cl">hola@globalstar.cl</a>
            <a href="tel:+56912345678">+56 9 1234 5678</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="fb">
        <p>© 2026 GlobalStar Logística SpA. Todos los derechos reservados.</p>
        <div className="fb-links">
          <a href="#">Privacidad</a>
          <span className="dot">·</span>
          <a href="#">Términos</a>
          <span className="dot">·</span>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
