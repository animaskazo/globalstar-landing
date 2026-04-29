import React from 'react';

export default function Etiquetas() {
  return (
    <section className="sec-d2" id="etiquetas">
      <div className="split">
        <div className="reveal">
          <div className="ey ey-w">Etiquetas same day</div>
          <h2 className="h2-d ls-tight">Imprime en la noche.<br /><span className="grad2">Despacha en la mañana.</span></h2>
          <p className="body-d" style={{ marginTop: '14px' }}>Genera todas las etiquetas del día siguiente la noche anterior. Un
            clic, un PDF. Cuando llegue el conductor, todo está listo para cargar sin demoras.</p>
          <div className="blist-d">
            <div className="bl-row">
              <div className="dot dot-w"></div>
              <div>
                <h4>Generación masiva en un clic</h4>
                <p>Selecciona todos los pedidos del día siguiente y genera un PDF con todas las etiquetas ordenadas por
                  ruta. Optimizado para la salida matutina.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-w"></div>
              <div>
                <h4>Compatible con impresoras Zebra y de escritorio</h4>
                <p>Formato para térmicas Zebra y Dymo, o en A4 con 4 etiquetas por hoja. La que tengas en casa o en la
                  bodega sirve.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-w"></div>
              <div>
                <h4>Código de barras vinculado al tracking same day</h4>
                <p>El conductor escanea al retirar por la mañana. El sistema confirma que cada paquete corresponde a la
                  dirección correcta antes de salir.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-w"></div>
              <div>
                <h4>Tu logo en la etiqueta</h4>
                <p>En el plan Pro y Enterprise, la etiqueta lleva el logo de tu tienda. Tu marca visible desde que el
                  paquete sale por la mañana hasta que llega.</p>
              </div>
            </div>
          </div>
          <div className="tags">
            <span className="tag-d">PDF</span>
            <span className="tag-d">Zebra</span>
            <span className="tag-d">Código de barras</span>
            <span className="tag-d">White label</span>
            <span className="tag-d">Listo en 10 seg</span>
          </div>
        </div>
        <div className="reveal d2">
          <div className="lp">
            <div className="lp-top">
              <div className="lp-logo">Global<span>Star</span></div>
              <div className="lp-tipo">SAME DAY</div>
            </div>
            <div className="lp-barcode"></div>
            <div className="lp-code">GS-2024-08471-SD</div>
            <div className="lp-grid">
              <div className="lp-f">
                <label>Destinatario</label>
                <p>Ana García López</p>
              </div>
              <div className="lp-f">
                <label>Teléfono</label>
                <p>+56 9 8765 4321</p>
              </div>
              <div className="lp-f" style={{ gridColumn: '1/-1' }}>
                <label>Dirección de entrega</label>
                <p>Av. Providencia 2340, Dpto 42 · Providencia</p>
              </div>
              <div className="lp-f">
                <label>Origen</label>
                <p>MiTienda · Pudahuel</p>
              </div>
              <div className="lp-f">
                <label>Retiro</label>
                <p>Hoy 8–12 AM</p>
              </div>
              <div className="lp-f">
                <label>Ventana entrega</label>
                <p>Hoy 14–16 h</p>
              </div>
              <div className="lp-f">
                <label>Bultos</label>
                <p>1 de 1</p>
              </div>
            </div>
            <div className="lp-footer">
              <span>Dejar con vecino si no hay nadie</span>
              <span className="lp-ok">Same Day ✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
