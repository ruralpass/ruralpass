"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    badge: "Servicio Estrella",
    icon: "solar_power",
    title: "Sistemas Solares Off Grid",
    description:
      "Diseñamos e implementamos sistemas solares off grid eficientes, garantizando autonomía energética en cualquier entorno.",
    bullets: [
      "Soluciones fotovoltaicas integrales con instalación y mantenimiento para un suministro eléctrico confiable.",
      "Energía limpia y continua mediante sistemas independientes adaptados a cada necesidad.",
      "Optimización de la independencia energética con tecnología de alto rendimiento y soporte técnico especializado.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmgWq-2G-__jtiIlNKT6JUmpIZlenABJlOSEKNGf9j0CR_A1n_6RPel3-LekkrcMmCvMTGqBIqD9wfqxTF3o6BDCGu8g4awLVLChCaW5MBv5d0FT8qDdcZgtnbwfL0_fmLsW-3IyoVDatLYI6AD3jVQcdRwAVYmEjzJaCxa3JPRhsm8ZDk9IUGmaDeAu8TE-iRw4MYRB21dc8aHm8tKD1Rl3y-a6TYQmrPJRxLYLtkf0zzRk3LBtOT372h4Hb8K033oc5fCX0YObqQ",
    imageAlt: "Banco de baterías e inversores híbridos instalados",
  },
  {
    id: 2,
    badge: "Seguridad Avanzada",
    icon: "security",
    title: "Sistemas de Seguridad",
    description:
      "Protección inteligente con sistemas de seguridad y monitoreo confiable.",
    bullets: [
      "Instalación y mantenimiento de cámaras y alarmas para un control total y mayor tranquilidad.",
      "Soluciones de videovigilancia que combinan tecnología, prevención y respuesta oportuna.",
      "Seguridad integral con equipos de última generación y soporte continuo.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2SqU6LEGNv8sg6-deIfIjHElId19amHVkvkkv_j5jUGRG59AbABT2oMRD1NEQgNQpsKcAXH5NxleX5aY-mE_OENdM8LTuveMM9I_637b0vf7suphdOQxHDPuxyLVyORf15piyo6YzkVo15J6QNUw4KG09sZS8lmG0Uli7DhqNURvLqVIV0VzWplLXN6hQ9PRUiYHApJBiksJyMtrEUeP9uZJMPDlmGCaH8iuWlczq67jNUPMtbhPP6RRuMxOZdz7hQjDKk_W9Mo_p",
    imageAlt: "Torre de cámara de seguridad con panel solar",
  },
  {
    id: 3,
    badge: "Control Total",
    icon: "lock_person",
    title: "Control de Acceso",
    description:
      "Gestión segura de espacios mediante sistemas de control de acceso modernos.",
    bullets: [
      "Soluciones de acceso inteligente que optimizan la seguridad y el flujo de personas.",
      "Tecnología adaptable a cada entorno, con instalación y soporte especializado.",
      "Control y protección mediante sistemas confiables y de alta precisión.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ5SuRAlJRpptqNjNeP1_K9kZQrL-GqUzHpmPGMgkJtZPpJyY_Z1GhdLWgvkJBDOCSq-6zgADZ-Nf-NSfO9xFoGydpHp0W8oz8qQfiAwOzPzG_S2bp0wfkYrp0TBXeebrhutlV3ha3SjgEjRULhCrgx_08llKQqlJSVl0Edt3h9Vqxo11a0pXO0UJ4Zb6Q629veoi-YPiI2dkYm9EbsuE5YYcKBhzzuCccBKUMZSIg-0KVPfo0quQ7QIWb6z6EgIQ8Ullzr_jSHsFO",
    imageAlt: "Control de acceso instalado en zona rural",
  },
  {
    id: 4,
    badge: "Conectividad",
    icon: "cell_tower",
    title: "Telecomunicaciones",
    description:
      "Soluciones de telecomunicaciones eficientes para una conectividad estable y continua.",
    bullets: [
      "Instalación y mantenimiento de redes de alto rendimiento.",
      "Infraestructura tecnológica diseñada para optimizar la comunicación.",
      "Conectividad satelital y LTE para los lugares más remotos de Chile.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlDZfz_RMpbFLzatfRaRxPjPV_LyXi1ck-k0zvteOkoxXE3vFqL4wnggXLmBxp0m5GPD_KNdKLCUsWaRD9c-WYcc4v_KWKZTMlMdsOV2iJ5O46coHSVbWknad0s1dveZHMp_AaQW5WeJtOKVk-rSmKbmg3mdzz5fC36pcR_FCLIp3mq0UU2rwf1MNVfYybjX96yQt5CialLrTGac2rp9pCI-xKirWRbpush6EagoEJiB_FKlkPQbhssqMy4jqDQbNve2j2rqQWeA_k",
    imageAlt: "Infraestructura de telecomunicaciones en zona rural",
  },
];

export default function ServicesSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return;
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating, current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % services.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const svc = services[current];

  return (
    <div className="relative">
      {/* Main slide */}
      <div
        className={`bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 md:h-[460px]">
          {/* Image */}
          <div className="relative h-72 md:h-full overflow-hidden">
            <Image
              src={svc.image}
              alt={svc.imageAlt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content */}
          <div className="px-8 py-7 flex flex-col justify-center overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="material-symbols-outlined text-secondary text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {svc.icon}
              </span>
              <span className="text-[10px] font-black tracking-widest text-secondary uppercase">{svc.badge}</span>
            </div>

            <h4 className="text-2xl font-bold text-primary mb-2 leading-snug">{svc.title}</h4>
            <p className="text-sm text-on-surface-variant mb-5 leading-relaxed">
              {svc.description}
            </p>

            <ul className="space-y-2 mb-6">
              {svc.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span
                    className="material-symbols-outlined text-secondary shrink-0 mt-0.5 text-base"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            <Link
              href="/servicios"
              className="text-primary font-bold inline-flex items-center gap-2 group/link w-max text-sm"
            >
              Ver Especificaciones Técnicas
              <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        {/* Service tabs */}
        <div className="flex flex-wrap gap-2">
          {services.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                i === current
                  ? "bg-primary text-white shadow-md"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              <span
                className="material-symbols-outlined text-sm"
                style={
                  i === current
                    ? { fontVariationSettings: "'FILL' 1" }
                    : undefined
                }
              >
                {s.icon}
              </span>
              <span className="hidden sm:inline">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Prev/Next arrows */}
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => goTo((current - 1 + services.length) % services.length)}
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all"
            aria-label="Anterior"
          >
            <span className="material-symbols-outlined text-lg">chevron_left</span>
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all"
            aria-label="Siguiente"
          >
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex gap-1.5 mt-4">
        {services.map((_, i) => (
          <div key={i} className="flex-1 h-1 rounded-full bg-surface-container-high overflow-hidden">
            <div
              className={`h-full bg-secondary transition-all duration-300 ${
                i === current ? "w-full" : "w-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
