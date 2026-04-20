'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, FormEvent } from 'react';
import ServicesSlider from '@/components/ServicesSlider';
import TeamStackingCards from '@/components/TeamStackingCards';
import { sanityClient } from '@/lib/sanity';

type HeroSlide = {
  _key: string;
  backgroundImage?: { asset?: { url: string } };
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  whatsappLabel: string;
  whatsappUrl: string;
  ctaLabel: string;
  ctaUrl: string;
};

const FALLBACK_SLIDES: HeroSlide[] = [
  {
    _key: '1',
    badge: 'Energía Solar',
    titleLine1: 'Energía',
    titleLine2: 'Solar',
    description: 'Energía solar off grid eficiente y confiable para una verdadera independencia energética.',
    whatsappLabel: 'WhatsApp',
    whatsappUrl: 'https://wa.me/56956277070',
    ctaLabel: 'Solicitar Cotización',
    ctaUrl: '#contacto',
  },
  {
    _key: '2',
    badge: 'Seguridad',
    titleLine1: 'Sistemas de',
    titleLine2: 'Seguridad',
    description: 'Sistemas de seguridad inteligentes que protegen tu entorno con tecnología y precisión.',
    whatsappLabel: 'WhatsApp',
    whatsappUrl: 'https://wa.me/56956277070',
    ctaLabel: 'Solicitar Cotización',
    ctaUrl: '#contacto',
  },
  {
    _key: '3',
    badge: 'Telecomunicaciones',
    titleLine1: '',
    titleLine2: 'Telecomunicaciones',
    description: 'Conectividad estable y de alto rendimiento para mantenerte siempre comunicado.',
    whatsappLabel: 'WhatsApp',
    whatsappUrl: 'https://wa.me/56956277070',
    ctaLabel: 'Solicitar Cotización',
    ctaUrl: '#contacto',
  },
];

const FALLBACK_IMAGES = [
  '/images/slide-1-ruralpass.webp',
  '/images/slide-2-ruralpass.webp',
  '/images/slide-3-ruralpass.webp',
];

const HERO_QUERY = `*[_type == "heroConfig"][0]{
  slides[]{
    _key,
    backgroundImage { asset->{ url } },
    badge,
    titleLine1,
    titleLine2,
    description,
    whatsappLabel,
    whatsappUrl,
    ctaLabel,
    ctaUrl
  }
}`;

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>(FALLBACK_SLIDES);

  useEffect(() => {
    sanityClient.fetch<{ slides: HeroSlide[] }>(HERO_QUERY)
      .then((res) => { if (res?.slides?.length) setHeroSlides(res.slides); })
      .catch(() => {});
  }, []);

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
            key={slide._key}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={slide.backgroundImage?.asset?.url ?? FALLBACK_IMAGES[index] ?? FALLBACK_IMAGES[0]}
              alt={slide.badge ?? 'Hero background'}
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
              {heroSlides[currentSlide]?.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1]">
              {heroSlides[currentSlide]?.titleLine1 && (
                <span>{heroSlides[currentSlide].titleLine1} </span>
              )}
              <span className="text-secondary-container">{heroSlides[currentSlide]?.titleLine2}</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-fixed-dim max-w-xl leading-relaxed">
              {heroSlides[currentSlide]?.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={heroSlides[currentSlide]?.whatsappUrl ?? 'https://wa.me/56956277070'}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-8 py-4 rounded-md font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2 shadow-lg"
              >
                <span className="material-symbols-outlined">call</span>
                {heroSlides[currentSlide]?.whatsappLabel ?? 'WhatsApp'}
              </Link>
              <Link
                href={heroSlides[currentSlide]?.ctaUrl ?? '#contacto'}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/20 transition-all"
              >
                {heroSlides[currentSlide]?.ctaLabel ?? 'Solicitar Cotización'}
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/cobertura-nacional.webp"
                alt="Cobertura Nacional RuralPass"
                width={800}
                height={600}
                className="w-full h-auto block"
              />
              <div className="absolute inset-0 bg-black/15"></div>
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
                  src="/images/img-casa-rural-solar.webp"
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
                  src="/images/img-camara-seguridad.webp"
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
                  src="/images/img-mantencion-fotovoltaica.webp"
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
            <Image src="/images/banner-nuestro-equipo.webp" alt="Nuestro Equipo RuralPass" fill className="object-cover object-center" />
          </div>
        </div>

        {/* Stacking Cards con GSAP */}
        <TeamStackingCards />

      </section>

      <ContactCTAForm />

    </>
  );
}

type CTAStatus = 'idle' | 'loading' | 'success' | 'error' | 'network_error';

function ContactCTAForm() {
  const [status, setStatus] = useState<CTAStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    tipoSistema: 'Solar Off-Grid Residencial',
    marcaInversor: '',
    ubicacion: '',
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
        body: JSON.stringify({
          nombre: form.nombre,
          telefono: form.telefono,
          ubicacion: form.ubicacion,
          tipoSistema: form.tipoSistema + (form.marcaInversor ? ` — Inversor: ${form.marcaInversor}` : ''),
          descripcion: form.descripcion,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error || 'No se pudo procesar el mensaje.');
        setStatus('error');
        return;
      }
      setStatus('success');
      setForm({ nombre: '', telefono: '', tipoSistema: 'Solar Off-Grid Residencial', marcaInversor: '', ubicacion: '', descripcion: '' });
    } catch {
      setStatus('network_error');
    }
  };

  const inputClass = "w-full bg-surface-container-lowest border border-outline-variant/30 rounded px-4 py-3 focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all";

  return (
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
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-6 h-full py-8 text-center">
                <div className="relative flex items-center justify-center w-20 h-20">
                  <div className="absolute inset-0 rounded-full bg-green-500/10 animate-ping" style={{ animationDuration: '1.8s' }} />
                  <div className="w-20 h-20 rounded-full bg-green-500/15 flex items-center justify-center">
                    <span className="material-symbols-outlined text-5xl text-green-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1 mb-4">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-700 text-xs font-bold uppercase tracking-widest">Solicitud entregada</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-primary mb-2">¡Cotización enviada con éxito!</h3>
                  <p className="text-on-surface-variant text-sm max-w-xs mx-auto leading-relaxed">
                    Un técnico te contactará en <strong>menos de 2 horas</strong> para coordinar el pre-diagnóstico remoto.
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
                    Nueva solicitud
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Nombre Completo *</label>
                    <input name="nombre" value={form.nombre} onChange={handleChange} required className={inputClass} type="text" placeholder="Ej: Juan Pérez" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Teléfono / WhatsApp *</label>
                    <input name="telefono" value={form.telefono} onChange={handleChange} required className={inputClass} type="tel" placeholder="+56 9 1234 5678" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Tipo de Sistema</label>
                  <select name="tipoSistema" value={form.tipoSistema} onChange={handleChange} className={inputClass}>
                    <option>Solar Off-Grid Residencial</option>
                    <option>Solar Comercial / Agrícola</option>
                    <option>Cámaras de Seguridad Solar</option>
                    <option>Otro / Mantención General</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Marca Inversor (Si aplica)</label>
                    <input name="marcaInversor" value={form.marcaInversor} onChange={handleChange} className={inputClass} placeholder="Ej: Victron, Growatt, Voltronic" type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Ubicación (Ciudad/Comuna)</label>
                    <input name="ubicacion" value={form.ubicacion} onChange={handleChange} className={inputClass} type="text" placeholder="Ej: Los Ángeles" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Descripción del Problema *</label>
                  <textarea name="descripcion" value={form.descripcion} onChange={handleChange} required className={inputClass} rows={4} placeholder="Describa brevemente lo que ocurre..." />
                </div>

                {(status === 'error' || status === 'network_error') && (
                  <div className="flex items-start gap-4 bg-red-50 border border-red-200 rounded-xl px-5 py-4">
                    <div className="shrink-0 w-9 h-9 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <span className="material-symbols-outlined text-red-600 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {status === 'network_error' ? 'wifi_off' : 'cancel'}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-red-700 mb-0.5">
                        {status === 'network_error' ? 'Sin conexión a Internet' : 'No se pudo enviar la solicitud'}
                      </p>
                      <p className="text-xs text-red-600/80 leading-relaxed">
                        {status === 'network_error'
                          ? 'Revisa tu conexión e intenta de nuevo o contáctanos por WhatsApp.'
                          : errorMsg || 'Ocurrió un error inesperado. Intenta de nuevo o escríbenos por WhatsApp.'}
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-secondary text-white font-bold py-4 rounded shadow-lg hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                      Enviando solicitud...
                    </>
                  ) : (
                    'Enviar Solicitud de Prioridad'
                  )}
                </button>
                {status === 'loading' && (
                  <p className="text-center text-xs text-on-surface-variant animate-pulse">Procesando y enviando tu solicitud...</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
