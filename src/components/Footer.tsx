"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white text-charcoal border-t border-[var(--color-sandMuted)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-xs">
          {/* Col 1: Wordmark & Statement */}
          <div>
            <div className="font-cormorant text-2xl text-charcoal mb-1">
              Dr. Maya Reynolds
            </div>
            <p className="text-[9px] tracking-[0.25em] text-sageMuted uppercase mb-5 font-semibold">
              Clinical Psychologist • PsyD
            </p>
            <p className="text-charcoalLight leading-relaxed font-light text-[12px] max-w-xs">
              We want to make getting started simple. You’re welcome to come into our Santa Monica office or schedule virtual appointments from anywhere in CA—whatever works best for you.
            </p>
          </div>

          {/* Col 2: Navigate */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-charcoal uppercase mb-5">
              Navigate
            </p>
            <ul className="space-y-2.5 text-charcoalLight font-light text-[12px]">
              <li><Link href="#hero" className="hover:text-sageAccent transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-sageAccent transition-colors">About Dr. Maya</Link></li>
              <li><Link href="#who-we-help" className="hover:text-sageAccent transition-colors">Who We Help</Link></li>
              <li><Link href="#specialties" className="hover:text-sageAccent transition-colors">Specialties</Link></li>
              <li><Link href="#office" className="hover:text-sageAccent transition-colors">Our Office</Link></li>
              <li><Link href="#faqs" className="hover:text-sageAccent transition-colors">FAQs</Link></li>
              <li><Link href="#contact" className="hover:text-sageAccent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Clinical Focus */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-charcoal uppercase mb-5">
              Clinical Focus
            </p>
            <ul className="space-y-2.5 text-charcoalLight font-light text-[12px]">
              <li>Anxiety Therapy</li>
              <li>Trauma Recovery</li>
              <li>EMDR Therapy</li>
              <li>Burnout & Perfectionism</li>
              <li>Somatic Nervous System Work</li>
              <li>Mindfulness Integration</li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-charcoal uppercase mb-5">
              Contact & Location
            </p>
            <div className="space-y-2 text-charcoalLight font-light text-[12px] leading-relaxed">
              <p>Santa Monica, CA</p>
              <p className="text-[11px] text-sageDark pt-3 font-medium">
                Serving Santa Monica and Telehealth across California.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="bg-sageDark/90 text-[#F5F0EA] py-3.5 px-6 text-[11px] font-light">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="#" className="hover:underline">Terms & Conditions</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">Disclaimer</Link>
          </div>
          <p className="text-[10px] text-[#F5F0EA]/80 text-center">
            © <span id="current-year">{year}</span> Dr. Maya Reynolds, PsyD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
