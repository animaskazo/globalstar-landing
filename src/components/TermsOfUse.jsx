import React from 'react';

export default function TermsOfUse() {
  return (
    <div className="privacy-view">
      <header className="privacy-header">
        <div className="privacy-header-content">
          <h1>Términos y Condiciones de Uso</h1>
          <p className="privacy-subtitle">GlobalStar Courier — Logística de Última Milla</p>
          <div className="privacy-meta">Última actualización: Julio 2026</div>
        </div>
      </header>
      
      <main className="privacy-body">
        <div className="privacy-container">
          <section className="privacy-section">
            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al acceder, registrarse o utilizar los servicios de logística de última milla proporcionados por <strong>GlobalStar Logística SpA</strong> (en adelante, "GlobalStar Courier"), los comercios asociados, remitentes y clientes aceptan cumplir y estar sujetos a los presentes Términos y Condiciones de Uso. Si no está de acuerdo con estos términos, deberá abstenerse de utilizar nuestros servicios.
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. Descripción del Servicio</h2>
            <p>
              GlobalStar Courier ofrece servicios de transporte y logística de última milla en el territorio de Santiago de Chile (Gran Santiago). Nuestros servicios principales comprenden:
            </p>
            <ul>
              <li><strong>Retiro AM y Entrega PM (Same Day):</strong> Recolección de paquetes en dependencias del comercio durante la mañana y entrega al destinatario final durante la tarde del mismo día.</li>
              <li><strong>Trazabilidad en Tiempo Real:</strong> Seguimiento digital del estado del envío para el comercio y notificaciones automáticas para el destinatario.</li>
              <li><strong>Prueba de Entrega (POD):</strong> Registro digital de firmas, RUT del receptor y registro fotográfico en el punto de entrega.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>3. Obligaciones y Declaraciones del Remitente</h2>
            <p>
              El comercio asociado o remitente declara y garantiza que:
            </p>
            <ul>
              <li><strong>Embalaje Adecuado:</strong> Todos los paquetes entregados a GlobalStar Courier deben estar debidamente embalados, sellados y etiquetados de acuerdo con la naturaleza de su contenido para soportar el transporte normal.</li>
              <li><strong>Información de Despacho:</strong> La información sobre la dirección de destino, contacto telefónico y correo electrónico del destinatario debe ser exacta y completa.</li>
              <li><strong>Productos Prohibidos:</strong> No entregará para su envío mercancías peligrosas, inflamables, corrosivas, explosivas, drogas ilegales, dinero en efectivo, joyas de alto valor o cualquier elemento cuya circulación esté prohibida por las leyes de la República de Chile.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>4. Tiempos de Despacho e Intentos de Entrega</h2>
            <p>
              Nos esforzamos por cumplir rigurosamente con los plazos acordados. No obstante, las entregas están sujetas a las siguientes condiciones:
            </p>
            <ul>
              <li><strong>Intentos de Entrega:</strong> Si el destinatario no se encuentra en el domicilio o no es posible efectuar la entrega en el primer intento, se realizará un segundo intento de entrega de acuerdo a las políticas comerciales o se procederá a la devolución al comercio de origen.</li>
              <li><strong>Devoluciones (Reverse Logistics):</strong> Los paquetes no entregados serán devueltos a la dirección de origen del comercio en los plazos establecidos, aplicando la tarifa correspondiente a servicios de logística inversa.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>5. Tarifas, Facturación y Pago</h2>
            <p>
              Las tarifas aplicables por cada despacho serán las acordadas previamente en el cotizador digital o contrato de servicios comerciales.
            </p>
            <ul>
              <li><strong>Facturación:</strong> La facturación de los servicios prestados se realizará de forma semanal o mensual, según las condiciones pactadas con cada comercio.</li>
              <li><strong>Plazos de Pago:</strong> El comercio se compromete a cancelar las facturas emitidas por GlobalStar Courier dentro de los plazos establecidos. El retraso o no pago de las facturas otorgará el derecho a suspender temporalmente el servicio.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>6. Limitación de Responsabilidad</h2>
            <p>
              GlobalStar Courier asume responsabilidad únicamente por pérdida, merma o daño físico directo de los paquetes que sea exclusivamente imputable a nuestra manipulación durante el transporte, bajo los siguientes límites:
            </p>
            <ul>
              <li><strong>Declaración de Valor:</strong> Los comercios deben declarar el valor estimado de los envíos de alta gama.</li>
              <li><strong>Límite de Indemnización:</strong> Ante un siniestro validado, la indemnización máxima por paquete dañado o extraviado estará limitada al monto máximo establecido en el contrato o plan tarifario correspondiente, salvo contratación de seguros adicionales.</li>
              <li><strong>Exclusión de Fuerza Mayor:</strong> No nos hacemos responsables por retrasos o pérdidas derivadas de eventos de fuerza mayor o caso fortuito (catástrofes naturales, protestas, huelgas, restricciones sanitarias u órdenes de autoridad pública).</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>7. Modificaciones a los Términos</h2>
            <p>
              GlobalStar Courier se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las actualizaciones serán comunicadas a través de nuestro sitio web o por correo electrónico directo a los comercios asociados, y entrarán en vigencia de inmediato.
            </p>
          </section>

          <section className="privacy-section">
            <h2>8. Ley Aplicable y Jurisdicción</h2>
            <p>
              Estos Términos y Condiciones se rigen por las leyes de la República de Chile. Cualquier controversia derivada de la interpretación, validez o ejecución de los servicios se someterá a la jurisdicción de los Tribunales Ordinarios de Justicia de la ciudad de Santiago de Chile.
            </p>
            <p className="highlight-box">
              Si tiene dudas sobre estos términos de servicio, puede ponerse en contacto con nuestro equipo legal y administrativo escribiendo a <a href="mailto:globalstarcourier2025@gmail.com">globalstarcourier2025@gmail.com</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
