'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error' | 'network_error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    ubicacion: '',
    tipoSistema: 'Solar',
    descripcion: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error || 'No se pudo procesar el mensaje.');
        setStatus('error');
        return;
      }
      setStatus('success');
      setForm({ nombre: '', telefono: '', email: '', ubicacion: '', tipoSistema: 'Solar', descripcion: '' });
    } catch {
      setStatus('network_error');
    }
  };

  const inputClass = "bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all w-full";

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-14 text-center animate-in fade-in duration-500">
        <div className="relative flex items-center justify-center w-20 h-20">
          <div className="absolute inset-0 rounded-full bg-green-500/10 animate-ping" style={{ animationDuration: '1.8s' }} />
          <div className="w-20 h-20 rounded-full bg-green-500/15 flex items-center justify-center">
            <span className="material-symbols-outlined text-5xl text-green-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
        </div>
        <div>
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-700 text-xs font-bold uppercase tracking-widest">Mensaje entregado</span>
          </div>
          <h3 className="text-2xl font-extrabold text-primary mb-2">¡Requerimiento enviado con éxito!</h3>
          <p className="text-on-surface-variant text-sm max-w-sm mx-auto leading-relaxed">
            Tu solicitud fue recibida correctamente. Un especialista te contactará en <strong>menos de 2 horas</strong>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href="https://wa.me/56956277070"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 text-white font-bold px-5 py-3 rounded-lg text-sm hover:bg-green-700 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            Escribir por WhatsApp
          </a>
          <button
            onClick={() => setStatus('idle')}
            className="flex items-center gap-2 border border-outline-variant/30 text-on-surface-variant font-bold px-5 py-3 rounded-lg text-sm hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            Nuevo requerimiento
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="nombre" className="text-xs font-bold uppercase tracking-widest text-primary/60">Nombre *</label>
        <input
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Ej: Juan Pérez"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="telefono" className="text-xs font-bold uppercase tracking-widest text-primary/60">Teléfono *</label>
        <input
          id="telefono"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="+56 9 1234 5678"
          type="tel"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-primary/60">Correo Electrónico</label>
        <input
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="Ej: juan@correo.cl"
          type="email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="ubicacion" className="text-xs font-bold uppercase tracking-widest text-primary/60">Ubicación (Comuna)</label>
        <input
          id="ubicacion"
          name="ubicacion"
          value={form.ubicacion}
          onChange={handleChange}
          className={inputClass}
          placeholder="Ej: San Clemente"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="tipoSistema" className="text-xs font-bold uppercase tracking-widest text-primary/60">Tipo de Sistema</label>
        <select
          id="tipoSistema"
          name="tipoSistema"
          value={form.tipoSistema}
          onChange={handleChange}
          className={inputClass}
        >
          <option>Solar</option>
          <option>Seguridad</option>
          <option>Control de Acceso</option>
          <option>Cercos Eléctricos</option>
          <option>Telecomunicaciones</option>
          <option>Otro</option>
        </select>
      </div>
      <div className="md:col-span-2 flex flex-col gap-2">
        <label htmlFor="descripcion" className="text-xs font-bold uppercase tracking-widest text-primary/60">Descripción del problema *</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Describa brevemente lo que ocurre con su sistema..."
          rows={4}
        />
      </div>

      {(status === 'error' || status === 'network_error') && (
        <div className="md:col-span-2 flex items-start gap-4 bg-red-50 border border-red-200 rounded-xl px-5 py-4 animate-in fade-in duration-300">
          <div className="shrink-0 w-9 h-9 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
            <span className="material-symbols-outlined text-red-600 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              {status === 'network_error' ? 'wifi_off' : 'cancel'}
            </span>
          </div>
          <div>
            <p className="text-sm font-extrabold text-red-700 mb-0.5">
              {status === 'network_error' ? 'Sin conexión a Internet' : 'No se pudo enviar el mensaje'}
            </p>
            <p className="text-xs text-red-600/80 leading-relaxed">
              {status === 'network_error'
                ? 'Revisa tu conexión e intenta de nuevo. Si el problema persiste, contáctanos por WhatsApp.'
                : errorMsg || 'Ocurrió un error inesperado. Por favor intenta de nuevo o contáctanos por WhatsApp.'}
            </p>
          </div>
        </div>
      )}

      <div className="md:col-span-2 mt-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-primary text-white font-black py-4 px-8 rounded-lg uppercase tracking-widest hover:brightness-125 transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
              Enviando requerimiento...
            </>
          ) : (
            <>
              Enviar Requerimiento
              <span className="material-symbols-outlined">send</span>
            </>
          )}
        </button>
        {status === 'loading' && (
          <p className="text-center text-xs text-on-surface-variant mt-3 animate-pulse">
            Procesando y enviando tu solicitud...
          </p>
        )}
      </div>
    </form>
  );
}
