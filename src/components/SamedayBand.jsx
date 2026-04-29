import React from 'react';

export default function SamedayBand() {
  return (
    <div className="sameday-band">
      <div className="sd-item"><span className="sd-icon">🌅</span> Retiro desde las 8 AM</div>
      <span className="sd-sep"></span>
      <div className="sd-item"><span className="sd-icon">📦</span> Despacho antes del mediodía</div>
      <span className="sd-sep"></span>
      <div className="sd-item"><span className="sd-icon">🏠</span> Entrega antes de las 8 PM</div>
      <span className="sd-sep"></span>
      <div className="sd-item"><span className="sd-icon">✅</span> Confirmación en tiempo real</div>
    </div>
  );
}
