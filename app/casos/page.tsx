import Image from 'next/image';
import Link from 'next/link';
import ProjectsFilter from '@/components/ProjectsFilter';

export default function Casos() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold tracking-widest uppercase rounded-sm mb-6">Proyectos de Éxito</div>
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-6">
                Proyectos que Transforman la Vida Rural
              </h1>
              <p className="text-lg text-surface-variant/90 max-w-xl leading-relaxed mb-8">
                Desplegamos infraestructura resiliente para comunidades y hogares fuera de la red. Desde la Región Metropolitana hasta el sur profundo, aseguramos energía y seguridad donde otros no llegan.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white font-bold">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>+250 Instalaciones</span>
                </div>
                <div className="flex items-center gap-2 text-white font-bold">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Ingeniería Local</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-container opacity-20 rounded-full blur-3xl"></div>
              <div className="relative z-10 aspect-[4/3] rounded-xl shadow-2xl overflow-hidden">
                <Image 
                  src="/images/banner-pagina-casos.png"
                  alt="Instalación RuralPass"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 flex gap-4 items-center">
                <div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center text-tertiary-fixed">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div>
                  <div className="text-2xl font-black text-primary">1.2MW</div>
                  <div className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Potencia Total</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectsFilter />

      {/* Impact Statistics */}
      <section className="py-24 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-black text-secondary-fixed mb-2">1,200+</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-70">kW Instalados</div>
            </div>
            <div>
              <div className="text-5xl font-black text-secondary-fixed mb-2">450</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-70">Clientes Felices</div>
            </div>
            <div>
              <div className="text-5xl font-black text-secondary-fixed mb-2">12</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-70">Regiones Cubiertas</div>
            </div>
            <div>
              <div className="text-5xl font-black text-secondary-fixed mb-2">99%</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-70">Uptime Promedio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map (Visual) */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-black text-primary leading-tight mb-6">Presencia de Arica a Chiloé</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Nuestros equipos recorren Chile central y sur, adaptando cada solución a las condiciones climáticas específicas de cada zona. Desde la radiación extrema del norte hasta la humedad del sur profundo.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2"></span>
                  <div>
                    <span className="font-bold text-primary block">Zona Centro</span>
                    <span className="text-sm text-on-surface-variant">Foco en seguridad agrícola y bombeo solar.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2"></span>
                  <div>
                    <span className="font-bold text-primary block">Zona Sur</span>
                    <span className="text-sm text-on-surface-variant">Foco en calefacción eléctrica y respaldo crítico.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative bg-white p-4 rounded-2xl shadow-xl">
              <div className="aspect-[3/4] w-full bg-surface-container-highest rounded-xl overflow-hidden relative">
                <Image 
                  src="/images/presencia-arica-chiloe.png"
                  alt="Presencia RuralPass de Arica a Chiloé"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-primary-container rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-10 blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary-container opacity-20 blur-3xl -ml-32 -mb-32"></div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">Tu proyecto es el siguiente.</h2>
          <p className="text-on-primary-container text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Únete a los cientos de propietarios rurales que ya aseguraron su futuro energético y la tranquilidad de su hogar.
          </p>
          <Link href="#" className="inline-flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 active:scale-95 transition-all relative z-10">
            <span className="material-symbols-outlined">chat</span>
            Conversemos por WhatsApp
          </Link>
        </div>
      </section>
    </div>
  );
}
