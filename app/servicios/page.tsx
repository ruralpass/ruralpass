import Image from 'next/image';
import Link from 'next/link';

export default function Servicios() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero Section: Nuestras Soluciones de Resiliencia */}
      <section className="relative min-h-[716px] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/img-solar-banner-servicios.webp"
            alt="dramatic wide shot of a solar farm nestled in the rugged andean mountains under a clear blue sky with golden light"
            fill
            className="object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-0"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-white text-xs font-bold tracking-widest uppercase rounded-full mb-6">
              <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              SOLUCIONES INTEGRALES
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-tight mb-8">
              Soluciones Integrales para Entornos Exigentes
            </h1>
            <p className="text-lg md:text-xl text-primary-fixed-dim max-w-xl leading-relaxed mb-10">
              Energía, seguridad y conectividad diseñadas para garantizar continuidad y confianza.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary text-white px-8 py-4 rounded-md font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2 shadow-lg">
                Explorar Servicios <span className="material-symbols-outlined">arrow_downward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicio 1: Paneles Solares Off-Grid */}
      <section className="py-24 bg-surface" id="paneles-solares">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white h-[420px]">
              <Image
                src="/images/img-solar-offgrid.webp"
                alt="Instalación solar off-grid en vivienda rural"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-white text-xs font-bold tracking-widest uppercase rounded-full">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>solar_power</span>
                  Energía Solar
                </span>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-label-md font-bold tracking-widest text-secondary uppercase mb-2">Servicio 01</h2>
              <h3 className="text-4xl font-extrabold text-primary tracking-tight leading-tight">Paneles Solares Off-Grid</h3>
            </div>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Diseñamos, suministramos e instalamos sistemas solares off-grid adaptados a entornos rurales y zonas sin acceso a la red eléctrica, garantizando un suministro energético confiable, eficiente y continuo.
            </p>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Complementamos nuestros servicios con diagnóstico técnico, mantenimiento preventivo y correctivo, además de optimización de sistemas existentes, asegurando el máximo rendimiento y la vida útil de cada instalación.
            </p>
            <div className="pt-2">
              <p className="text-xs font-bold text-secondary tracking-widest uppercase mb-4">Servicios asociados</p>
              <div className="flex flex-wrap gap-3">
                {["Revisión y diagnóstico de inversores", "Mantenimiento de bancos de baterías", "Optimización de generación y rendimiento"].map((item) => (
                  <span key={item} className="flex items-center gap-2 px-4 py-2 bg-secondary/5 border border-secondary/20 rounded-full text-sm font-medium text-primary hover:bg-secondary/10 transition-colors">
                    <span className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicio 2: Sistemas de Seguridad */}
      <section className="py-24 bg-surface-container-low" id="seguridad">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-label-md font-bold tracking-widest text-secondary uppercase mb-2">Servicio 02</h2>
              <h3 className="text-4xl font-extrabold text-primary tracking-tight leading-tight">Sistemas de Seguridad</h3>
            </div>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Implementamos soluciones de seguridad electrónica mediante la instalación de sistemas de videovigilancia y alarmas, orientadas a la protección de hogares, parcelas e instalaciones comerciales.
            </p>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Nuestros servicios incluyen evaluación en terreno, configuración de equipos, mantenimiento y soporte técnico, asegurando un funcionamiento confiable y una respuesta eficiente ante eventos.
            </p>
            <div className="pt-2">
              <p className="text-xs font-bold text-secondary tracking-widest uppercase mb-4">Servicios asociados</p>
              <div className="flex flex-wrap gap-3">
                {["Instalación de cámaras de seguridad (CCTV)", "Sistemas de alarmas y sensores", "Mantenimiento y diagnóstico de sistemas"].map((item) => (
                  <span key={item} className="flex items-center gap-2 px-4 py-2 bg-secondary/5 border border-secondary/20 rounded-full text-sm font-medium text-primary hover:bg-secondary/10 transition-colors">
                    <span className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Visual */}
          <div className="relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white h-[420px]">
              <Image
                src="/images/img-camara-seguridad.webp"
                alt="Sistema de seguridad con cámara solar en campo"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-white text-xs font-bold tracking-widest uppercase rounded-full">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                  Vigilancia 24/7
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicio 3: Control de Acceso */}
      <section className="py-24 bg-surface" id="control-acceso">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white h-[420px]">
              <Image
                src="/images/img-mantencion-fotovoltaica.webp"
                alt="Sistema de control de acceso industrial"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-white text-xs font-bold tracking-widest uppercase rounded-full">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                  Acceso Controlado
                </span>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-label-md font-bold tracking-widest text-secondary uppercase mb-2">Servicio 03</h2>
              <h3 className="text-4xl font-extrabold text-primary tracking-tight leading-tight">Control de Acceso</h3>
            </div>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Desarrollamos e implementamos sistemas de control de acceso que permiten gestionar y restringir el ingreso a instalaciones de forma segura y eficiente.
            </p>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Ofrecemos soluciones adaptadas a cada necesidad, incluyendo instalación, configuración y mantenimiento, garantizando control, trazabilidad y protección de los espacios.
            </p>
            <div className="pt-2">
              <p className="text-xs font-bold text-secondary tracking-widest uppercase mb-4">Servicios asociados</p>
              <div className="flex flex-wrap gap-3">
                {["Control de acceso con tarjetas, claves o biometría", "Automatización de portones y accesos", "Soporte técnico y mantenimiento"].map((item) => (
                  <span key={item} className="flex items-center gap-2 px-4 py-2 bg-secondary/5 border border-secondary/20 rounded-full text-sm font-medium text-primary hover:bg-secondary/10 transition-colors">
                    <span className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicio 4: Telecomunicaciones */}
      <section className="py-24 bg-surface-container-low" id="telecomunicaciones">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-label-md font-bold tracking-widest text-secondary uppercase mb-2">Servicio 04</h2>
              <h3 className="text-4xl font-extrabold text-primary tracking-tight leading-tight">Telecomunicaciones</h3>
            </div>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Implementamos soluciones de telecomunicaciones orientadas a garantizar conectividad estable y eficiente en entornos residenciales, rurales y comerciales.
            </p>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Nuestros servicios abarcan instalación de redes, configuración de equipos y mantenimiento, asegurando una comunicación continua y de alto rendimiento.
            </p>
            <div className="pt-2">
              <p className="text-xs font-bold text-secondary tracking-widest uppercase mb-4">Servicios asociados</p>
              <div className="flex flex-wrap gap-3">
                {["Instalación de redes y cableado estructurado", "Configuración de equipos y enlaces", "Mantenimiento y optimización de red"].map((item) => (
                  <span key={item} className="flex items-center gap-2 px-4 py-2 bg-secondary/5 border border-secondary/20 rounded-full text-sm font-medium text-primary hover:bg-secondary/10 transition-colors">
                    <span className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Visual */}
          <div className="relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white h-[420px]">
              <Image
                src="/images/img-telecomunicaciones-rural.webp"
                alt="Infraestructura de telecomunicaciones en zona rural"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-white text-xs font-bold tracking-widest uppercase rounded-full">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>language</span>
                  Conectividad Total
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-primary rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
              <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Soluciones reales en conectividad y energía para entornos exigentes</h2>
              <p className="text-primary-fixed-dim text-lg leading-relaxed mb-10">Implementamos sistemas de energía solar, conectividad y seguridad adaptados a zonas rurales y condiciones complejas, asegurando operación continua y soluciones confiables en cada proyecto.</p>
              <p className="text-primary-fixed-dim text-lg leading-relaxed mb-10">Evaluamos cada caso de forma técnica para entregar soluciones eficientes, sostenibles y ajustadas a las necesidades reales de nuestros clientes.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://wa.me/56956277070" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-8 py-4 rounded-md font-bold text-lg hover:opacity-90 transition-all flex items-center gap-3 shadow-lg">
                  <span className="material-symbols-outlined">call</span>
                  WhatsApp Técnico
                </Link>
                <Link href="/contacto" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/20 transition-all">
                  Solicitar Evaluación
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[300px]">
              <Image 
                src="/images/banner-tarjeta-servicios.webp"
                alt="Técnico instalando soluciones de conectividad y energía en terreno"
                fill
                className="object-cover brightness-90 contrast-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-secondary/20"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
