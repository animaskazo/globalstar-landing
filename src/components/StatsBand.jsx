import React from 'react';

export default function StatsBand() {
  return (
    <div className="stats-band">
      <div className="stats-inner reveal">
        <div className="stat-cell">
          <div className="stat-num">98%</div>
          <div className="stat-lbl">Entregas exitosas el mismo día</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">+2000K</div>
          <div className="stat-lbl">Pedidos entregados mensualmente en Santiago</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">8h</div>
          <div className="stat-lbl">Ventana de entrega: de tu bodega a la puerta</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">30+</div>
          <div className="stat-lbl">Comunas con cobertura same day activa</div>
        </div>
      </div>
    </div>
  );
}
