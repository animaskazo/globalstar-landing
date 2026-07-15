import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-view">
      <header className="privacy-header">
        <div className="privacy-header-content">
          <h1>Política de Privacidad</h1>
          <p className="privacy-subtitle">GlobalStar Courier — Logística de Última Milla</p>
          <div className="privacy-meta">Última actualización: Julio 2026</div>
        </div>
      </header>
      
      <main className="privacy-body">
        <div className="privacy-container">
          <section className="privacy-section">
            <h2>1. Identificación del Responsable</h2>
            <div className="info-grid">
              <div className="info-card">
                <strong>Representante Legal:</strong>
                <span>Kimberlain Johan Aristizábal Amaya</span>
              </div>
              <div className="info-card">
                <strong>RUT:</strong>
                <span>27.045.358-9</span>
              </div>
              <div className="info-card">
                <strong>Contacto:</strong>
                <a href="mailto:globalstarcourier2025@gmail.com">globalstarcourier2025@gmail.com</a>
              </div>
              <div className="info-card">
                <strong>Ámbito de Aplicación:</strong>
                <span>Territorio de la República de Chile</span>
              </div>
            </div>
          </section>

          <section className="privacy-section">
            <h2>2. Información que Recopilamos</h2>
            <p>
              Para garantizar una operación logística eficiente y cumplir con los hitos de despacho, recopilamos los siguientes datos personales y operativos, ya sea directamente de los remitentes, a través de integraciones automatizadas (APIs) con los comercios, o durante la ejecución del servicio en terreno:
            </p>
            <ul>
              <li>
                <strong>Datos de Identificación y Contacto:</strong> Nombre completo, número de teléfono (fijo o móvil) y correo electrónico del destinatario y del remitente.
              </li>
              <li>
                <strong>Datos de Ubicación:</strong> Dirección de origen, dirección de destino, y referencias del domicilio para facilitar la entrega.
              </li>
              <li>
                <strong>Datos de la Entrega (Prueba de Entrega - POD):</strong> Firma digital o física de quien recibe el paquete, nombre, RUT, y registro fotográfico del paquete en el domicilio (excluyendo rostros de personas).
              </li>
              <li>
                <strong>Datos de Navegación y Geolocalización:</strong> Información de rutas y ubicación en tiempo real de nuestra flota de vehículos para el seguimiento del estado del envío.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>3. Finalidad del Tratamiento de los Datos</h2>
            <p>
              Los datos personales recopilados son utilizados exclusivamente para los fines inherentes al servicio de logística de última milla.
            </p>
            <ul>
              <li>
                <strong>Ejecución del Servicio:</strong> Coordinar, retirar, transportar y entregar los paquetes enviados por los comercios asociados a los destinatarios finales.
              </li>
              <li>
                <strong>Optimización Operativa:</strong> Planificar y optimizar las rutas de nuestra flota propia para garantizar entregas en el mismo día o en los plazos acordados.
              </li>
              <li>
                <strong>Trazabilidad y Notificaciones:</strong> Mantener informados a los comercios y a los destinatarios sobre el estado del envío, retrasos o confirmaciones de entrega.
              </li>
              <li>
                <strong>Soporte y Atención al Cliente:</strong> Gestionar consultas, reclamos, devoluciones o incidencias relacionadas con los paquetes despachados.
              </li>
              <li>
                <strong>Respaldo Legal y Administrativo:</strong> Mantener un registro histórico de entregas para la validación de hitos comerciales, facturación y prevención de fraudes.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>4. Protección y Seguridad de la Información</h2>
            <p>
              Estamos comprometidos con la seguridad de los datos. Empleamos sistemas avanzados, protocolos de acceso restringido y medidas técnicas de seguridad para evitar el acceso no autorizado, la pérdida, el mal uso o la alteración de la información de los remitentes y destinatarios. Los datos de seguimiento y de las entregas se almacenan en servidores seguros con controles de autenticación estrictos.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Compartición de Datos con Terceros</h2>
            <p>
              No vendemos, cedemos ni distribuimos la información personal que es recopilada. Los datos solo podrán ser compartidos en las siguientes circunstancias:
            </p>
            <ul>
              <li>
                <strong>Con el Personal de Flota:</strong> Los conductores y repartidores tendrán acceso temporal a la información de contacto y dirección del destinatario estrictamente necesaria para concretar la entrega.
              </li>
              <li>
                <strong>Con los Comercios Asociados:</strong> Se compartirá la confirmación de entrega (incluyendo firma y registro fotográfico del paquete) con la tienda de origen para respaldar la finalización del servicio.
              </li>
              <li>
                <strong>Por Requerimiento Legal:</strong> Cuando exista una orden judicial o un requerimiento de las autoridades competentes en Chile que nos obligue a entregar dicha información.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>6. Derechos de los Titulares (Ley N° 19.628)</h2>
            <p>
              De acuerdo con la legislación chilena, los titulares de los datos (comercios o destinatarios finales) tienen derecho a ejercer el control sobre su información personal.
            </p>
            <ul>
              <li>
                <strong>Acceso:</strong> Solicitar confirmación sobre qué datos personales estamos tratando.
              </li>
              <li>
                <strong>Rectificación:</strong> Solicitar la modificación de datos inexactos, desactualizados o incompletos.
              </li>
              <li>
                <strong>Cancelación:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios para los fines que fueron recopilados (sujeto a las obligaciones de retención legal y comercial).
              </li>
              <li>
                <strong>Oposición:</strong> Negarse al tratamiento de sus datos para fines no esenciales.
              </li>
            </ul>
            <p className="highlight-box">
              Para ejercer cualquiera de estos derechos, el titular debe enviar una solicitud formal por escrito al correo electrónico <a href="mailto:globalstarcourier2025@gmail.com">globalstarcourier2025@gmail.com</a>, indicando su nombre, RUT, y el motivo de la solicitud.
            </p>
          </section>

          <section className="privacy-section">
            <h2>7. Modificaciones a la Política de Privacidad</h2>
            <p>
              Nos reservamos el derecho de modificar o actualizar esta Política de Privacidad en cualquier momento para adaptarla a nuevas prácticas operativas o cambios en la legislación chilena. Se recomienda a los comercios asociados revisar esta política periódicamente. Las actualizaciones entrarán en vigencia inmediatamente después de su publicación o notificación oficial.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
