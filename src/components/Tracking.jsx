import React from 'react';

export default function Tracking() {
  return (
    <section className="sec-w" id="tracking">
      <div className="split">
        <div className="reveal">
          <div className="ey ey-b">Tracking en tiempo real</div>
          <h2 className="h2-l ls-tight">Tu cliente ve<br />cada paso <span className="hi-b">del camino.</span></h2>
          <p className="body-l" style={{ marginTop: '14px' }}>Desde que retiramos en tu bodega por la mañana hasta que tocamos el
            timbre del destinatario, cada movimiento está registrado y visible en tiempo real.</p>
          <div className="blist-l">
            <div className="bl-row">
              <div className="dot dot-b"></div>
              <div>
                <h4>Página de tracking con tu marca, no la nuestra</h4>
                <p>La URL de seguimiento muestra tu logo y colores. Tus clientes sienten que es tu empresa la que entrega
                  — porque lo es.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-b"></div>
              <div>
                <h4>Mapa en vivo del conductor actualizado cada 30 segundos</h4>
                <p>El destinatario ve la posición exacta del conductor y sabe cuántos minutos faltan. Eliminamos el
                  "¿cuándo llega?" de raíz.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-b"></div>
              <div>
                <h4>4 hitos del mismo día visibles</h4>
                <p>Retirado en bodega → En ruta → Llegando a tu zona → Entregado. Con hora exacta en cada etapa del
                  recorrido de ese día.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-b"></div>
              <div>
                <h4>Vista masiva de toda tu operación diaria</h4>
                <p>Consulta el estado de todos tus envíos del día en una tabla en tiempo real. Filtra por estado, hora o
                  comuna de entrega.</p>
              </div>
            </div>
          </div>
          <a href="#precios" className="mlink mlink-b">Ver planes con tracking personalizado 
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
        <div className="reveal d2">
          <div className="tw-wrap">
            <div className="tw-head">
              <span className="tw-head-lbl">Seguimiento · Hoy</span>
              <span className="tw-head-id">GS-2024-08471</span>
            </div>
            <div className="tw-timeline">
              <div className="tw-tl-node">
                <div className="tw-tl-dot done"></div>
                <div className="tw-tl-label">Retiro</div>
                <div className="tw-tl-time">08:30</div>
              </div>
              <div className="tw-tl-line done"></div>
              <div className="tw-tl-node">
                <div className="tw-tl-dot done"></div>
                <div className="tw-tl-label">En ruta</div>
                <div className="tw-tl-time">09:55</div>
              </div>
              <div className="tw-tl-line half"></div>
              <div className="tw-tl-node">
                <div className="tw-tl-dot live"></div>
                <div className="tw-tl-label">Llegando</div>
                <div className="tw-tl-time">14:22</div>
              </div>
              <div className="tw-tl-line"></div>
              <div className="tw-tl-node">
                <div className="tw-tl-dot"></div>
                <div className="tw-tl-label">Entregado</div>
                <div className="tw-tl-time" style={{ color: 'var(--mid)' }}>ETA 15:00</div>
              </div>
            </div>
            <div className="tw-prog">
              <div className="tw-bar-bg">
                <div className="tw-bar-fill"></div>
              </div>
              <div className="tw-prog-row">
                <span>Misma jornada</span>
                <span>3 de 4 etapas</span>
                <span>Hoy antes de las 8 PM</span>
              </div>
            </div>
            <div className="tw-body">
              <div className="tw-row">
                <div className="tw-dot done"></div>
                <div className="tw-info">
                  <div className="tw-lbl">Paquete retirado en tu bodega</div>
                  <div className="tw-meta">Pudahuel · Esta mañana</div>
                </div>
                <span className="tw-time">08:30</span>
              </div>
              <div className="tw-row">
                <div className="tw-dot done"></div>
                <div className="tw-info">
                  <div className="tw-lbl">En ruta — clasificado en hub</div>
                  <div className="tw-meta">Asignado a conductor</div>
                </div>
                <span className="tw-time">09:55</span>
              </div>
              <div className="tw-row">
                <div className="tw-dot live"></div>
                <div className="tw-info">
                  <div className="tw-lbl">Conductor a 1.4 km del destino</div>
                  <div className="tw-meta">Ñuñoa · ~18 minutos</div>
                </div>
                <span className="tw-time">14:22</span>
              </div>
              <div className="tw-row">
                <div className="tw-dot"></div>
                <div className="tw-info">
                  <div className="tw-lbl" style={{ color: 'var(--mid)' }}>Entregado al destinatario</div>
                  <div className="tw-meta">Estimado hoy ~15:00</div>
                </div>
                <span className="tw-time" style={{ color: 'var(--paper3)' }}>—</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
