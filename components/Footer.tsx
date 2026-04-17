"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import footerLogo from '../logo-ruralpass-footer-final.png';

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-primary text-white py-20 border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Image
                src={footerLogo}
                alt="RuralPass Logo"
                className="h-24 w-auto"
              />
            </div>
            <p className="text-primary-fixed-dim max-w-sm mb-8 leading-relaxed">
              Comprometidos con entregar soluciones confiables en energía, seguridad y conectividad, acompañando cada proyecto con calidad y profesionalismo.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-all" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-all" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-secondary-container">Nuestros Servicios</h4>
            <ul className="space-y-4 text-primary-fixed-dim">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/casos" className="hover:text-white transition-colors">Casos</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-secondary-container">Institucional</h4>
            <ul className="space-y-4 text-primary-fixed-dim">
              <li>
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacidad
                </button>
              </li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto Técnico</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-fixed-dim">© 2025 RuralPass. Resiliencia Rural Garantizada.</p>
          <div className="flex gap-6 text-xs text-primary-fixed-dim">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[10px]">bolt</span>
              Sitio web implementado por{' '}
              <Link href="https://luissalascortes.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors ml-1">
                luissalascortes.dev
              </Link>
            </span>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      {privacyOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setPrivacyOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPrivacyOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors text-on-surface"
              aria-label="Cerrar"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              </div>
              <h2 className="text-xl font-black text-primary tracking-tight">Política de Privacidad</h2>
            </div>
            <div className="space-y-4 text-sm text-on-surface-variant leading-relaxed">
              <p>
                <strong className="text-primary">RuralPass SpA</strong> se compromete a proteger la privacidad de sus usuarios. La información personal que usted nos proporciona a través de nuestros formularios de contacto es utilizada exclusivamente para gestionar su solicitud de soporte técnico o cotización.
              </p>
              <p>
                <strong className="text-primary">Datos recopilados:</strong> Nombre, teléfono, ubicación y descripción del problema o requerimiento. No recopilamos datos sensibles ni financieros.
              </p>
              <p>
                <strong className="text-primary">Uso de la información:</strong> Sus datos son utilizados únicamente para contactarle y entregar el servicio solicitado. No vendemos, cedemos ni compartimos su información con terceros sin su consentimiento expreso.
              </p>
              <p>
                <strong className="text-primary">Almacenamiento:</strong> La información se almacena de forma segura y por el tiempo estrictamente necesario para la prestación del servicio.
              </p>
              <p>
                <strong className="text-primary">Derechos del usuario:</strong> Usted puede solicitar en cualquier momento la eliminación o rectificación de sus datos escribiéndonos a{' '}
                <a href="mailto:ruralpass.spa@gmail.com" className="text-secondary underline">ruralpass.spa@gmail.com</a>.
              </p>
              <p className="text-xs text-on-surface-variant/60 pt-2 border-t border-outline-variant/20">
                Última actualización: abril 2025. RuralPass SpA — Concepción, Chile.
              </p>
            </div>
            <button
              onClick={() => setPrivacyOpen(false)}
              className="mt-6 w-full bg-primary text-white font-bold py-3 rounded-xl hover:brightness-110 transition-all"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  );
}
