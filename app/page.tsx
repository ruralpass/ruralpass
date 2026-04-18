'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ServicesSlider from '@/components/ServicesSlider';
import TeamStackingCards from '@/components/TeamStackingCards';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "/images/slide-1-ruralpass.png",
      tag: "Energía Solar",
      title: "Energía <span class='text-secondary-container'>Solar</span>",
      description: "Energía solar off grid eficiente y confiable para una verdadera independencia energética."
    },
    {
      image: "/images/slide-2-ruralpass.png",
      tag: "Seguridad",
      title: "Sistemas de <span class='text-secondary-container'>Seguridad</span>",
      description: "Sistemas de seguridad inteligentes que protegen tu entorno con tecnología y precisión."
    },
    {
      image: "/images/slide-3-ruralpass.png",
      tag: "Telecomunicaciones",
      title: "<span class='text-secondary-container'>Telecomunicaciones</span>",
      description: "Conectividad estable y de alto rendimiento para mantenerte siempre comunicado."
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
      <section className="relative min-h-[921px] flex items-center pt-24 lg:pt-28 overflow-hidden bg-primary">
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
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1]"
              dangerouslySetInnerHTML={{ __html: heroSlides[currentSlide].title }}
            />
            <p className="text-lg md:text-xl text-primary-fixed-dim max-w-xl leading-relaxed">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#" className="bg-secondary text-white px-8 py-4 rounded-md font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2 shadow-lg">
                <span className="material-symbols-outlined">call</span>
                WhatsApp
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
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-surface-container-low border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap justify-between items-center gap-8">
          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-primary/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <div>
              <p className="text-sm font-bold text-primary">Certificación SEC</p>
              <p className="text-xs text-on-surface-variant">Estándares eléctricos nacionales</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-primary/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">timer</span>
            </div>
            <div>
              <p className="text-sm font-bold text-primary">Respuesta &lt; 24h</p>
              <p className="text-xs text-on-surface-variant">Prioridad en zonas remotas</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-primary/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">shield_with_heart</span>
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
          <div className="mb-12">
            <h2 className="text-label-md font-bold tracking-widest text-secondary uppercase mb-2">Nuestras Soluciones</h2>
            <h3 className="text-4xl font-extrabold text-primary tracking-tight">Ingeniería para el Terreno</h3>
          </div>
          <ServicesSlider />
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
                Trabajamos con criterios técnicos y enfoque profesional, respaldando cada proyecto con garantías reales en instalación y equipos — porque tu tranquilidad no puede esperar.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-tertiary/5 rounded-xl border border-tertiary/10">
                <span className="material-symbols-outlined text-3xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                <div>
                  <p className="font-bold text-primary">Calidad RuralPass</p>
                  <p className="text-sm text-on-surface-variant">Respaldamos cada proyecto con 1 año de garantía en instalación y hasta 3 años de garantía en equipos solares, asegurando calidad, durabilidad y tranquilidad.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-secondary/5 rounded-xl border border-secondary/10">
                <span className="material-symbols-outlined text-3xl text-secondary">fact_check</span>
                <div>
                  <p className="font-bold text-primary">Diagnósticos Profesionales</p>
                  <p className="text-sm text-on-surface-variant">Cada diagnóstico es realizado con criterios técnicos y enfoque profesional, asegurando resultados confiables y decisiones acertadas.</p>
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
          {/* Carrusel móvil */}
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 hide-scrollbar">
            {[
              { quote: <>Lo que más valoro es la <strong>respuesta inmediata</strong>. En el campo, quedarte sin luz es un problema crítico, y RuralPass llegó el mismo día. Me devolvieron la tranquilidad.</>, name: 'Carlos Henríquez', city: 'Curicó' },
              { quote: <>Excelente servicio técnico para mi parcela. El diagnóstico fue transparente y profesional. Ahora vivo con total <strong>paz mental</strong> sabiendo que el sistema off-grid es resiliente.</>, name: 'Marta Villalobos', city: 'Rancagua' },
              { quote: <>Buscaba una solución para las cámaras solares en mi fundo y la respuesta fue <strong>increíblemente rápida</strong>. Ingeniería de verdad aplicada al terreno rural. Muy recomendados.</>, name: 'Pedro Alarcón', city: 'Talca' },
            ].map((t, i) => (
              <div key={i} className="snap-center shrink-0 w-[80vw] bg-white rounded-xl shadow-sm border border-outline-variant/10 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex text-secondary-container mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-on-surface-variant italic leading-relaxed text-sm">&quot;{t.quote}&quot;</p>
                </div>
                <div className="flex items-center gap-3 border-t border-outline-variant/10 pt-5 mt-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary overflow-hidden shrink-0">
                    <span className="material-symbols-outlined text-2xl">account_circle</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm leading-none">{t.name}</p>
                    <p className="text-xs text-secondary mt-1 uppercase font-bold tracking-wider">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Grid desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex text-secondary-container mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface-variant italic mb-8 leading-relaxed">&quot;Lo que más valoro es la <strong>respuesta inmediata</strong>. En el campo, quedarte sin luz es un problema crítico, y RuralPass llegó el mismo día. Me devolvieron la tranquilidad.&quot;</p>
              </div>
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
            <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex text-secondary-container mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface-variant italic mb-8 leading-relaxed">&quot;Excelente servicio técnico para mi parcela. El diagnóstico fue transparente y profesional. Ahora vivo con total <strong>paz mental</strong> sabiendo que el sistema off-grid es resiliente.&quot;</p>
              </div>
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
            <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <div className="flex text-secondary-container mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface-variant italic mb-8 leading-relaxed">&quot;Buscaba una solución para las cámaras solares en mi fundo y la respuesta fue <strong>increíblemente rápida</strong>. Ingeniería de verdad aplicada al terreno rural. Muy recomendados.&quot;</p>
              </div>
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
      <section className="bg-surface-container-low overflow-hidden">

        {/* Header + placeholder image */}
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="mb-12">
            <p className="text-label-md font-bold tracking-widest text-secondary uppercase mb-2">Las personas detrás del trabajo</p>
            <h2 className="text-4xl font-extrabold text-primary tracking-tight">Nuestro Equipo</h2>
          </div>
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image src="/images/banner-nuestro-equipo.png" alt="Nuestro Equipo RuralPass" fill className="object-cover object-center" />
          </div>
        </div>

        {/* Stacking Cards con GSAP */}
        <TeamStackingCards />

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
                  <p className="font-medium">Servicio disponible desde la Región de Valparaíso hasta la Región de Los Lagos.</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 shrink-0 rounded-lg bg-white/10 flex items-center justify-center text-secondary-container">
                    <span className="material-symbols-outlined">handyman</span>
                  </span>
                  <p className="font-medium">Especialistas en soluciones energéticas para la zona centro y sur de Chile.</p>
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
