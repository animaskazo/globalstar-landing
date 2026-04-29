import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        GlobalStar
      </a>
      <div className="nav-right">
        <a href="#" className="nav-ghost">Iniciar sesión</a>
        <a href="#CTA" className="nav-cta">Contactar a ventas</a>
      </div>
    </nav>
  );
}
