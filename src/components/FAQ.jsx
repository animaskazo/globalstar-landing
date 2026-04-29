import React, { useState } from 'react';

const faqData = [
  {
    q: '¿Hasta qué hora tengo que tener los paquetes listos para el retiro?',
    a: 'Idealmente la noche anterior. El conductor pasa entre las 8 y las 12 del mediodía. Si necesitas más tiempo, puedes coordinar el retiro hasta las 10 AM y aún así garantizamos la entrega ese mismo día dentro del Gran Santiago.'
  },
  {
    q: '¿A qué hora se entregan los pedidos recogidos en la mañana?',
    a: 'Los pedidos retirados entre las 8 y las 12 se entregan entre las 13 y las 20 horas del mismo día. Tu cliente elige su ventana preferida de 2 horas al momento de la compra o por el link que le enviamos al confirmar el retiro.'
  },
  {
    q: '¿Qué pasa si mi cliente no está en casa cuando llega el conductor?',
    a: 'Si el destinatario no está, el conductor deja el intento registrado con hora exacta y foto de evidencia. Automáticamente le enviamos un WhatsApp para reagendar. Puede elegir otro día o la misma tarde si hay disponibilidad.'
  },
  {
    q: '¿Cuál es la garantía si no entregan el mismo día?',
    a: 'Si no cumplimos el same day sin causa de fuerza mayor (mal tiempo extremo, dirección incorrecta, destinatario ausente sin reagendamiento), el costo completo del envío se acredita automáticamente en tu saldo. La garantía aplica desde el plan Pro.'
  },
  {
    q: '¿Funciona para todas las comunas de Santiago?',
    a: 'Cubrimos 30+ comunas del Gran Santiago con same day delivery garantizado. Algunas zonas periféricas tienen disponibilidad según el volumen del día. Al crear tu cuenta puedes ver el mapa de cobertura exacto con tiempos de entrega por zona.'
  },
  {
    q: '¿Cómo me integro con Shopify para automatizar las órdenes?',
    a: 'Instalas nuestra app desde el App Store de Shopify, ingresas tu API key y listo. Cada pedido pagado crea automáticamente la orden de retiro para el día siguiente. También funciona con WooCommerce, Jumpseller y cualquier plataforma con webhooks.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="sec-w">
      <div className="faq-wrap">
        <div style={{ textAlign: 'center', marginBottom: '56px' }} className="reveal">
          <div className="ey ey-v" style={{ justifyContent: 'center' }}>Preguntas frecuentes</div>
          <h2 className="h2-l ls-tight" style={{ textAlign: 'center' }}>Todo sobre<br /><span className="hi">el same day</span></h2>
        </div>
        <div className="reveal">
          {faqData.map((item, index) => (
            <div className="fi" key={index}>
              <button 
                className={`fq ${openIndex === index ? 'open' : ''}`} 
                onClick={() => toggleFAQ(index)}
              >
                <span className="fqt">{item.q}</span>
                <span className="fqi">+</span>
              </button>
              <div className={`fa ${openIndex === index ? 'open' : ''}`}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
