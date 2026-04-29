import React from 'react';

export default function Notificaciones() {
  return (
    <section className="sec-g" id="notificaciones">
      <div className="split rev">
        <div className="reveal">
          <div className="ey ey-a">Notificaciones automáticas</div>
          <h2 className="h2-l ls-tight">Tu cliente informado<br />todo el día. <span className="hi-a">Sin que hagas nada.</span></h2>
          <p className="body-l" style={{ marginTop: '14px' }}>Mensajes automáticos en cada hito del mismo día: cuando retiramos por
            la mañana, cuando el conductor va en camino y cuando entregamos. Tu cliente siempre sabe qué pasa con su
            pedido.</p>
          <div className="blist-l">
            <div className="bl-row">
              <div className="dot dot-a"></div>
              <div>
                <h4>WhatsApp de mañana: "Tu pedido fue retirado"</h4>
                <p>Al dejar tu bodega, tu cliente recibe el primer mensaje de confirmación con el link de tracking y el
                  horario estimado de entrega.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-a"></div>
              <div>
                <h4>WhatsApp de tarde: "El conductor está cerca"</h4>
                <p>Cuando el conductor está a menos de 2 km, el destinatario recibe la alerta para prepararse. Elimina los
                  intentos fallidos por ausencia.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-a"></div>
              <div>
                <h4>Confirmación de entrega con foto</h4>
                <p>Al entregar, tu cliente recibe la foto de su paquete en la puerta. Cierra el ciclo same day con
                  evidencia real en sus manos.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-a"></div>
              <div>
                <h4>Mensajes a nombre de tu tienda</h4>
                <p>Configura el remitente como el nombre de tu tienda. Tu cliente recibe "Tu pedido de MiTienda llega hoy"
                  — no "GlobalStar".</p>
              </div>
            </div>
          </div>
        </div>
        <div className="reveal d1">
          <div className="notif-stack">
            <div className="notif-card">
              <div className="notif-top">
                <div className="notif-ch" style={{ color: '#25d366' }}>💬 WhatsApp · 08:35 AM</div>
                <span className="notif-time">Mañana</span>
              </div>
              <div className="notif-body">🌅 Hola <strong>Ana</strong>! Tu pedido de <strong>MiTienda</strong> fue retirado
                esta mañana y ya está en camino. Entrega estimada: <strong>hoy entre las 14–16h</strong>. Sigue aquí →
                gs.cl/GS-08471</div>
              <span className="notif-badge nb-g">✓ Leído · 2 min después del envío</span>
            </div>
            <div className="notif-card">
              <div className="notif-top">
                <div className="notif-ch" style={{ color: '#25d366' }}>💬 WhatsApp · 13:58 PM</div>
                <span className="notif-time">Tarde</span>
              </div>
              <div className="notif-body">🚚 <strong>¡Tu pedido está llegando hoy!</strong> El conductor está a <strong>1.4
                  km</strong>. Llega aproximadamente en <strong>15 minutos</strong>. Prepárate o deja a alguien en casa.
              </div>
              <span className="notif-badge nb-g">✓ Leído · apertura inmediata</span>
            </div>
            <div className="notif-card">
              <div className="notif-top">
                <div className="notif-ch" style={{ color: '#6b7280' }}>📱 SMS · 14:23 PM</div>
                <span className="notif-time">Confirmación</span>
              </div>
              <div className="notif-body">✅ <strong>¡Entregado hoy!</strong> Tu pedido de MiTienda fue recibido a las 14:21.
                ¿Cómo estuvo la experiencia same day? → bit.ly/nps-gs</div>
              <span className="notif-badge nb-b">↗ Apertura 94% · mismo día</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
