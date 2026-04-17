import Image from 'next/image';
import Link from 'next/link';

export default function Casos() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/ruralengineering/1920/1080"
            alt="Proyectos de ingeniería rural"
            fill
            className="object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWnzSWmzYkQh87Pf7nr8TPRsKAmBwmDzoMkoupJusQYZyouPFGuhwlR11rage0knyk7M9u1v4uv1nVXj3ncHyzVRousEQFb3FLN6cMGH9KCSrt35puFDwYWxFyKAl3DQLoHTNxcX6S2Sh6VRSermpd5yvXbIF_H_oYcXkrO8cWynsa42Jpx62klLOSeo3EjGfXNO4w3Hl4LFVkp-JxekCVsrYoSdnnu-quMx11fMILTI5uxS-ky19LU65EDgZWhYXZ5DBZuSc0w5TZ"
                  alt="Instalación RuralPass"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
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

      {/* Project Filter */}
      <section className="bg-surface-container-low py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="text-sm font-bold text-primary-container tracking-tighter uppercase">Filtrar Proyectos</div>
            <div className="flex flex-wrap gap-2">
              <button className="px-5 py-2 bg-primary text-white rounded-full text-sm font-semibold transition-all">Todos</button>
              <button className="px-5 py-2 bg-white text-primary border border-outline-variant/20 rounded-full text-sm font-semibold hover:bg-surface-container transition-all">Paneles Solares</button>
              <button className="px-5 py-2 bg-white text-primary border border-outline-variant/20 rounded-full text-sm font-semibold hover:bg-surface-container transition-all">Cámaras de Seguridad</button>
              <button className="px-5 py-2 bg-white text-primary border border-outline-variant/20 rounded-full text-sm font-semibold hover:bg-surface-container transition-all">Mantención</button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden flex flex-col group transition-all hover:shadow-lg">
              <div className="h-64 overflow-hidden relative">
                <Image 
                  src="/images/colbun.png"
                  alt="Instalación paneles solares off-grid Colbún"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-tertiary text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded">Solar</div>
              </div>
              <div className="p-8 flex-grow">
                <div className="text-xs font-medium text-on-surface-variant mb-2">Región del Maule, 2024</div>
                <h3 className="text-xl font-bold text-primary mb-4">Independencia Energética en Colbún</h3>
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-1.5 bg-surface-container-low px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-[18px] text-secondary">offline_bolt</span>
                    <span className="text-xs font-bold text-primary">5kW</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-surface-container-low px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-[18px] text-secondary">battery_very_low</span>
                    <span className="text-xs font-bold text-primary">10kWh</span>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  El cliente sufría cortes frecuentes; instalamos un sistema híbrido de 5kW que garantiza autonomía total durante fallas de red.
                </p>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden flex flex-col group transition-all hover:shadow-lg">
              <div className="h-64 overflow-hidden relative">
                <Image 
                  src="/images/panguipulli.png"
                  alt="Sistema vigilancia perimetral Panguipulli"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded">Seguridad</div>
              </div>
              <div className="p-8 flex-grow">
                <div className="text-xs font-medium text-on-surface-variant mb-2">Región de los Ríos, 2023</div>
                <h3 className="text-xl font-bold text-primary mb-4">Vigilancia Perimetral en Panguipulli</h3>
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-1.5 bg-surface-container-low px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-[18px] text-secondary">videocam</span>
                    <span className="text-xs font-bold text-primary">8 Cámaras</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-surface-container-low px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-[18px] text-secondary">router</span>
                    <span className="text-xs font-bold text-primary">Starlink</span>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  Predio remoto sin conectividad. Implementamos enlace Starlink y cámaras 4K térmicas con alimentación solar independiente.
                </p>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden flex flex-col group transition-all hover:shadow-lg">
              <div className="h-64 overflow-hidden relative">
                <Image 
                  src="/images/fotovoltaica.png"
                  alt="Mantención optimización fotovoltaica Pirque"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded">Mantención</div>
              </div>
              <div className="p-8 flex-grow">
                <div className="text-xs font-medium text-on-surface-variant mb-2">Región Metropolitana, 2024</div>
                <h3 className="text-xl font-bold text-primary mb-4">Optimización Fotovoltaica en Pirque</h3>
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-1.5 bg-surface-container-low px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-[18px] text-secondary">trending_up</span>
                    <span className="text-xs font-bold text-primary">+25% Efi.</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-surface-container-low px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-[18px] text-secondary">history</span>
                    <span className="text-xs font-bold text-primary">Annual Plan</span>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  Sistema industrial con baja eficiencia por falta de limpieza y fallas en inversores. Recuperamos el 100% de la capacidad nominal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <div className="aspect-[3/4] w-full bg-surface-container-highest rounded-xl flex items-center justify-center overflow-hidden relative">
                {/* Placeholder for Map Visualization */}
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMO08Cnl5PVG9t3pqGoEC4li7ixPKJB_D0wtSZerrad--9dxE3GRD0t64MpMgKOkht9v-fOuy4XssEjZvUX1hAdVsFQZFlhFvwEqJ_f7PTJfAm-kcFPJy_Wh1sKu20xmzm0exI1nurpaDKuUUGf7GWVmwB3km6oKjayuSmTai1cY0MY2-rfsi8Xn_l0KsUStONWWN_zBwwIV9gk3yUYK2iFN6xpArqRFJcczJynBqCiPWXVzZ2mLSPVYtSOemA58Ff6HAMuen8akpt"
                  alt="Presencia RuralPass"
                  fill
                  className="object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-ping mb-2"></div>
                  <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">Sede Temuco</span>
                </div>
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
