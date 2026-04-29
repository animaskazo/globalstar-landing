import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="ft">
        <div>
          <div className="fl-logo">
            <div className="logo-gem">GS</div><span>GlobalStar</span>
          </div>
          <p className="fl-tag">Same day delivery para tiendas online en el Gran Santiago. Retiro AM, entrega PM, siempre.</p>
        </div>
        <div className="fc2">
          <h5>Menú Principal</h5>
          <a href="#recoleccion">Recolección</a>
          <a href="#entregas">Entregas seguras</a>
          <a href="#tracking">Tracking</a>
          <a href="#notificaciones">Notificaciones</a>
          <a href="#faq">Preguntas frecuentes</a>
        </div>
        <div className="fc2">
          <h5>Contacto</h5>
          <a href="mailto:hola@globalstar.cl">hola@globalstar.cl</a>
          <a href="#">Santiago, Chile</a>
        </div>
      </div>
      <div className="fb">
        <p>© 2024 GlobalStar Logística SpA. Todos los derechos reservados.</p>
        <p>Privacidad · Términos · Cookies</p>
      </div>
    </footer>
  );
}
