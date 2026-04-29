import React from 'react';

export default function EntregaSameDay() {
  return (
    <section className="sec-d" id="entregas">
      <div className="split rev">
        <div className="reveal">
          <div className="ey ey-w">Entrega same day</div>
          <h2 className="h2-d ls-tight">Pedido hoy.<br /><span className="grad2">Entregado hoy.</span></h2>
          <p className="body-d" style={{ marginTop: '14px' }}>Retiramos por la mañana y entregamos durante el día. Tu cliente
            recibe su pedido antes de las 8 PM sin pagar extra. Eso es lo que diferencia a tu tienda.</p>
          <div className="blist-d">
            <div className="bl-row">
              <div className="dot dot-w"></div>
              <div>
                <h4>Retiro AM → Entrega PM el mismo día</h4>
                <p>Los pedidos retirados entre las 8 y las 12 se entregan entre las 14 y las 20 horas. Todos dentro del
                  mismo día calendario.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-w"></div>
              <div>
                <h4>Tu cliente elige una ventana de 2 horas</h4>
                <p>Al confirmar el pedido, el destinatario elige su franja horaria preferida para la entrega. Menos
                  espera, más satisfacción con tu marca.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-w"></div>
              <div>
                <h4>Foto de entrega + firma digital</h4>
                <p>Cada entrega incluye foto del paquete en la puerta y firma digital del receptor. Evidencia disponible
                  en tu dashboard al instante.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-w"></div>
              <div>
                <h4>Garantía económica si no cumplimos</h4>
                <p>Si fallamos en la entrega same day sin causa de fuerza mayor o dirección incorrecta, el costo del envío
                  se acredita automáticamente a tu cuenta.</p>
              </div>
            </div>
            <div className="bl-row">
              <div className="dot dot-w"></div>
              <div>
                <h4>Cobertura en 30+ comunas del Gran Santiago</h4>
                <p>Ñuñoa, Providencia, Las Condes, Maipú, Pudahuel, Vitacura, Santiago Centro y más. Consulta el mapa
                  completo al crear tu cuenta.</p>
              </div>
            </div>
          </div>
          <div className="tags">
            <span className="tag-d">Same Day</span>
            <span className="tag-d">Garantía SLA</span>
            <span className="tag-d">Foto evidencia</span>
            <span className="tag-d">Firma digital</span>
            <span className="tag-d">30+ comunas</span>
          </div>
        </div>
        <div className="img-card dark reveal d1">
          <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80&auto=format&fit=crop"
            alt="Entrega same day" />
          <div className="ov-g"></div>
          <div className="fchip fchip-bl dk">
            <div className="fc-lbl">Entregado</div>
            <div className="fc-val">✓ <em className="pos">Hoy a las 15:42</em></div>
          </div>
          <div className="fchip fchip-tr dk">
            <div className="fc-lbl">SLA same day</div>
            <div className="fc-val">100% <em className="pos">esta semana</em></div>
          </div>
        </div>
      </div>
    </section>
  );
}
