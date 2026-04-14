'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKyPs0-lfNCrWXMGsLVRD4qUXSSEK8S2CxsuOB0Emc9EFHu8iGzbDEEElnvny3QLeSm0D1CPxgoxWW7qrbCzPceocWctH6TDv3OOvuqi9QuYglDB8vn9ICUYx0Jxa3QllEW0OasooX5vzMJZ3_Uor2ywO2kJs_XNDPOGkAbpqNavjQaHz55n2H1iiAh8H4MTf3xN4WhYqlKL0mWX9-G5rm7Qu5TcYEworAm5sY7df-z7Nuqf_GLrjP0msHbERU3tF8PhlQ2Z4yvXW0",
      tag: "Resiliencia Crítica",
      title: "Si tu sistema Off-Grid falla, no venimos mañana — <span class='text-secondary-container'>venimos hoy.</span>",
      description: "Garantizamos la continuidad operativa y resiliencia de tu hogar o empresa rural con ingeniería de respuesta rápida."
    },
    {
      image: "https://picsum.photos/seed/solarpanel2/1920/1080",
      tag: "Energía Ininterrumpida",
      title: "Independencia energética total para tu <span class='text-secondary-container'>proyecto rural.</span>",
      description: "Diseñamos e instalamos sistemas fotovoltaicos robustos que soportan las condiciones más extremas."
    },
    {
      image: "https://picsum.photos/seed/securitycamera/1920/1080",
      tag: "Seguridad Perimetral",
      title: "Vigilancia autónoma donde la red eléctrica <span class='text-secondary-container'>no llega.</span>",
      description: "Sistemas de cámaras con alimentación solar y conectividad satelital para proteger lo que más importa."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center pt-20 overflow-hidden bg-primary">
        {heroSlides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image 
              src={slide.image}
              alt="Hero background"
              fill
              className="object-cover opacity-40 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-white text-xs font-bold tracking-widest uppercase rounded-full">
              <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              {heroSlides[currentSlide].tag}
            </div>
            <h1 
              className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1]"
              dangerouslySetInnerHTML={{ __html: heroSlides[currentSlide].title }}
            />
            <p className="text-lg md:text-xl text-primary-fixed-dim max-w-xl leading-relaxed">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#" className="bg-secondary text-white px-8 py-4 rounded-md font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2 shadow-lg">
                <span className="material-symbols-outlined">call</span>
                WhatsApp Urgencias
              </Link>
              <Link href="#contacto" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/20 transition-all">
                Solicitar Cotización
              </Link>
            </div>
            
            {/* Slider Controls */}
            <div className="flex gap-2 pt-8">
              {heroSlides.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-secondary' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="bg-surface-container-highest/10 backdrop-blur-xl border border-white/10 p-8 rounded-xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold tracking-widest text-secondary-container uppercase">Estado del Sistema</span>
                <span className="flex h-3 w-3 bg-tertiary-fixed rounded-full animate-pulse"></span>
              </div>
              <div className="space-y-4">
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[94%] bg-tertiary-fixed"></div>
                </div>
                <div className="flex justify-between text-white text-sm">
                  <span className="font-medium">Continuidad Operativa</span>
                  <span className="font-black">94.8%</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-primary/40 p-4 rounded-lg">
                    <span className="text-primary-fixed-dim text-[10px] block mb-1">RESPUESTA PROMEDIO</span>
                    <span className="text-xl font-bold text-white">4.2 Hrs</span>
                  </div>
                  <div className="bg-primary/40 p-4 rounded-lg">
                    <span className="text-primary-fixed-dim text-[10px] block mb-1">TECNICOS ACTIVOS</span>
                    <span className="text-xl font-bold text-white">12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-surface-container-low border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap justify-between items-center gap-8">
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-primary/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <div>
              <p className="text-sm font-bold text-primary">Certificación SEC</p>
              <p className="text-xs text-on-surface-variant">Estándares eléctricos nacionales</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-primary/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
              <span className="material-symbols-outlined text-3xl">timer</span>
            </div>
            <div>
              <p className="text-sm font-bold text-primary">Respuesta &lt; 24h</p>
              <p className="text-xs text-on-surface-variant">Prioridad en zonas remotas</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-primary/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
              <span className="material-symbols-outlined text-3xl">shield_with_heart</span>
            </div>
            <div>
              <p className="text-sm font-bold text-primary">Diagnóstico Transparente</p>
              <p className="text-xs text-on-surface-variant">Sin cobros ocultos de traslado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-surface" id="servicios">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-label-md font-bold tracking-widest text-secondary uppercase mb-2">Nuestras Soluciones</h2>
            <h3 className="text-4xl font-extrabold text-primary tracking-tight">Ingeniería para el Terreno</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Large Card: Solar */}
            <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm group">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmgWq-2G-__jtiIlNKT6JUmpIZlenABJlOSEKNGf9j0CR_A1n_6RPel3-LekkrcMmCvMTGqBIqD9wfqxTF3o6BDCGu8g4awLVLChCaW5MBv5d0FT8qDdcZgtnbwfL0_fmLsW-3IyoVDatLYI6AD3jVQcdRwAVYmEjzJaCxa3JPRhsm8ZDk9IUGmaDeAu8TE-iRw4MYRB21dc8aHm8tKD1Rl3y-a6TYQmrPJRxLYLtkf0zzRk3LBtOT372h4Hb8K033oc5fCX0YObqQ"
                    alt="Technical close-up of a battery bank and hybrid inverter installation"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-black tracking-widest uppercase rounded mb-4 w-max">Servicio Estrella</span>
                  <h4 className="text-3xl font-bold text-primary mb-4">Paneles Solares Off-Grid</h4>
                  <p className="text-on-surface-variant mb-6 leading-relaxed">Sistemas aislados diseñados para la máxima autonomía. Cubrimos desde la instalación hasta el mantenimiento preventivo y reparación crítica.</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <span className="material-symbols-outlined text-tertiary">check_circle</span>
                      Monitoreo Remoto Satelital
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <span className="material-symbols-outlined text-tertiary">check_circle</span>
                      Reparación de Inversores Híbridos
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <span className="material-symbols-outlined text-tertiary">check_circle</span>
                      Optimización de Banco de Baterías
                    </li>
                  </ul>
                  <Link href="#" className="text-primary font-bold inline-flex items-center gap-2 group/link w-max">
                    Ver Especificaciones Técnicas
                    <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Secondary Card: Security */}
            <div className="bg-primary text-white p-10 rounded-xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl">nest_cam_outdoor</span>
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Cámaras de Seguridad Solar</h4>
                <p className="text-primary-fixed-dim leading-relaxed mb-6">Vigilancia 24/7 sin cables. Sistemas de cámaras autónomas con enlace LTE/Satelital para zonas sin red eléctrica.</p>
              </div>
              <div className="space-y-4 relative z-10">
                <div className="bg-white/10 p-4 rounded-lg border border-white/5">
                  <span className="text-[10px] font-bold tracking-widest uppercase block mb-1">Ideal para:</span>
                  <p className="text-sm">Campos, Galpones y Parcelas de agrado.</p>
                </div>
                <Link href="#" className="w-full bg-secondary text-white py-3 rounded text-center font-bold text-sm block hover:opacity-90 transition-all">Consultar Disponibilidad</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-extrabold text-primary">¿Por qué falla un sistema Off-Grid?</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mt-4">Nuestra experiencia en terreno nos permite identificar los 3 errores críticos que dejan a oscuras a las propiedades rurales.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface p-8 rounded-xl border-b-4 border-error/30 hover:border-error transition-all group">
            <span className="material-symbols-outlined text-4xl text-error mb-4 block">battery_alert</span>
            <h4 className="text-xl font-bold text-primary mb-2">Agotamiento de Baterías</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Cargas no dimensionadas o ciclos de descarga profunda sin protección que destruyen la vida útil de las celdas de Litio o Gel.</p>
          </div>
          <div className="bg-surface p-8 rounded-xl border-b-4 border-secondary/30 hover:border-secondary transition-all group">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4 block">settings_input_component</span>
            <h4 className="text-xl font-bold text-primary mb-2">Fallo del Inversor</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Temperaturas extremas o humedad que afectan la electrónica de potencia, causando paros inesperados del sistema.</p>
          </div>
          <div className="bg-surface p-8 rounded-xl border-b-4 border-on-surface-variant/30 hover:border-on-surface-variant transition-all group">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4 block">cable</span>
            <h4 className="text-xl font-bold text-primary mb-2">Cableado Deficiente</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Secciones de cable incorrectas provocan caídas de tensión y calor excesivo, reduciendo la eficiencia hasta en un 40%.</p>
          </div>
        </div>
      </section>

      {/* Coverage & Warranty */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square bg-surface-container-high rounded-full absolute -top-10 -left-10 w-64 h-64 blur-3xl opacity-50"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white h-[400px]">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ5SuRAlJRpptqNjNeP1_K9kZQrL-GqUzHpmPGMgkJtZPpJyY_Z1GhdLWgvkJBDOCSq-6zgADZ-Nf-NSfO9xFoGydpHp0W8oz8qQfiAwOzPzG_S2bp0wfkYrp0TBXeebrhutlV3ha3SjgEjRULhCrgx_08llKQqlJSVl0Edt3h9Vqxo11a0pXO0UJ4Zb6Q629veoi-YPiI2dkYm9EbsuE5YYcKBhzzuCccBKUMZSIg-0KVPfo0quQ7QIWb6z6EgIQ8Ullzr_jSHsFO"
                alt="Stylized map focus of rural central Chile regions"
                fill
                className="object-cover grayscale brightness-90 contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary/90 text-white p-6 rounded-xl backdrop-blur-md border border-white/20 text-center">
                  <span className="material-symbols-outlined text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>pin_drop</span>
                  <p className="font-black text-xl tracking-tight uppercase">Cobertura Nacional</p>
                  <p className="text-xs text-primary-fixed">Especialistas en Zona Central y Sur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl font-extrabold text-primary mb-6">Garantía de Diagnóstico Transparente</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Entendemos los desafíos de la ruralidad. Por eso, nuestro diagnóstico incluye un reporte técnico detallado y un presupuesto cerrado antes de cualquier intervención.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-tertiary/5 rounded-xl border border-tertiary/10">
                <span className="material-symbols-outlined text-3xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                <div>
                  <p className="font-bold text-primary">Badge de Calidad RuralPass</p>
                  <p className="text-sm text-on-surface-variant">Cada reparación cuenta con 1 año de garantía extendida en mano de obra.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-secondary/5 rounded-xl border border-secondary/10">
                <span className="material-symbols-outlined text-3xl text-secondary">fact_check</span>
                <div>
                  <p className="font-bold text-primary">Protocolos SEC</p>
                  <p className="text-sm text-on-surface-variant">Nuestros técnicos ejecutan pruebas de aislamiento y tierra certificadas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-surface-container-low" id="testimonios">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-label-md font-bold tracking-widest text-secondary uppercase mb-2">Opiniones Reales</h2>
            <h3 className="text-4xl font-extrabold text-primary tracking-tight">Confianza en el Terreno</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10 relative">
              <div className="flex text-secondary-container mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface-variant italic mb-8 leading-relaxed">&quot;Lo que más valoro es la <strong>respuesta inmediata</strong>. En el campo, quedarte sin luz es un problema crítico, y RuralPass llegó el mismo día. Me devolvieron la tranquilidad.&quot;</p>
              <div className="flex items-center gap-4 border-t border-outline-variant/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary overflow-hidden">
                  <span className="material-symbols-outlined text-3xl">account_circle</span>
                </div>
                <div>
                  <p className="font-bold text-primary text-sm leading-none">Carlos Henríquez</p>
                  <p className="text-xs text-secondary mt-1 uppercase font-bold tracking-wider">Curicó</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10 relative">
              <div className="flex text-secondary-container mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface-variant italic mb-8 leading-relaxed">&quot;Excelente servicio técnico para mi parcela. El diagnóstico fue transparente y profesional. Ahora vivo con total <strong>paz mental</strong> sabiendo que el sistema off-grid es resiliente.&quot;</p>
              <div className="flex items-center gap-4 border-t border-outline-variant/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary overflow-hidden">
                  <span className="material-symbols-outlined text-3xl">account_circle</span>
                </div>
                <div>
                  <p className="font-bold text-primary text-sm leading-none">Marta Villalobos</p>
                  <p className="text-xs text-secondary mt-1 uppercase font-bold tracking-wider">Rancagua</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10 relative">
              <div className="flex text-secondary-container mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface-variant italic mb-8 leading-relaxed">&quot;Buscaba una solución para las cámaras solares en mi fundo y la respuesta fue <strong>increíblemente rápida</strong>. Ingeniería de verdad aplicada al terreno rural. Muy recomendados.&quot;</p>
              <div className="flex items-center gap-4 border-t border-outline-variant/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary overflow-hidden">
                  <span className="material-symbols-outlined text-3xl">account_circle</span>
                </div>
                <div>
                  <p className="font-bold text-primary text-sm leading-none">Pedro Alarcón</p>
                  <p className="text-xs text-secondary mt-1 uppercase font-bold tracking-wider">Talca</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-primary text-white" id="casos">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="text-left">
              <h2 className="text-label-md font-bold tracking-widest text-secondary-container uppercase mb-2">Realidad en Terreno</h2>
              <h3 className="text-4xl font-extrabold tracking-tight">Casos de Éxito</h3>
            </div>
            <div className="hidden md:flex gap-2">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            {/* Story 1 */}
            <div className="min-w-[85vw] md:min-w-0 snap-center bg-white/5 rounded-xl overflow-hidden border border-white/10 group">
              <div className="h-64 relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2XBvY9ZSSMHvG1jvlES7iQ9arFgO0snCdgzJSDkRZr42aY1OJtUxa0aOA7lBTNshk8KhTv8wtCtPq3j2tCfwoHPYgjwmcR44EHJxLkVClwJjBryxOzDW4sFs5YWTrCGwRDrdIwf08ESC7eM_aAy0W62Du9FH0jBJYNU0VXoR0_6LtPQZ3ZR3c1v-CPWiIvPrDoOwgs7cug6k_PkB4blkR6nuZsstcz3hokPbnl391T9Ga3BUb-d6UNioJ8WmxP91AHNZSz-MWYWx6"
                  alt="Modern wooden house in a rural Chilean valley with solar panels"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-primary text-[10px] font-bold rounded">Curicó, 2024</span>
                  <span className="px-3 py-1 bg-secondary text-[10px] font-bold rounded">Residencial</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-3">Recuperación de Banco Litio</h4>
                <p className="text-sm text-primary-fixed-dim leading-relaxed mb-6">Reconfiguración total de sistema off-grid que presentaba cortes diarios. Se optimizó el inversor y cableado principal.</p>
                <div className="flex items-center gap-4 text-xs font-bold text-secondary-container">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">bolt</span> +15% Eficiencia</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">schedule</span> 4h Trabajo</span>
                </div>
              </div>
            </div>
            {/* Story 2 */}
            <div className="min-w-[85vw] md:min-w-0 snap-center bg-white/5 rounded-xl overflow-hidden border border-white/10 group">
              <div className="h-64 relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2SqU6LEGNv8sg6-deIfIjHElId19amHVkvkkv_j5jUGRG59AbABT2oMRD1NEQgNQpsKcAXH5NxleX5aY-mE_OENdM8LTuveMM9I_637b0vf7suphdOQxHDPuxyLVyORf15piyo6YzkVo15J6QNUw4KG09sZS8lmG0Uli7DhqNURvLqVIV0VzWplLXN6hQ9PRUiYHApJBiksJyMtrEUeP9uZJMPDlmGCaH8iuWlczq67jNUPMtbhPP6RRuMxOZdz7hQjDKk_W9Mo_p"
                  alt="Security camera tower with small solar panel"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-primary text-[10px] font-bold rounded">Talca, 2023</span>
                  <span className="px-3 py-1 bg-tertiary text-[10px] font-bold rounded">Agrícola</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-3">Seguridad Perimetral Autónoma</h4>
                <p className="text-sm text-primary-fixed-dim leading-relaxed mb-6">Instalación de 8 cámaras PTZ solares en fundo de 50 hectáreas con enlace centralizado vía Starlink.</p>
                <div className="flex items-center gap-4 text-xs font-bold text-secondary-container">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">visibility</span> 100% Cobertura</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">cloud</span> Satelital</span>
                </div>
              </div>
            </div>
            {/* Story 3 */}
            <div className="min-w-[85vw] md:min-w-0 snap-center bg-white/5 rounded-xl overflow-hidden border border-white/10 group">
              <div className="h-64 relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlDZfz_RMpbFLzatfRaRxPjPV_LyXi1ck-k0zvteOkoxXE3vFqL4wnggXLmBxp0m5GPD_KNdKLCUsWaRD9c-WYcc4v_KWKZTMlMdsOV2iJ5O46coHSVbWknad0s1dveZHMp_AaQW5WeJtOKVk-rSmKbmg3mdzz5fC36pcR_FCLIp3mq0UU2rwf1MNVfYybjX96yQt5CialLrTGac2rp9pCI-xKirWRbpush6EagoEJiB_FKlkPQbhssqMy4jqDQbNve2j2rqQWeA_k"
                  alt="Industrial solar inverter station being inspected"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-primary text-[10px] font-bold rounded">Linares, 2024</span>
                  <span className="px-3 py-1 bg-secondary text-[10px] font-bold rounded">Comercial</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-3">Mantención Industrial</h4>
                <p className="text-sm text-primary-fixed-dim leading-relaxed mb-6">Limpieza técnica y reapriete de conexiones en planta fotovoltaica de 100kW para frigorífico rural.</p>
                <div className="flex items-center gap-4 text-xs font-bold text-secondary-container">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">trending_up</span> Producción Peak</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">engineering</span> Certificado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Técnicos Certificados</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">No enviamos aprendices. Todos nuestros especialistas cuentan con certificaciones vigentes y años de experiencia en sistemas aislados.</p>
          </div>
          <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-8 snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            <div className="min-w-[70vw] md:min-w-0 snap-center text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-primary rounded-full rotate-3 group-hover:rotate-6 transition-transform"></div>
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCqs3R34BnyG6ig5qVnXenmqy37fYyjPrqn9GjYuTFe-4SweBhA3BVWU6f8m_XbWxPWmdYwPDvWNBBH5rguIJ0WMbB75nW7RJGIMnmIivQ2orajKcp5aXmjWNzq5JHHKMNEIPt9yTFB0HIcvfutLzwdVzbwVCVoJvWBIGJO0dkJUDkpxEY_NdOy6OMhGDPNBMrubw715rHe-nAecaqf5pwVhD8_gKO4uLMAXTSZotoFRi_SckqxUCrNl9hhcfMSq8AZzXrdseXizTK"
                  alt="Portrait of a professional technician"
                  fill
                  className="object-cover rounded-full border-4 border-white shadow-xl grayscale hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h5 className="text-xl font-bold text-primary">Rodrigo M.</h5>
              <p className="text-sm text-secondary font-bold uppercase tracking-widest mt-1">Ing. Jefe de Terreno</p>
            </div>
            <div className="min-w-[70vw] md:min-w-0 snap-center text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-primary rounded-full -rotate-3 group-hover:-rotate-6 transition-transform"></div>
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFaGNssB-Zw-E2LiqKU-HFCziywPNZRPf4evbX90p1NzcR7mwn5i35HCoN31_xP-9ivsqkfwoNNkaQg9ce_KBpsjZkFs4uzUDZgVyXv8mGviyRT0IhKp9pjw38p-vdzpZBXKcJHaCTVHJwF-HEPHHGTUDqqBOPky5gLGoql45Z1o3cWa1-73OI3WDf58L_6I3aVj7OdONlBsjgCh0Ejftk0IWCrEM0Vu74QV_uyMelkH3vcVfBhSQfwQQqNxSdQbG1bJxpPloT5G2P"
                  alt="Portrait of a professional technical specialist"
                  fill
                  className="object-cover rounded-full border-4 border-white shadow-xl grayscale hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h5 className="text-xl font-bold text-primary">Claudia S.</h5>
              <p className="text-sm text-secondary font-bold uppercase tracking-widest mt-1">Espec. Fotovoltaica</p>
            </div>
            <div className="min-w-[70vw] md:min-w-0 snap-center text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-primary rounded-full rotate-3 group-hover:rotate-6 transition-transform"></div>
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9FuIvQgNFvj9VfEjp3-foG9k-8Rg41mUi3DPbKfI8f1xsfc2LoQ6SYWNufXwD6Bcumn7HZ6gAs5n22VSOIWbCwfI70vxTZf5r2JFhtY6i2bvg7xS6seKCM1CqlZz4lKUmzAaciyYamkqKGUfwNKWUP3tfqx8ST-rDWb75UcoPb6-gYaEJyL6B4gPkG1dB0Rv2J9fVJbHVAJy27clD-IlyJvajUNDlUaSvAMiwFuAeW_TZFf3u9JFKDxYa16215D5QYbMVIoZaFPlN"
                  alt="Portrait of an experienced technical field engineer"
                  fill
                  className="object-cover rounded-full border-4 border-white shadow-xl grayscale hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h5 className="text-xl font-bold text-primary">Jorge L.</h5>
              <p className="text-sm text-secondary font-bold uppercase tracking-widest mt-1">Técnico SEC Clase A</p>
            </div>
            <div className="min-w-[70vw] md:min-w-0 snap-center text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-primary rounded-full -rotate-3 group-hover:-rotate-6 transition-transform"></div>
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQIf0KBGATnzhJ-_3sdQICA6GCekHhtMnaK8u_BGq62WTe54JmwvpVEaMHX9OCD_t9n5Vv6XS4CdVTLp7SARIfLmXVWZ48p3KS4TX_yPi5NXzW6fsvEIp9ZkIfNv_EqP7Gb80D4SmAjcfuXXcTO8V5UDXjbBZWXVDJgn0Cx7ICa7aedXuE3GUikadROuWkbPgGOef3lcQccv3AJz5vuiv5lbfYUgpJJoM1Eb99pwrp6stThttxMDQgKUxRYFj0yGWcRsNjrsmHFJF9"
                  alt="Portrait of a young male professional technician"
                  fill
                  className="object-cover rounded-full border-4 border-white shadow-xl grayscale hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h5 className="text-xl font-bold text-primary">Matías V.</h5>
              <p className="text-sm text-secondary font-bold uppercase tracking-widest mt-1">Espec. Baterías Litio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-surface" id="contacto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
              <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Solicita tu Cotización hoy</h2>
              <p className="text-primary-fixed-dim text-lg leading-relaxed mb-10">Completa el formulario y un técnico se pondrá en contacto contigo para realizar un pre-diagnóstico remoto sin costo.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 shrink-0 rounded-lg bg-white/10 flex items-center justify-center text-secondary-container">
                    <span className="material-symbols-outlined">location_on</span>
                  </span>
                  <p className="font-medium">Servicio disponible en Regiones O&apos;Higgins, Maule y Ñuble.</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 shrink-0 rounded-lg bg-white/10 flex items-center justify-center text-secondary-container">
                    <span className="material-symbols-outlined">support_agent</span>
                  </span>
                  <p className="font-medium">Soporte técnico directo vía WhatsApp 24/7 para emergencias.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white p-12 lg:p-20">
              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Nombre Completo</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded px-4 py-3 focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all" type="text"/>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Teléfono / WhatsApp</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded px-4 py-3 focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all" type="tel"/>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Tipo de Sistema</label>
                  <select className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded px-4 py-3 focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all">
                    <option>Solar Off-Grid Residencial</option>
                    <option>Solar Comercial / Agrícola</option>
                    <option>Cámaras de Seguridad Solar</option>
                    <option>Otro / Mantención General</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Marca Inversor (Si aplica)</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded px-4 py-3 focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all" placeholder="Ej: Victron, Growatt, Voltronic" type="text"/>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Ubicación (Ciudad/Comuna)</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded px-4 py-3 focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all" type="text"/>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Descripción del Problema</label>
                  <textarea className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded px-4 py-3 focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all" rows={4}></textarea>
                </div>
                <button className="w-full bg-secondary text-white font-bold py-4 rounded shadow-lg hover:opacity-90 transition-all active:scale-[0.98]" type="submit">Enviar Solicitud de Prioridad</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
