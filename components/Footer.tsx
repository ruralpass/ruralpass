import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-20 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4qDIJOCeVSQFgaD_0uDqSW9q9uvha_nBFJtXP9yGXtGm-QspVsmxnLW4iC5B7hz6-584cD_GT-Isj2egjW3-DHYU4gegmL0KNwr7lhFnzIrUzdm6Do9QxXofgcvrNYUrnMF7kvcfcBN98c1SLKa5U7fcuQ2UOjuElrI4kNrnx9yn589hjs5a9JC0G8LjuAS5KpzJQuyqa_LtwfXf9OkQ7NRPfub4TiM7zP2mC6IPBrbAORbcgs3f8KEc3cZLhuLyllpK2I0r2yJz2"
              alt="RuralPass Logo"
              width={40}
              height={40}
              className="h-10 w-auto brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-black tracking-tighter">RuralPass</span>
          </div>
          <p className="text-primary-fixed-dim max-w-sm mb-8 leading-relaxed">
            Resiliencia Rural Garantizada. Ingeniería de terreno para sistemas críticos en zonas remotas de Chile.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-all">
              <span className="material-symbols-outlined text-sm">social_leaderboard</span>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-all">
              <span className="material-symbols-outlined text-sm">share</span>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-secondary-container">Nuestros Servicios</h4>
          <ul className="space-y-4 text-primary-fixed-dim">
            <li><Link href="#" className="hover:text-white transition-colors">Servicios Off-Grid</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Cámaras de Seguridad</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Casos de Éxito</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Garantía de Diagnóstico</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-secondary-container">Institucional</h4>
          <ul className="space-y-4 text-primary-fixed-dim">
            <li><Link href="#" className="hover:text-white transition-colors">Términos Legales</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Privacidad</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Trabaja con nosotros</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Contacto Técnico</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-primary-fixed-dim">© 2024 RuralPass. Resiliencia Rural Garantizada.</p>
        <div className="flex gap-6 text-xs text-primary-fixed-dim">
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">bolt</span> Powered by RuralEngineering</span>
        </div>
      </div>
    </footer>
  );
}
