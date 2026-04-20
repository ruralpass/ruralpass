"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const STACK_Y = 12;
const STACK_S = 0.04;

const team = [
  {
    name: "Francisco Espinoza",
    role: "Gerente General y Encargado de Operaciones",
    image: "/images/testimonio1.webp",
    badges: [{ label: "Fundador", color: "bg-primary/10 text-primary" }, { label: "Operaciones", color: "bg-secondary/10 text-secondary" }],
    description: "Lidera cada proyecto con visión técnica y compromiso de terreno. Más de 8 años coordinando instalaciones de sistemas solares y eléctricos en zonas rurales de Chile central y sur.",
    stats: [{ value: "+120", label: "Proyectos liderados" }, { value: "8", label: "Años de exp." }, { value: "6", label: "Regiones" }],
  },
  {
    name: "Gonzalo Valenzuela",
    role: "Especialista en Montaje y Obras Civiles",
    image: "/images/testimonio2.webp",
    badges: [{ label: "Montaje", color: "bg-primary/10 text-primary" }, { label: "Fotovoltaico", color: "bg-secondary/10 text-secondary" }, { label: "Obras Civiles", color: "bg-tertiary/10 text-tertiary" }],
    description: "Técnico especialista en sistemas fotovoltaicos con dominio completo en instalación de estructuras, cableado de potencia y ejecución de obras civiles para proyectos energéticos rurales.",
    stats: [{ value: "+80", label: "Instalaciones" }, { value: "500+", label: "Paneles montados" }],
  },
  {
    name: "Maria Francisca Menares",
    role: "Jefa de Recursos Humanos y Comunicaciones",
    image: "/images/testimonio3.webp",
    badges: [{ label: "RRHH", color: "bg-primary/10 text-primary" }, { label: "Comunicaciones", color: "bg-secondary/10 text-secondary" }],
    description: "Responsable de la gestión del talento humano y la comunicación institucional de RuralPass. Asegura que cada cliente reciba una atención oportuna y que el equipo opere con los más altos estándares de profesionalismo.",
    stats: [{ value: "100%", label: "Atención al cliente" }, { value: "3+", label: "Años en RuralPass" }],
  },
];

export default function TeamStackingCards() {
  const [active, setActive] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const busy = useRef(false);

  /* Posicionar todas las cards en el deck */
  const place = (activeIdx: number, anim: boolean) => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const level  = (i - activeIdx + team.length) % team.length;
      const props  = {
        y:       level * STACK_Y,
        scale:   1 - level * STACK_S,
        zIndex:  team.length - level,
        opacity: level === team.length - 1 ? 0.6 : 1,
      };
      anim
        ? gsap.to(card,  { ...props, duration: 0.35, ease: "power2.out", overwrite: true })
        : gsap.set(card, props);
    });
  };

  useEffect(() => { place(0, false); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const goTo = (idx: number) => {
    if (busy.current || idx === active) return;
    busy.current = true;
    setActive(idx);
    place(idx, true);
    setTimeout(() => { busy.current = false; }, 380);
  };

  const next = () => goTo((active + 1) % team.length);
  const prev = () => goTo((active - 1 + team.length) % team.length);

  return (
    <div className="max-w-4xl mx-auto px-6 pb-16 sm:pb-32">

      {/* Carrusel móvil */}
      <div className="sm:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 hide-scrollbar">
        {team.map((m) => (
          <div
            key={m.name}
            className="snap-center shrink-0 w-[80vw] bg-white rounded-2xl border border-outline-variant/10 overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-52 shrink-0">
              <Image src={m.image} alt={m.name} fill className="object-cover object-top" />
            </div>
            <div className="flex-1 p-6 flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {m.badges.map(b => (
                  <span key={b.label} className={`px-3 py-1 ${b.color} text-xs font-bold rounded-full uppercase tracking-wider`}>{b.label}</span>
                ))}
              </div>
              <h3 className="text-xl font-extrabold text-primary">{m.name}</h3>
              <p className="text-secondary font-bold text-xs uppercase tracking-widest">{m.role}</p>
              <p className="text-on-surface-variant text-sm leading-relaxed">{m.description}</p>
              {m.stats.length > 0 && (
                <div className="flex flex-wrap gap-4 pt-3 mt-2 border-t border-outline-variant/10">
                  {m.stats.map(s => (
                    <div key={s.label}>
                      <p className="text-lg font-extrabold text-primary">{s.value}</p>
                      <p className="text-xs text-on-surface-variant">{s.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Stacking Cards desktop (sm+) */}
      <div className="hidden sm:block">
        <div className="relative" style={{ height: 340 + (team.length - 1) * STACK_Y }}>
          {team.map((m, i) => (
            <div
              key={m.name}
              ref={(el) => { cardsRef.current[i] = el; }}
              onClick={() => goTo(i)}
              className="absolute inset-x-0 top-0 bg-white rounded-2xl border border-outline-variant/10 overflow-hidden flex flex-col sm:flex-row will-change-transform origin-top cursor-pointer"
              style={{ boxShadow: "0 6px 32px rgba(0,0,0,0.09)", minHeight: 280 }}
            >
              <div className="relative w-full sm:w-52 h-52 sm:h-auto shrink-0">
                <Image src={m.image} alt={m.name} fill className="object-cover object-top" />
              </div>
              <div className="flex-1 p-7 flex flex-col justify-center gap-2">
                <div className="flex flex-wrap gap-2">
                  {m.badges.map(b => (
                    <span key={b.label} className={`px-3 py-1 ${b.color} text-xs font-bold rounded-full uppercase tracking-wider`}>{b.label}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-extrabold text-primary">{m.name}</h3>
                <p className="text-secondary font-bold text-xs uppercase tracking-widest">{m.role}</p>
                <p className="text-on-surface-variant text-sm leading-relaxed">{m.description}</p>
                {m.stats.length > 0 && (
                  <div className="flex flex-wrap gap-6 pt-4 mt-2 border-t border-outline-variant/10">
                    {m.stats.map(s => (
                      <div key={s.label}>
                        <p className="text-xl font-extrabold text-primary">{s.value}</p>
                        <p className="text-xs text-on-surface-variant">{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Controles */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-3">
            {team.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} aria-label={`Ver ${team[i].name}`}>
                <span className={`block rounded-full transition-all duration-200 ${
                  active === i ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-outline-variant/40 hover:bg-primary/40"
                }`} />
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <button onClick={prev} aria-label="Anterior" className="w-11 h-11 rounded-full border border-outline-variant/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95">
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button onClick={next} aria-label="Siguiente" className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all active:scale-95">
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
