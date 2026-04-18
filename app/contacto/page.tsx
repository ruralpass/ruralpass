import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function Contacto() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvie0gSGNJ7zy2hTu-2CpoSRQWUeMwAtXXJdAPmZKMiH4YqX_-68Gf39TqxiMyl5SYndFTLOJct2Far0FhxjoQo3OoENmcMLcNL4rCk4woXTBB792BTBYDQG4efs1-r-eaWemlMgO2Uj5ASfp7PD8i5ZQDgndYEicEC7F-WmxVPQpFJtb7rLjpaEew0qo8CpFR-AMny7_66DKjlJFp6oc96aIl_6kozL7dzJ5-rhFI6s5Rhq-yG3N2KqQjhA4wHdbnq83n2sbrI-QCy"
            alt="Técnico RuralPass en terreno"
            fill
            className="object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold tracking-widest uppercase rounded-sm mb-6">Canales Directos</div>
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-6">
                Hablemos de tu Proyecto
              </h1>
              <p className="text-lg text-surface-variant/90 max-w-xl leading-relaxed mb-4">
                Si necesitas mejorar tu sistema solar, conectividad o seguridad, estamos disponibles para orientarte con soluciones claras y adaptadas a tu realidad.
              </p>
              <p className="text-lg text-surface-variant/90 max-w-xl leading-relaxed mb-8">
                Trabajamos en terreno y también de forma remota para entregarte una evaluación técnica confiable desde el primer contacto.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-white font-bold">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Asesoría técnica real</span>
                </div>
                <div className="flex items-center gap-2 text-white font-bold">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Atención directa y sin intermediarios</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-container opacity-20 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex flex-col gap-4">
                <Link href="https://wa.me/56956277070" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between bg-secondary-container/20 border border-white/20 backdrop-blur-sm text-white p-6 rounded-xl hover:bg-secondary-container/30 transition-all shadow-lg">
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
                  <p className="text-white text-sm font-medium">Técnicos activos en el Biobío y alrededores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Form & Info Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form (Bento Style) */}
          <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 rounded-xl border-l-4 border-secondary">
            <div className="mb-10">
              <h2 className="text-primary text-3xl font-extrabold tracking-tight mb-2">Solicitar Soporte Técnico</h2>
              <p className="text-on-surface-variant">Complete el formulario y un especialista lo contactará en menos de 2 horas.</p>
            </div>
            <ContactForm />
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
                    <p className="text-on-primary-container text-sm">Desde la V Región hasta Chiloé.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span> Valparaíso
                </div>
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
                <div className="flex items-center gap-2 text-primary font-bold">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span> Los Lagos
                </div>
              </div>
            </div>

            {/* Direct Details Card */}
            <div className="bg-surface-container-highest p-8 rounded-xl flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary p-2 bg-white rounded-lg shadow-sm">mail</span>
                <div>
                  <h4 className="text-xs font-bold uppercase text-primary/60 tracking-widest">Email Corporativo</h4>
                  <p className="text-primary font-bold text-lg">ruralpass.spa@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary p-2 bg-white rounded-lg shadow-sm">apartment</span>
                <div>
                  <h4 className="text-xs font-bold uppercase text-primary/60 tracking-widest">Oficina Central</h4>
                  <p className="text-primary font-bold">Colo Colo 379, Oficina 706</p>
                  <p className="text-primary font-bold">Edificio Amanecer, Concepción</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary p-2 bg-white rounded-lg shadow-sm">warehouse</span>
                <div>
                  <h4 className="text-xs font-bold uppercase text-primary/60 tracking-widest">Bodega y Equipo Técnico</h4>
                  <p className="text-primary font-bold">Nuevo York Dos 824, Los Ángeles</p>
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
      <section className="max-w-7xl mx-auto px-6 mt-24 mb-24 py-16 bg-primary rounded-xl overflow-hidden relative">
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
