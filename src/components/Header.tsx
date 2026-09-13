"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[var(--color-sandMuted)]/60 transition-all duration-300">
      <div className="w-full px-6 lg:px-14 py-4 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link href="#hero" className="flex flex-col group" onClick={closeMenu}>
          <span className="font-cormorant text-2xl lg:text-[27px] font-normal tracking-wide text-charcoal group-hover:text-sageDark transition-colors">
            Dr. Maya Reynolds
          </span>
          <span className="text-[10px] tracking-[0.25em] text-sageMuted font-medium uppercase mt-0.5">
            PsyD • Clinical Psychologist
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-10 text-[11px] font-medium tracking-[0.22em] text-charcoalLight uppercase">
          <Link href="#about" className="hover:text-sageAccent transition-colors">About</Link>
          <Link href="#who-we-help" className="hover:text-sageAccent transition-colors">Who We Help</Link>
          <Link href="#specialties" className="hover:text-sageAccent transition-colors">Specialties</Link>
          <Link href="#office" className="hover:text-sageAccent transition-colors">Our Office</Link>
          <Link href="#approach" className="hover:text-sageAccent transition-colors">Approach</Link>
          <Link href="#faqs" className="hover:text-sageAccent transition-colors">FAQs</Link>
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#contact"
            className="px-6 py-2 border border-charcoal/80 rounded-full text-[11px] font-medium tracking-[0.18em] text-charcoal uppercase hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden">
          <button
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label="Toggle Navigation Menu"
            className={`group relative w-10 h-10 rounded-full flex items-center justify-center text-charcoal transition-all duration-300 hover:bg-[var(--color-sandMuted)]/60 active:scale-95 focus:outline-none ${isMenuOpen ? "menu-active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="flex flex-col justify-center items-center w-5 h-4 relative">
              <span id="line-1" className="hamburger-line block w-5 h-[1.5px] bg-charcoal rounded-full mb-1"></span>
              <span id="line-2" className="hamburger-line block w-5 h-[1.5px] bg-charcoal rounded-full mb-1"></span>
              <span id="line-3" className="hamburger-line block w-5 h-[1.5px] bg-charcoal rounded-full"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation & Backdrop */}
      <div
        id="mobile-backdrop"
        className={`fixed inset-0 top-[73px] bg-charcoal/20 backdrop-blur-sm z-40 lg:hidden ${
          isMenuOpen ? "backdrop-open" : "backdrop-closed"
        }`}
        onClick={closeMenu}
      ></div>
      <div
        id="mobile-menu"
        aria-label="Mobile Navigation"
        role="region"
        className={`relative z-50 lg:hidden bg-[var(--color-linen)]/95 backdrop-blur-md px-8 py-6 border-t border-[var(--color-sandMuted)] flex flex-col space-y-4 text-xs tracking-[0.2em] font-medium uppercase text-charcoal shadow-lg overflow-hidden ${
          isMenuOpen ? "menu-open" : "menu-closed"
        }`}
      >
        <Link href="#about" className="mobile-nav-link py-1.5 transition-colors duration-200 hover:text-sageAccent" onClick={closeMenu}>About</Link>
        <Link href="#who-we-help" className="mobile-nav-link py-1.5 transition-colors duration-200 hover:text-sageAccent" onClick={closeMenu}>Who We Help</Link>
        <Link href="#specialties" className="mobile-nav-link py-1.5 transition-colors duration-200 hover:text-sageAccent" onClick={closeMenu}>Specialties</Link>
        <Link href="#office" className="mobile-nav-link py-1.5 transition-colors duration-200 hover:text-sageAccent" onClick={closeMenu}>Our Office</Link>
        <Link href="#approach" className="mobile-nav-link py-1.5 transition-colors duration-200 hover:text-sageAccent" onClick={closeMenu}>Approach</Link>
        <Link href="#faqs" className="mobile-nav-link py-1.5 transition-colors duration-200 hover:text-sageAccent" onClick={closeMenu}>FAQs</Link>
        <div className="pt-3">
          <Link
            href="#contact"
            className="mobile-nav-link inline-block w-full text-center py-3 border border-charcoal rounded-full text-charcoal hover:bg-charcoal hover:text-white transition-colors duration-300"
            onClick={closeMenu}
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
