import React from 'react';

export default function Contingencia() {
  return (
    <section className="sec-g" id="contingencia">
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <div style={{ maxWidth: '600px', marginBottom: 0 }} className="reveal">
          <div className="ey ey-r">Plan de contingencia</div>
          <h2 className="h2-l ls-tight">Si algo falla,<br /><span className="hi-r">ya está resuelto.</span></h2>
          <p className="body-l" style={{ marginTop: '12px', maxWidth: '520px' }}>El 2% de los envíos tienen alguna incidencia durante
            el día. Para ese 2%, activamos un protocolo automático que resuelve sin que intervengas.</p>
        </div>
        <div className="steps-grid">
          <div className="step-card reveal">
            <div className="step-n">01</div>
            <div className="step-ico si-v">⚠️</div>
            <h4>Alerta automática al instante</h4>
            <p>Si el conductor registra un intento fallido o supera el tiempo estimado, la alerta aparece en tu dashboard
              y en el nuestro al mismo tiempo.</p>
          </div>
          <div className="step-card reveal d1">
            <div className="step-n">02</div>
            <div className="step-ico si-b">💬</div>
            <h4>Email de reagendamiento inmediato</h4>
            <p>Tu cliente recibe un mensaje automático con las instrucciones para reagendar</p>
          </div>
          <div className="step-card reveal d2">
            <div className="step-n">03</div>
            <div className="step-ico si-g">🔄</div>
            <h4>Segundo intento prioritario al día siguiente</h4>
            <p>Si reagenda, su envío queda marcado como prioritario para el primer retiro del día siguiente. Primer
              paquete en cargar, primero en entregar.</p>
          </div>
          <div className="step-card reveal d3">
            <div className="step-n">04</div>
            <div className="step-ico si-a">📦</div>
            <h4>Devolución a tu bodega</h4>
            <p>Tras 2 intentos sin éxito, el paquete regresa a tu bodega en 24 horas. Sin costo adicional en planes Pro y
              Enterprise.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
