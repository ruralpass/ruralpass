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

function getIcon(tipoSistema: string): string {
  for (const key of Object.keys(SYSTEM_ICONS)) {
    if (tipoSistema.startsWith(key)) return SYSTEM_ICONS[key];
  }
  return '🔧';
}

function getColor(tipoSistema: string): string {
  for (const key of Object.keys(SYSTEM_COLORS)) {
    if (tipoSistema.startsWith(key)) return SYSTEM_COLORS[key];
  }
  return '#64748b';
}

function buildEmailText(
  nombre: string,
  telefono: string,
  email: string,
  ubicacion: string,
  tipoSistema: string,
  descripcion: string
): string {
  const icon = getIcon(tipoSistema);
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

${'='.repeat(50)}
Generado automáticamente desde ruralpass.cl
RuralPass SpA · Colo Colo 379 Of. 706, Concepción, Chile`;
}

function buildEmailHtml(
  nombre: string,
  telefono: string,
  email: string,
  ubicacion: string,
  tipoSistema: string,
  descripcion: string
): string {
  const icon = getIcon(tipoSistema);
  const badgeColor = getColor(tipoSistema);
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
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.10);">
        <tr>
          <td style="background:linear-gradient(135deg,#0f2d5e 0%,#1a4a8a 100%);padding:32px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td><img src="https://ruralpass.cl/images/logo-ruralpass.webp" alt="RuralPass" height="48" style="display:block;height:48px;width:auto;" /></td>
                <td align="right"><span style="display:inline-block;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);color:#fff;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:5px 14px;border-radius:999px;">Nueva Cotización</span></td>
              </tr>
            </table>
            <p style="color:#93c5fd;font-size:13px;margin:20px 0 0;">Nueva cotización recibida desde <strong style="color:#bfdbfe;">ruralpass.cl</strong></p>
          </td>
        </tr>
        <tr>
          <td style="background:#0f2d5e;padding:0 40px 24px;">
            <table cellpadding="0" cellspacing="0"><tr>
              <td style="background:${badgeColor};border-radius:999px;padding:6px 18px;">
                <span style="color:#fff;font-size:13px;font-weight:700;">${icon} ${tipoSistema}</span>
              </td>
            </tr></table>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:36px 40px;">
            <h1 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#0f2d5e;">Nueva Cotización</h1>
            <p style="margin:0 0 28px;font-size:13px;color:#64748b;">${now}</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;margin-bottom:24px;">
              <tr><td colspan="2" style="background:#f8fafc;padding:12px 20px;border-bottom:1px solid #e2e8f0;"><span style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Datos del cliente</span></td></tr>
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
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;margin-bottom:32px;">
              <tr><td style="background:#f8fafc;padding:12px 20px;border-bottom:1px solid #e2e8f0;"><span style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Descripción del problema</span></td></tr>
              <tr><td style="padding:20px;font-size:15px;color:#1e293b;line-height:1.7;">${descripcion}</td></tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:24px 40px;text-align:center;">
            <p style="margin:0 0 6px;font-size:12px;color:#94a3b8;">Generado automáticamente desde <a href="https://ruralpass.cl" style="color:#1a4a8a;text-decoration:none;font-weight:600;">ruralpass.cl</a></p>
            <p style="margin:0;font-size:12px;color:#cbd5e1;">RuralPass SpA · Colo Colo 379 Of. 706, Concepción, Chile</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function onRequestPost(context: any) {
  try {
    const body = await context.request.json() as {
      nombre?: string;
      telefono?: string;
      email?: string;
      ubicacion?: string;
      tipoSistema?: string;
      descripcion?: string;
    };

    const { nombre, telefono, email, ubicacion, tipoSistema, descripcion } = body;

    if (!nombre || !telefono || !descripcion) {
      return new Response(JSON.stringify({ error: 'Faltan campos obligatorios.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resendKey = context.env.RESEND_API_KEY;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'RuralPass <contacto@ruralpass.cl>',
        to: 'ruralpass.spa@gmail.com',
        subject: `${getIcon(tipoSistema ?? '')} Nueva Cotización — ${nombre} (${tipoSistema})`,
        html: buildEmailHtml(nombre, telefono, email ?? '', ubicacion ?? '', tipoSistema ?? 'Otro', descripcion),
        text: buildEmailText(nombre, telefono, email ?? '', ubicacion ?? '', tipoSistema ?? 'Otro', descripcion),
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('[contact] Resend error:', err);
      return new Response(JSON.stringify({ error: 'Error al enviar el mensaje.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[contact] Error:', err);
    return new Response(JSON.stringify({ error: 'Error al procesar la solicitud.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
