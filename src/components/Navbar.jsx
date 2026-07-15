import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-logo">
        GlobalStar Courier
      </Link>
      <div className="nav-right">
        <a href="#" className="nav-ghost">Iniciar sesión</a>
        <Link to="/#CTA" className="nav-cta">Contactar a ventas</Link>
      </div>
    </nav>
  );
}
