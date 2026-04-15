"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import navbarLogo from "../logo-ruralpass-navbar.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Casos", href: "/casos" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white border-b border-gray-100 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3 min-h-[88px] lg:min-h-[104px]">
        <Link href="/" className="flex items-center group">
          <Image
            src={navbarLogo}
            alt="RuralPass Logo"
            className="w-auto h-20 lg:h-24 transition-transform duration-300 group-hover:scale-105"
            priority
            onError={(e) => {
              e.currentTarget.src = "/images/logo-navbar-large-fallback.jpg";
            }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-inter text-sm font-semibold tracking-tight">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors duration-300
                  ${isActive ? "text-secondary" : "text-primary/80 hover:text-secondary"}
                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-secondary 
                  after:transition-transform after:duration-300
                  ${isActive ? "after:scale-x-100 after:origin-bottom-left" : "after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left"}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {/* Desktop WhatsApp Button */}
          <Link
            href="https://wa.me/yourlink"
            className="hidden md:flex bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            WhatsApp
          </Link>

          {/* Mobile WhatsApp Button (Circle) */}
          <Link
            href="https://wa.me/yourlink"
            className="md:hidden w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-all active:scale-95 shadow-md"
          >
            <span className="material-symbols-outlined text-lg">call</span>
          </Link>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`py-2 text-lg font-bold transition-colors ${isActive ? "text-secondary" : "text-primary"}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
