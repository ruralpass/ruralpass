import Image from 'next/image';
import Link from 'next/link';

export default function Servicios() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero Section: Nuestras Soluciones de Resiliencia */}
      <section className="relative min-h-[716px] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs59LWK2L9Y0UbenHHl9TL3PkKHPYdCcjCWX6eQh8sMV5v3RRpYAlyLe4ScMjTV8SqBzilZD55iGvUgBL3d-qbHRWPCem6ZpkSIbm6JKWFvEoiS2MCTeufMU6V8Wc680jhlk6kl0JL_AkSZWRdsdiQhmwWF0g0DfK4lgMsLeoB4yuAO03KDlrKpWnGCvG5s0fXLOl2tGBd3m9ba76oweVwPEzbP0eqSTt2fa4jeTGUljPITsZBU6mGQ39XA-TWSL10Bz_V48urhRM1"
            alt="dramatic wide shot of a solar farm nestled in the rugged andean mountains under a clear blue sky with golden light"
            fill
            className="object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold tracking-widest uppercase mb-6 rounded-sm">INGENIERÍA PARA LA RESILIENCIA</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-tight mb-8">
              Nuestras Soluciones de Resiliencia
            </h1>
            <p className="text-xl md:text-2xl text-surface-variant/90 font-light leading-relaxed mb-10">
              Diseñamos sistemas que no fallan cuando el entorno es hostil. Aseguramos la continuidad operativa de hogares y empresas en las zonas más remotas de Chile.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-secondary to-secondary-container text-white px-8 py-4 rounded-md font-bold text-lg hover:brightness-110 transition-all flex items-center gap-2">
                Explorar Servicios <span className="material-symbols-outlined">arrow_downward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Service: Paneles Solares Off-Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-fixed/30 rounded-full blur-3xl"></div>
              <div className="relative z-10 w-full aspect-[4/3] rounded-xl shadow-2xl overflow-hidden">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALZHvzhNZcjLxKVHSeyC5VJYh8rrCKey7rcPXZdYE033lAZH_7T7PtWaaej3l9O_0vgkL6eDLMKmotkuT5U9qFGFhumg2Bd9D2tEx_0XmRempdiIcT1I6eqbMNO6IQ9_MOi9USBtrFnYLKPcv_Mr0CQzs7lrp1QUlQPtI6hRWc-NPuAgbfQR0Qs70Ywji9JbFCbkeiaayK4oLuhUwo6NGrVh_ysNUp33ki0DqWpOA_dKmAt8OwzCZ8DN8ohsd0MkDfttsVWQ_xqLxq"
                  alt="high-tech off-grid solar installation on a modern architectural house"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-lg shadow-xl z-20 hidden md:block max-w-xs">
                <h4 className="font-bold text-xl mb-2">Continuidad Operativa</h4>
                <p className="text-sm text-surface-variant font-light">Sistemas redundantes diseñados para operar sin conexión a la red eléctrica tradicional.</p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-bold text-primary tracking-tight mb-6 leading-tight">Paneles Solares Off-Grid</h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                Nuestra arquitectura energética solar está diseñada para soportar las condiciones climáticas del campo chileno, desde el desierto de Atacama hasta la Patagonia. No vendemos paneles; entregamos autonomía energética certificada.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-surface-container-highest p-2 rounded-lg">
                    <span className="material-symbols-outlined text-secondary">settings_suggest</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary">Revisión de Inversores</h5>
                    <p className="text-on-surface-variant text-sm">Diagnóstico preventivo de electrónica de potencia para evitar cortes inesperados.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-surface-container-highest p-2 rounded-lg">
                    <span className="material-symbols-outlined text-secondary">battery_charging_full</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary">Mantenimiento de Banco de Baterías</h5>
                    <p className="text-on-surface-variant text-sm">Ecualización y test de capacidad para maximizar la vida útil de su reserva energética.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-surface-container-highest p-2 rounded-lg">
                    <span className="material-symbols-outlined text-secondary">query_stats</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary">Optimización de Generación</h5>
                    <p className="text-on-surface-variant text-sm">Ajuste de ángulos y limpieza técnica profesional según la estacionalidad local.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complementary Service: Cámaras de Seguridad Solar */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-primary tracking-tight mb-4">Vigilancia en Zonas Remotas</h2>
              <p className="text-lg text-on-surface-variant">Seguridad perimetral inteligente que funciona de forma 100% independiente, ideal para parcelas y fundos sin servicios básicos.</p>
            </div>
            <div className="hidden lg:block">
              <span className="material-symbols-outlined text-8xl text-surface-container-highest">satellite_alt</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tech Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-secondary flex flex-col h-full">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">nest_cam_outdoor</span>
              <h3 className="text-xl font-bold text-primary mb-4">Energía Solar Integrada</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Cámaras 4K con paneles solares dedicados, eliminando la necesidad de cableado costoso y complejo.</p>
              <div className="mt-auto pt-4 border-t border-surface-container">
                <span className="text-xs font-bold text-secondary tracking-widest uppercase">AUTONOMÍA 24/7</span>
              </div>
            </div>
            {/* Tech Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-primary flex flex-col h-full">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">router</span>
              <h3 className="text-xl font-bold text-primary mb-4">Integración Starlink</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Configuramos el enlace satelital para monitoreo en tiempo real desde cualquier parte del mundo.</p>
              <div className="mt-auto pt-4 border-t border-surface-container">
                <span className="text-xs font-bold text-primary tracking-widest uppercase">ALWAYS CONNECTED</span>
              </div>
            </div>
            {/* Tech Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-tertiary flex flex-col h-full">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-6">security</span>
              <h3 className="text-xl font-bold text-primary mb-4">Alerta Inteligente</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Detección de personas y vehículos con IA para reducir falsas alarmas por fauna local.</p>
              <div className="mt-auto pt-4 border-t border-surface-container">
                <span className="text-xs font-bold text-tertiary tracking-widest uppercase">PRECISIÓN TOTAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Feature: Garantía de Diagnóstico */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-tertiary/10 text-tertiary rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> Transparencia Técnica
              </div>
              <h2 className="text-4xl font-bold text-primary tracking-tight mb-8">Garantía de Diagnóstico RuralPass</h2>
              <div className="space-y-8">
                <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-primary">
                  <h4 className="font-bold text-primary mb-2">Protocolos Certificados SEC</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Todas nuestras intervenciones siguen estrictos protocolos de la Superintendencia de Electricidad y Combustibles para garantizar su seguridad y la de su propiedad.</p>
                </div>
                <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-secondary">
                  <h4 className="font-bold text-primary mb-2">Presupuesto sin Sorpresas</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Entregamos un desglose técnico detallado antes de cualquier reparación. Si el diagnóstico inicial no detecta la falla principal, no cobramos la visita técnica.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-xl shadow-lg overflow-hidden">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2LQPpzv4hhjsZthxanzO_FXZ6jKOFGXKFb3-hq_ByGBPBhlM9cXhWv6HS9Ajgl91lAWK1YWitZgcX7k5zf_MfqdkEKY029Cac6LhV1tEkqDB99LK4f6g2XJ9qW9G9qpcEErqLiVroGr3Kpgc-sBu-nbeFKy4OiIfrZN4tWR2kmiR5TTr9Z5wKnY05pCmhybRQ7_U7s5N8vIgZ8ICNvMMaCE4Oj93kPfT3dgnWjqpF8PKA0auS2_CfoyewJ4N_XDVtQ5TPJEuNBLDj"
                  alt="professional electrical engineer checking a solar inverter"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-8">
          <div className="bg-primary rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="p-12 md:w-3/5">
              <h2 className="text-3xl font-bold text-white mb-6">¿Listo para asegurar su resiliencia energética?</h2>
              <p className="text-surface-variant/80 text-lg mb-10 leading-relaxed">Hable directamente con un ingeniero especialista. Realizamos una evaluación remota preliminar sin costo para su proyecto.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#" className="bg-[#25D366] text-white px-8 py-4 rounded-md font-bold text-lg hover:brightness-110 transition-all flex items-center gap-3">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                  WhatsApp Contact
                </Link>
              </div>
            </div>
            <div className="md:w-2/5 relative">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-QsEEMGzc8YbzyDXn2498TLDynfd6whZwSw_Pee_R8t5wK4o9mfTmotJ10NAiITtd6OfeN0r90Eb06nN8i_ymd5vwHGJJNsJWr-7aGExfZTxkDhCMTwOvgGAxfjkwTLrCZEQZ1CR1SDahSlEaxOaXoLvbxaoPm-TO6NJs_j0QaWNntNn4BZTZxIi4e-_bzDjuWGIXy4JSjS3GJJB06gWQdY8ixApSNs1LSGkBen_nr5BiTAyyX2_ApOk_nVUJ_0fz7P1iIieKQVrX"
                alt="misty mountain range in southern chile"
                fill
                className="object-cover grayscale opacity-50 mix-blend-overlay"
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
