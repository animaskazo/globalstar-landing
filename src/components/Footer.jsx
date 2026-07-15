import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="ft">
        <div className="left-section">
          <div className="fl-logo">
            <span>GlobalStar Courier</span>
          </div>
          <p className="fl-tag">Servicio de última milla para tiendas online en el Gran Santiago. Retiro AM, entrega PM, siempre.</p>
        </div>
        <div className="right-section">
          <div className="fc2">
            <h5>Soluciones</h5>
            <Link to="/#recoleccion">Cómo funciona</Link>
            <Link to="/#notificaciones">Notificaciones</Link>
            <Link to="/#tracking">Seguimiento</Link>
            <Link to="/#pricing">Precios</Link>
          </div>
          <div className="fc2">
            <h5>Compañía</h5>
            <Link to="/#hero">Sobre nosotros</Link>
            <Link to="/#stats">Impacto</Link>
            <Link to="/#testimonials">Testimonios</Link>
            <Link to="/#faq">Preguntas</Link>
          </div>
          <div className="fc2">
            <h5>Contacto</h5>
            <a href="mailto:hola@globalstar.cl"> globalstarcourier2025@gmail.com</a>
            <a href="tel:+56912345678">+56 9 6777 2374</a>
          </div>
        </div>
      </div>
      <div className="fb">
        <p>© 2026 GlobalStar Logística SpA. Todos los derechos reservados.</p>
        <div className="fb-links">
          <Link to="/politicas-de-privacidad">Privacidad</Link>
          <span className="dot">·</span>
          <Link to="/terminos-de-uso">Términos</Link>
          <span className="dot">·</span>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
