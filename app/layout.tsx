import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'RuralPass | Resiliencia Rural Garantizada',
  description: 'Ingeniería de terreno para sistemas críticos en zonas remotas de Chile.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');` }} />
      </head>
      <body className={`${inter.variable} bg-surface font-body text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed flex flex-col min-h-screen`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
