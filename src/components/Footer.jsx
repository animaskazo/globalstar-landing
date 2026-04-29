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
          <h5>Servicios</h5>
          <a href="#">Recolección matutina</a>
          <a href="#">Same Day Delivery</a>
          <a href="#">Tracking en vivo</a>
          <a href="#">Notificaciones WhatsApp</a>
          <a href="#">Devoluciones</a>
        </div>
        <div className="fc2">
          <h5>Plataformas</h5>
          <a href="#">Amazon Flex</a>
          <a href="#">Falabella</a>
          <a href="#">Ripley</a>
          <a href="#">Shopify</a>
          <a href="#">WooCommerce</a>
        </div>
        <div className="fc2">
          <h5>Recursos</h5>
          <a href="#">Cómo funciona</a>
          <a href="#">Cobertura de comunas</a>
          <a href="#">Centro de ayuda</a>
          <a href="#">API Docs</a>
        </div>
        <div className="fc2">
          <h5>Empresa</h5>
          <a href="#">Sobre GlobalStar</a>
          <a href="#">Conductores</a>
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
