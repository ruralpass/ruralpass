import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppBubble from '@/components/WhatsAppBubble';
import ClarityAnalytics from '@/components/ClarityAnalytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RuralPass | Resiliencia Rural Garantizada',
  description: 'Ingeniería de terreno para sistemas críticos en zonas remotas de Chile.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          href="/fonts/material-symbols-outlined.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} bg-surface font-body text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed flex flex-col min-h-screen`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppBubble />
        <ClarityAnalytics />
      </body>
    </html>
  );
}
