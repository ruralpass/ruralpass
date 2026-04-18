'use client';

import { useState } from 'react';
import Image from 'next/image';

type Category = 'Todos' | 'Paneles Solares' | 'Cámaras de Seguridad' | 'Mantención';

const projects = [
  {
    id: 1,
    category: 'Paneles Solares' as Category,
    image: '/images/colbun.png',
    alt: 'Instalación paneles solares off-grid Colbún',
    badgeColor: 'bg-tertiary',
    badgeLabel: 'Solar',
    region: 'Región del Maule, 2024',
    title: 'Independencia Energética en Colbún',
    tags: [
      { icon: 'offline_bolt', label: '5kW' },
      { icon: 'battery_very_low', label: '10kWh' },
    ],
    description:
      'El cliente sufría cortes frecuentes; instalamos un sistema híbrido de 5kW que garantiza autonomía total durante fallas de red.',
  },
  {
    id: 2,
    category: 'Cámaras de Seguridad' as Category,
    image: '/images/panguipulli.png',
    alt: 'Sistema vigilancia perimetral Panguipulli',
    badgeColor: 'bg-primary',
    badgeLabel: 'Seguridad',
    region: 'Región de los Ríos, 2023',
    title: 'Vigilancia Perimetral en Panguipulli',
    tags: [
      { icon: 'videocam', label: '8 Cámaras' },
      { icon: 'router', label: 'Starlink' },
    ],
    description:
      'Predio remoto sin conectividad. Implementamos enlace Starlink y cámaras 4K térmicas con alimentación solar independiente.',
  },
  {
    id: 3,
    category: 'Mantención' as Category,
    image: '/images/fotovoltaica.png',
    alt: 'Mantención optimización fotovoltaica Pirque',
    badgeColor: 'bg-secondary',
    badgeLabel: 'Mantención',
    region: 'Región Metropolitana, 2024',
    title: 'Optimización Fotovoltaica en Pirque',
    tags: [
      { icon: 'trending_up', label: '+25% Efi.' },
      { icon: 'history', label: 'Annual Plan' },
    ],
    description:
      'Sistema industrial con baja eficiencia por falta de limpieza y fallas en inversores. Recuperamos el 100% de la capacidad nominal.',
  },
];

const categories: Category[] = ['Todos', 'Paneles Solares', 'Cámaras de Seguridad', 'Mantención'];

export default function ProjectsFilter() {
  const [active, setActive] = useState<Category>('Todos');

  const filtered =
    active === 'Todos' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter Bar */}
      <section className="bg-surface-container-low py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="text-sm font-bold text-primary-container tracking-tighter uppercase">Filtrar Proyectos</div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    active === cat
                      ? 'bg-primary text-white'
                      : 'bg-white text-primary border border-outline-variant/20 hover:bg-surface-container'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <p className="text-center text-on-surface-variant">No hay proyectos en esta categoría.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filtered.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden flex flex-col group transition-all hover:shadow-lg"
                >
                  <div className="h-64 overflow-hidden relative">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className={`absolute top-4 left-4 ${project.badgeColor} text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded`}
                    >
                      {project.badgeLabel}
                    </div>
                  </div>
                  <div className="p-8 flex-grow">
                    <div className="text-xs font-medium text-on-surface-variant mb-2">{project.region}</div>
                    <h3 className="text-xl font-bold text-primary mb-4">{project.title}</h3>
                    <div className="flex gap-4 mb-6">
                      {project.tags.map((tag) => (
                        <div
                          key={tag.icon}
                          className="flex items-center gap-1.5 bg-surface-container-low px-2 py-1 rounded"
                        >
                          <span className="material-symbols-outlined text-[18px] text-secondary">{tag.icon}</span>
                          <span className="text-xs font-bold text-primary">{tag.label}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
