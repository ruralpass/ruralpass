import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_ICONS: Record<string, string> = {
  Solar: '☀️',
  Seguridad: '🔒',
  'Control de Acceso': '🚪',
  'Cercos Eléctricos': '⚡',
  Telecomunicaciones: '📡',
  Otro: '🔧',
};

const SYSTEM_COLORS: Record<string, string> = {
  Solar: '#f59e0b',
  Seguridad: '#6366f1',
  'Control de Acceso': '#0ea5e9',
  'Cercos Eléctricos': '#f97316',
  Telecomunicaciones: '#10b981',
  Otro: '#64748b',
};

function buildEmailText(nombre: string, telefono: string, email: string, ubicacion: string, tipoSistema: string, descripcion: string): string {
  const icon = SYSTEM_ICONS[tipoSistema] ?? '🔧';
  const now = new Date().toLocaleString('es-CL', {
    timeZone: 'America/Santiago',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return `NUEVA COTIZACIÓN — RURALPASS
${'='.repeat(50)}

${icon} Tipo de sistema: ${tipoSistema}
Fecha: ${now}

DATOS DEL CLIENTE
${'-'.repeat(50)}
Nombre:    ${nombre}
Teléfono:  ${telefono}
Correo:    ${email || 'No proporcionado'}
Ubicación: ${ubicacion || 'No especificada'}

DESCRIPCIÓN DEL PROBLEMA
${'-'.repeat(50)}
${descripcion}

CONTACTO RÁPIDO
${'-'.repeat(50)}
WhatsApp RuralPass: +56 9 5627 7070
Cliente: ${telefono}

${'='.repeat(50)}
Generado automáticamente desde ruralpass.cl
RuralPass SpA · Colo Colo 379 Of. 706, Concepción, Chile`;
}

function buildEmailHtml(nombre: string, telefono: string, email: string, ubicacion: string, tipoSistema: string, descripcion: string): string {
  const icon = SYSTEM_ICONS[tipoSistema] ?? '🔧';
  const badgeColor = SYSTEM_COLORS[tipoSistema] ?? '#64748b';
  const now = new Date().toLocaleString('es-CL', {
    timeZone: 'America/Santiago',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.10);">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f2d5e 0%,#1a4a8a 100%);padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <img
                      src="https://ruralpass.cl/images/logo-ruralpass.webp"
                      alt="RuralPass"
                      height="48"
                      style="display:block;height:48px;width:auto;"
                    />
                  </td>
                  <td align="right">
                    <span style="display:inline-block;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);color:#fff;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:5px 14px;border-radius:999px;">
                      Nueva Cotización
                    </span>
                  </td>
                </tr>
              </table>
              <p style="color:#93c5fd;font-size:13px;margin:20px 0 0;letter-spacing:0.03em;">
                Nueva cotización recibida desde <strong style="color:#bfdbfe;">ruralpass.cl</strong>
              </p>
            </td>
          </tr>

          <!-- BADGE TIPO DE SISTEMA -->
          <tr>
            <td style="background:#0f2d5e;padding:0 40px 24px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:${badgeColor};border-radius:999px;padding:6px 18px;">
                    <span style="color:#fff;font-size:13px;font-weight:700;">${icon} ${tipoSistema}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:#ffffff;padding:36px 40px;">

              <!-- TITLE -->
              <h1 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#0f2d5e;line-height:1.3;">
                Nueva Cotización
              </h1>
              <p style="margin:0 0 28px;font-size:13px;color:#64748b;">${now}</p>

              <!-- DATOS DEL CLIENTE -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;margin-bottom:24px;">
                <tr>
                  <td colspan="2" style="background:#f8fafc;padding:12px 20px;border-bottom:1px solid #e2e8f0;">
                    <span style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Datos del cliente</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;border-bottom:1px solid #f1f5f9;width:38%;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#94a3b8;">Nombre</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f1f5f9;font-size:15px;font-weight:700;color:#0f172a;">${nombre}</td>
                </tr>
                <tr style="background:#fafafa;">
                  <td style="padding:14px 20px;border-bottom:1px solid #f1f5f9;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#94a3b8;">Teléfono</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f1f5f9;font-size:15px;font-weight:700;color:#0f172a;">${telefono}</td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;border-bottom:1px solid #f1f5f9;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#94a3b8;">Correo</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f1f5f9;font-size:15px;color:#0f172a;">${email || '<span style="color:#cbd5e1;">No proporcionado</span>'}</td>
                </tr>
                <tr style="background:#fafafa;">
                  <td style="padding:14px 20px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#94a3b8;">Ubicación</td>
                  <td style="padding:14px 20px;font-size:15px;color:#0f172a;">${ubicacion || '<span style="color:#cbd5e1;">No especificada</span>'}</td>
                </tr>
              </table>

              <!-- DESCRIPCIÓN -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;margin-bottom:32px;">
                <tr>
                  <td style="background:#f8fafc;padding:12px 20px;border-bottom:1px solid #e2e8f0;">
                    <span style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Descripción del problema</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px;font-size:15px;color:#1e293b;line-height:1.7;">${descripcion}</td>
                </tr>
              </table>

              <!-- CTA BUTTONS -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:8px;" width="50%">
                    <div style="background:#25d366;color:#fff;font-size:14px;font-weight:700;text-align:center;padding:14px 20px;border-radius:10px;">💬 WhatsApp: +56 9 5627 7070</div>
                  </td>
                  <td style="padding-left:8px;" width="50%">
                    <div style="background:#0f2d5e;color:#fff;font-size:14px;font-weight:700;text-align:center;padding:14px 20px;border-radius:10px;">📞 Llamar: ${telefono}</div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-size:12px;color:#94a3b8;">
                Este mensaje fue generado automáticamente desde el formulario de contacto de
                <a href="https://ruralpass.cl" style="color:#1a4a8a;text-decoration:none;font-weight:600;">ruralpass.cl</a>
              </p>
              <p style="margin:0;font-size:12px;color:#cbd5e1;">RuralPass SpA · Colo Colo 379 Of. 706, Concepción, Chile</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { nombre, telefono, email, ubicacion, tipoSistema, descripcion } = await req.json();

    if (!nombre || !telefono || !descripcion) {
      return NextResponse.json({ error: 'Faltan campos obligatorios.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'RuralPass <contacto@ruralpass.cl>',
      to: 'ruralpass.spa@gmail.com',
      subject: `${SYSTEM_ICONS[tipoSistema] ?? '🔧'} Nueva Cotización — ${nombre} (${tipoSistema})`,
      html: buildEmailHtml(nombre, telefono, email ?? '', ubicacion ?? '', tipoSistema ?? 'Otro', descripcion),
      text: buildEmailText(nombre, telefono, email ?? '', ubicacion ?? '', tipoSistema ?? 'Otro', descripcion),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Resend error:', err);
    return NextResponse.json({ error: 'Error al enviar el mensaje.' }, { status: 500 });
  }
}
