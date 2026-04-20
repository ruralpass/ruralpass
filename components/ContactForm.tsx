'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
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
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ nombre: '', telefono: '', ubicacion: '', tipoSistema: 'Solar', descripcion: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all w-full";

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </div>
        <h3 className="text-xl font-extrabold text-primary">¡Mensaje enviado con éxito!</h3>
        <p className="text-on-surface-variant text-sm max-w-xs">Un especialista te contactará en menos de 2 horas. También puedes escribirnos directamente por WhatsApp.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-bold text-primary underline underline-offset-4"
        >
          Enviar otro mensaje
        </button>
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

      {status === 'error' && (
        <div className="md:col-span-2 flex items-center gap-3 bg-error/10 border border-error/20 rounded-lg px-4 py-3">
          <span className="material-symbols-outlined text-error text-xl">error</span>
          <p className="text-sm text-error font-medium">Hubo un error al enviar. Intenta de nuevo o escríbenos por WhatsApp.</p>
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
              Enviando...
            </>
          ) : (
            <>
              Enviar Requerimiento
              <span className="material-symbols-outlined">send</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
