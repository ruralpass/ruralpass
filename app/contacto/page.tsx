import Image from 'next/image';
import Link from 'next/link';

export default function Contacto() {
  return (
    <div className="pt-24 lg:pt-28 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="relative overflow-hidden rounded-xl bg-primary-container p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
          <div className="relative z-10 w-full md:w-3/5">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary-container/20 text-secondary-fixed font-bold text-xs tracking-widest uppercase mb-6">Canales Directos</span>
            <h1 className="text-white text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">Contacto RuralPass</h1>
            <p className="text-on-primary-container text-lg md:text-xl max-w-xl leading-relaxed">Soporte técnico experto y cercanía garantizada. Estamos en el terreno cuando la tecnología no puede esperar.</p>
          </div>
          <div className="w-full md:w-2/5 flex flex-col gap-4 relative z-10">
            <Link href="https://wa.me/yourwhatsapp" className="group relative flex items-center justify-between bg-secondary-container text-on-secondary-container p-6 rounded-xl hover:brightness-110 transition-all shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>emergency_home</span>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">Atención 24/7</p>
                  <h3 className="text-2xl font-black">WhatsApp Urgencias</h3>
                </div>
              </div>
              <span className="material-symbols-outlined text-3xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </Link>
            <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>
              <p className="text-white text-sm font-medium">Técnicos activos en Maule y O&apos;Higgins</p>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary opacity-20 blur-[120px] rounded-full"></div>
        </div>
      </section>

      {/* Main Content: Form & Info Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form (Bento Style) */}
          <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 rounded-xl border-l-4 border-secondary">
            <div className="mb-10">
              <h2 className="text-primary text-3xl font-extrabold tracking-tight mb-2">Solicitar Soporte Técnico</h2>
              <p className="text-on-surface-variant">Complete el formulario y un especialista lo contactará en menos de 2 horas.</p>
            </div>
            <form action="#" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary/60">Nombre</label>
                <input className="bg-surface-container-lowest border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all" placeholder="Ej: Juan Pérez" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary/60">Teléfono</label>
                <input className="bg-surface-container-lowest border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all" placeholder="+56 9 1234 5678" type="tel" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary/60">Ubicación (Comuna)</label>
                <input className="bg-surface-container-lowest border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all" placeholder="Ej: San Clemente" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary/60">Tipo de Sistema</label>
                <select className="bg-surface-container-lowest border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all">
                  <option>Solar</option>
                  <option>Cámaras</option>
                  <option>Ambos</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary/60">Descripción del problema</label>
                <textarea className="bg-surface-container-lowest border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all" placeholder="Describa brevemente lo que ocurre con su sistema..." rows={4}></textarea>
              </div>
              <div className="md:col-span-2 mt-4">
                <button className="w-full bg-primary text-white font-black py-4 px-8 rounded-lg uppercase tracking-widest hover:brightness-125 transition-all flex items-center justify-center gap-3" type="submit">
                  Enviar Requerimiento
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </form>
          </div>

          {/* Info Cards Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Map / Coverage Visual */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-surface-container">
              <div className="h-64 bg-slate-200 relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvie0gSGNJ7zy2hTu-2CpoSRQWUeMwAtXJdAPmZKMiH4YqX_-68Gf39TqxiMyl5SYndFTLOJct2Far0FhxjoQo3OoENmcMLcNL4rCk4woXTBB792BTBYDQG4efs1-r-eaWemlMgO2Uj5ASfp7PD8i5ZQDgndYEicEC7F-WmxVPQpFJtb7rLjpaEew0qo8CpFR-AMny7_66DKjlJFp6oc96aIl_6kozL7dzJ5-rhFI6s5Rhq-yG3N2KqQjhA4wHdbnq83n2sbrI-QCy"
                  alt="Map of central Chile showing rural coverage areas"
                  fill
                  className="object-cover grayscale opacity-40"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold">Zonas de Cobertura</h3>
                    <p className="text-on-primary-container text-sm">Respuesta inmediata en terreno.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span> O&apos;Higgins
                </div>
                <div className="flex items-center gap-2 text-primary font-bold">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span> Maule
                </div>
                <div className="flex items-center gap-2 text-primary font-bold">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span> Ñuble
                </div>
                <div className="flex items-center gap-2 text-primary font-bold">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span> Biobío
                </div>
              </div>
            </div>

            {/* Direct Details Card */}
            <div className="bg-surface-container-highest p-8 rounded-xl flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary p-2 bg-white rounded-lg shadow-sm">mail</span>
                <div>
                  <h4 className="text-xs font-bold uppercase text-primary/60 tracking-widest">Email Corporativo</h4>
                  <p className="text-primary font-bold text-lg">soporte@ruralpass.cl</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary p-2 bg-white rounded-lg shadow-sm">apartment</span>
                <div>
                  <h4 className="text-xs font-bold uppercase text-primary/60 tracking-widest">Oficina Central</h4>
                  <p className="text-primary font-bold text-lg">Av. San Miguel 2400, Talca</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary p-2 bg-white rounded-lg shadow-sm">schedule</span>
                <div>
                  <h4 className="text-xs font-bold uppercase text-primary/60 tracking-widest">Horario de Oficina</h4>
                  <p className="text-primary font-bold text-lg">Lun - Vie: 09:00 - 18:30</p>
                  <p className="text-secondary text-sm font-bold mt-1">Urgencias: 24 Horas / 7 Días</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="max-w-7xl mx-auto px-6 mt-24 py-16 bg-primary rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5hVvs7FQfiqgswxmET1EXga5wv8B7v6fXqPlWaNIiZV-35Z5gSgjT0Qk880-9xOnK0XW-KmaQsEg-xSZ-iaYObRfZ4rhkGZKjXWh76AAZvww0D0AOkQUwVHjFDAgDGfexBl3C6RwN84MJzFI0m1rsikGxIBDMmLbZh1h8xq_Eo3F1gp7kePxCEUJSSglDvmg61NmkeBi53RwUDMNeOo3rLon_5foDwBL8AJnwoZXZTAMIn0pYm7KTWf2XS4UHd3J7WmVqGCQChWpc"
            alt="close up of solar panel surface"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 px-12">
          <div className="text-center md:text-left">
            <h3 className="text-white text-3xl font-black mb-2">Ingeniería Resiliente</h3>
            <p className="text-on-primary-container max-w-sm">No solo instalamos equipos, diseñamos autonomía para el mundo rural.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-secondary-container text-5xl mb-2">verified_user</span>
              <span className="text-white font-bold uppercase tracking-widest text-xs">Garantía Extendida</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-secondary-container text-5xl mb-2">engineering</span>
              <span className="text-white font-bold uppercase tracking-widest text-xs">Técnicos Certificados</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-secondary-container text-5xl mb-2">local_shipping</span>
              <span className="text-white font-bold uppercase tracking-widest text-xs">Despacho en 24h</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
