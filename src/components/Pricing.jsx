import React from 'react';

export default function Pricing() {
  return (
    <section className="sec-w" id="precios">
      <div className="sec-header reveal">
        <div className="ey ey-v">Tarifas</div>
        <h2 className="h2-l ls-tight" style={{ textAlign: 'center' }}>Simple. Sin sorpresas.<br /><span className="hi">Sin letra chica.</span></h2>
        <p className="body-l" style={{ textAlign: 'center', margin: '12px auto 0' }}>Paga solo lo que usas. Sin volumen mínimo en el
          plan Starter. Todos los planes incluyen same day delivery.</p>
      </div>
      <div className="pricing-grid">
        <div className="pc reveal">
          <div className="pc-tier">Starter</div>
          <div className="pc-name">Para comenzar</div>
          <div className="pc-desc">Para tiendas que envían sus primeros pedidos same day sin volumen mínimo.</div>
          <div className="pc-price">$2.990<span>/envío</span></div>
          <div className="pc-note">sin volumen mínimo mensual</div>
          <div className="pc-div"></div>
          <div className="pc-feats">
            <div className="pf on"><span className="pck y">✓</span>Same day delivery incluido</div>
            <div className="pf on"><span className="pck y">✓</span>Retiro desde las 8 AM</div>
            <div className="pf on"><span className="pck y">✓</span>Tracking en tiempo real</div>
            <div className="pf on"><span className="pck y">✓</span>Notificaciones SMS</div>
            <div className="pf on"><span className="pck y">✓</span>Etiquetas PDF</div>
            <div className="pf on"><span className="pck y">✓</span>Dashboard básico</div>
            <div className="pf on"><span className="pck y">✓</span>1 intento de entrega</div>
            <div className="pf"><span className="pck n">–</span>WhatsApp automático</div>
            <div className="pf"><span className="pck n">–</span>Tracking con tu marca</div>
          </div>
          <a href="#" className="pc-btn ghost">Crear cuenta gratis</a>
        </div>
        <div className="pc feat reveal d1">
          <div className="pc-badge">Más popular</div>
          <div className="pc-tier">Pro</div>
          <div className="pc-name">Para crecer</div>
          <div className="pc-desc">Para tiendas con volumen regular que necesitan mejor experiencia y más control.</div>
          <div className="pc-price">$2.290<span>/envío</span></div>
          <div className="pc-note">desde 50 envíos/mes</div>
          <div className="pc-div"></div>
          <div className="pc-feats">
            <div className="pf on"><span className="pck y">✓</span>Todo de Starter</div>
            <div className="pf on"><span className="pck y">✓</span>WhatsApp automático incluido</div>
            <div className="pf on"><span className="pck y">✓</span>Tracking con tu logo y dominio</div>
            <div className="pf on"><span className="pck y">✓</span>2 intentos de entrega</div>
            <div className="pf on"><span className="pck y">✓</span>Dashboard avanzado + KPIs</div>
            <div className="pf on"><span className="pck y">✓</span>Etiquetas con tu logo</div>
            <div className="pf on"><span className="pck y">✓</span>Contingencia automática</div>
            <div className="pf on"><span className="pck y">✓</span>Garantía same day</div>
            <div className="pf"><span className="pck n">–</span>API REST e integraciones</div>
          </div>
          <a href="#" className="pc-btn solid">Empezar con Pro</a>
        </div>
        <div className="pc reveal d2">
          <div className="pc-tier">Enterprise</div>
          <div className="pc-name">Para escala</div>
          <div className="pc-desc">Para alto volumen, multi-bodega y operaciones que necesitan integración total.</div>
          <div className="pc-price">$1.790<span>/envío</span></div>
          <div className="pc-note">desde 300 envíos/mes</div>
          <div className="pc-div"></div>
          <div className="pc-feats">
            <div className="pf on"><span className="pck y">✓</span>Todo de Pro</div>
            <div className="pf on"><span className="pck y">✓</span>API REST + webhooks</div>
            <div className="pf on"><span className="pck y">✓</span>Integración Shopify/WooCommerce</div>
            <div className="pf on"><span className="pck y">✓</span>Multi-bodega y multi-usuario</div>
            <div className="pf on"><span className="pck y">✓</span>SLA garantizado contractual</div>
            <div className="pf on"><span className="pck y">✓</span>Gestor de cuenta dedicado</div>
            <div className="pf on"><span className="pck y">✓</span>Soporte prioritario 24/7</div>
            <div className="pf on"><span className="pck y">✓</span>Reportes personalizados</div>
          </div>
          <a href="#" className="pc-btn ghost">Hablar con ventas</a>
        </div>
      </div>
    </section>
  );
}
