import React from 'react';

export default function Recoleccion() {
  return (
    <section className="sec-w" id="recoleccion">
      <div className="split">
        <div className="reveal">
          <div className="ey ey-v">Recolección matutina</div>
          <h2 className="h2-l ls-tight">Retiramos todos<br />tus paquetes <span className="hi">gratis.</span></h2>
          <p className="body-l" style={{ marginTop: '14px' }}>Programa el retiro desde tu dashboard. A partir de
            las 12 pm nuestros conductores pasan por tu bodega o local. Tú empacas la noche anterior, nosotros retiramos y entregamos el mismo día.</p>
          <div className="blist-l">
            <div className="bl-row">
              <div className="dot dot-v"></div>
              <div>
                <h4>Ventana de retiro 8 AM – 12 PM</h4>
                <p>Coordina el horario exacto desde el panel. El conductor llega en la franja programada con confirmación
                  de llegada en tiempo real.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-v"></div>
              <div>
                <h4>Foto de los bultos al retirar</h4>
                <p>Al cargar los paquetes, el conductor toma una foto de evidencia y la recibes en el acto. Sabes
                  exactamente cuántos salieron y en qué estado.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-v"></div>
              <div>
                <h4>Múltiples puntos de retiro</h4>
                <p>¿Tienes bodega, local y casa? Agrega todas tus direcciones de origen. El mismo conductor puede pasar
                  por varios puntos en la ruta matutina.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-v"></div>
              <div>
                <h4>Creación de órdenes automática desde tu tienda</h4>
                <p>Conecta Shopify, WooCommerce o Jumpseller. Cada pedido pagado la noche anterior crea automáticamente la
                  orden de retiro para la mañana siguiente.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-v"></div>
              <div>
                <h4>Escaneo de código de barras al retirar</h4>
                <p>El conductor escanea cada paquete al cargarlo. El sistema confirma que el ítem correcto corresponde a
                  la dirección correcta antes de salir.</p>
              </div>
            </div>
          </div>
          <div className="tags">
            <span className="tag-l">Shopify</span>
            <span className="tag-l">WooCommerce</span>
            <span className="tag-l">Jumpseller</span>
            <span className="tag-l">API REST</span>
            <span className="tag-l">Retiro 8 AM</span>
          </div>
        </div>
        <div className="img-card reveal d2">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop"
            alt="Recolección matutina de paquetes" />
          <div className="ov-v"></div>
          <div className="fchip fchip-tl dk">
            <div className="fc-lbl">Retiro confirmado</div>
            <div className="fc-row">
              <div className="fdot fdot-g"></div>
              <div className="fc-sm">Hoy 08:30 AM</div>
            </div>
            <div className="fc-sub">24 bultos recogidos</div>
          </div>
          <div className="fchip fchip-br dk">
            <div className="fc-lbl">Próxima parada</div>
            <div className="fc-val">1.8 km <em className="pos">en camino</em></div>
          </div>
        </div>
      </div>
    </section>
  );
}
