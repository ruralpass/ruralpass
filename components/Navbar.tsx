"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { sanityClient } from "@/lib/sanity";

type NavLink = { _key: string; name: string; href: string };

type NavbarData = {
  logo?: { asset?: { url: string } };
  logoAlt?: string;
  navLinks?: NavLink[];
  phoneNumber?: string;
  phoneLabel?: string;
};

const FALLBACK: NavbarData = {
  logoAlt: "RuralPass Logo",
  navLinks: [
    { _key: "1", name: "Home", href: "/" },
    { _key: "2", name: "Servicios", href: "/servicios" },
    { _key: "3", name: "Casos", href: "/casos" },
    { _key: "4", name: "Contacto", href: "/contacto" },
  ],
  phoneNumber: "+56956277070",
  phoneLabel: "+56 9 5627 7070",
};

const QUERY = `*[_type == "navbarConfig"][0]{
  logo { asset->{ url } },
  logoAlt,
  navLinks,
  phoneNumber,
  phoneLabel
}`;

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState<NavbarData>(FALLBACK);

  useEffect(() => {
    sanityClient.fetch<NavbarData>(QUERY).then((res) => {
      if (res) setData({ ...FALLBACK, ...res });
    }).catch(() => {});
  }, []);

  const navLinks = data.navLinks ?? FALLBACK.navLinks!;
  const phoneNumber = data.phoneNumber ?? FALLBACK.phoneNumber!;
  const phoneLabel = data.phoneLabel ?? FALLBACK.phoneLabel!;
  const logoAlt = data.logoAlt ?? FALLBACK.logoAlt!;
  const logoUrl = data.logo?.asset?.url;

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white border-b border-gray-100 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3 min-h-[88px] lg:min-h-[104px]">
        <Link href="/" className="flex items-center group">
          <Image
            src={logoUrl ?? "/logo-navbar-final.webp"}
            alt={logoAlt}
            width={288}
            height={96}
            className="w-auto h-20 lg:h-24 transition-transform duration-300 group-hover:scale-105"
            priority
            quality={82}
            sizes="(max-width: 1024px) 240px, 288px"
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
                key={link._key}
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
          {/* Desktop Phone Link */}
          <Link
            href={`tel:${phoneNumber}`}
            className="hidden md:flex bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">call</span>
            {phoneLabel}
          </Link>

          {/* Mobile Phone Button (Circle) */}
          <Link
            href={`tel:${phoneNumber}`}
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
                key={link._key}
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
