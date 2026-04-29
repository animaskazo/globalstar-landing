import React from 'react';

export default function EntregaSameDay() {
  return (
    <section className="sec-d" id="entregas">
      <div className="split rev">
        <div className="reveal">
          <div className="ey ey-w">Entregas seguras</div>
          <h2 className="h2-d ls-tight">Control total<br /><span className="grad2">Tus envios siempre estarán seguros.</span></h2>
          <p className="body-d" style={{ marginTop: '14px' }}>Control total de tus entregas desde el primer clic. Tus envios siempre estarán seguros y tus clientes sabrán en que etapa se encuentran.</p>
          <div className="blist-d">
            <div className="bl-row">
              <div className="dot dot-w"></div>
              <div>
                <h4>Validación y evidencia de cada paquete</h4>
                <p>Al retiro y entrega cada paquete se escanea y se le toma una foto para asegurar su integridad.</p>
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
                <h4>Cobertura en 30+ comunas del Gran Santiago</h4>
                <p>Ñuñoa, Providencia, Las Condes, Maipú, Pudahuel, Vitacura, Santiago Centro y más. Consulta el mapa
                  completo al crear tu cuenta.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="img-card dark reveal d1">
          <img src="https://images.unsplash.com/photo-1587938140500-e4c6a6ca664a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
