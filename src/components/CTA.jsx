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

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // IMPORTANTE: Resend requiere ejecutarse en el Backend para no exponer la API KEY en el cliente.
      // Aquí hacemos una llamada a un endpoint de backend (ej: Next.js API, Node.js, etc.)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ nombre: '', empresa: '', email: '', telefono: '', volumen: '' });
      } else {
        alert('Hubo un error al enviar el formulario. Inténtalo nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión. Inténtalo nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='CTA' className="cta-sec">
      <div className="cta-glow"></div>
      <div className="cta-grid-bg"></div>
      <div className="cta-inner reveal">
        <h2 className="cta-h2 ls-tight">Impulsa tu tienda con<br /><span className="cg">entregas el mismo día.</span></h2>
        <p className="cta-sub">Completa tus datos y un ejecutivo te contactará a la brevedad</p>

        {success ? (
          <div className="success-message" style={{ marginTop: '24px', padding: '20px', background: 'rgba(46, 204, 113, 0.1)', border: '1px solid rgba(46, 204, 113, 0.3)', borderRadius: '12px', color: '#2ecc71', fontSize: '18px' }}>
            ¡Gracias! Hemos recibido tus datos exitosamente. Nos pondremos en contacto contigo en breve.
          </div>
        ) : (
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
            <button
              type="submit"
              className="btn-primary"
              style={{ padding: '14px 44px', marginTop: '24px', cursor: loading ? 'not-allowed' : 'pointer', border: 'none', opacity: loading ? 0.7 : 1 }}
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Quiero empezar →'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
