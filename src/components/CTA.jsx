import React, { useState } from 'react';

export default function CTA() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    volumen: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <section className="cta-sec">
      <div className="cta-glow"></div>
      <div className="cta-grid-bg"></div>
      <div className="cta-inner reveal">
        <h2 className="cta-h2 ls-tight">Impulsa tu tienda con<br /><span className="cg">entregas el mismo día.</span></h2>
        <p className="cta-sub">Completa tus datos y un ejecutivo te contactará en minutos para dar de alta tu cuenta.</p>
        
        <form className="cta-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <input 
              type="text" 
              name="nombre" 
              placeholder="Nombre y Apellido" 
              value={formData.nombre} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="text" 
              name="empresa" 
              placeholder="Nombre de tu Tienda/Empresa" 
              value={formData.empresa} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Correo electrónico" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="tel" 
              name="telefono" 
              placeholder="Teléfono (Ej: +569...)" 
              value={formData.telefono} 
              onChange={handleChange} 
              required 
            />
            <select 
              name="volumen" 
              value={formData.volumen} 
              onChange={handleChange} 
              required
              style={{ gridColumn: '1 / -1' }}
            >
              <option value="" disabled>Volumen de envíos mensuales</option>
              <option value="1-50">1 a 50 envíos</option>
              <option value="51-200">51 a 200 envíos</option>
              <option value="201-500">201 a 500 envíos</option>
              <option value="500+">Más de 500 envíos</option>
            </select>
          </div>
          <button type="submit" className="btn-primary" style={{ padding: '14px 44px', marginTop: '24px', cursor: 'pointer', border: 'none' }}>
            Quiero empezar →
          </button>
        </form>
      </div>
    </section>
  );
}
