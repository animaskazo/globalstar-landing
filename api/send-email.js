import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { nombre, empresa, email, telefono, volumen } = req.body;

  if (!nombre || !email || !empresa) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {
    const data = await resend.emails.send({
      from: 'GlobalStar Web <onboarding@resend.dev>', // Resend permite este remitente de prueba por defecto
      to: 'fernando.rg@live.cl', // Aquí llega el correo con el prospecto
      subject: `🚀 Nuevo Prospecto Web: ${empresa}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 20px; color: #111;">
          <h2 style="color: #0071e3; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nuevo Prospecto Registrado</h2>
          <p>Has recibido una nueva solicitud de contacto a través de la página web.</p>
          <div style="background: #f5f5f7; padding: 15px; border-radius: 12px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Nombre completo:</strong> ${nombre}</p>
            <p style="margin: 8px 0;"><strong>Empresa / Tienda:</strong> ${empresa}</p>
            <p style="margin: 8px 0;"><strong>Correo electrónico:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Teléfono:</strong> <a href="tel:${telefono}">${telefono}</a></p>
            <p style="margin: 8px 0;"><strong>Volumen estimado:</strong> ${volumen} envíos/mes</p>
          </div>
          <p style="font-size: 12px; color: #86868b; margin-top: 30px;">Este mensaje fue generado automáticamente por el sistema GlobalStar en Vercel.</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error enviando email:', error);
    return res.status(500).json({ error: 'Error interno del servidor al enviar el correo' });
  }
}
