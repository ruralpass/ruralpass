import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { nombre, telefono, ubicacion, tipoSistema, descripcion } = await req.json();

    if (!nombre || !telefono || !descripcion) {
      return NextResponse.json({ error: 'Faltan campos obligatorios.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'RuralPass Web <onboarding@resend.dev>',
      to: 'ruralpass.spa@gmail.com',
      subject: `Nuevo requerimiento de soporte — ${nombre}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a3a6b;">
          <div style="background: #1a3a6b; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nuevo Requerimiento de Soporte Técnico</h1>
            <p style="color: #90b8e8; margin: 4px 0 0; font-size: 13px;">Recibido desde ruralpass.cl</p>
          </div>
          <div style="background: #f6faf7; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e4eef5; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e4eef5; font-weight: bold; width: 40%; color: #3d4d42; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Nombre</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e4eef5; font-size: 15px;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e4eef5; font-weight: bold; color: #3d4d42; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Teléfono</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e4eef5; font-size: 15px;">${telefono}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e4eef5; font-weight: bold; color: #3d4d42; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Ubicación</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e4eef5; font-size: 15px;">${ubicacion || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e4eef5; font-weight: bold; color: #3d4d42; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Tipo de Sistema</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e4eef5; font-size: 15px;">${tipoSistema || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #3d4d42; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top; padding-top: 16px;">Descripción</td>
                <td style="padding: 10px 0; font-size: 15px; padding-top: 16px; line-height: 1.6;">${descripcion}</td>
              </tr>
            </table>
            <div style="margin-top: 32px; padding: 16px; background: #e8a020; border-radius: 8px; text-align: center;">
              <a href="https://wa.me/56956277070" style="color: white; font-weight: bold; text-decoration: none; font-size: 15px;">Responder por WhatsApp →</a>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Resend error:', err);
    return NextResponse.json({ error: 'Error al enviar el mensaje.' }, { status: 500 });
  }
}
