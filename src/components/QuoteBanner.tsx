import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative w-full h-[400px] lg:h-[480px] overflow-hidden flex items-center justify-center">
      <Image 
        src="/images/quote-banner.jpeg" 
        alt="Open peaceful ocean beach landscape" 
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-charcoal/35 backdrop-brightness-95"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <blockquote className="font-cormorant text-2xl sm:text-3xl lg:text-[38px] font-normal leading-snug drop-shadow-sm">
          “You deserve a place where your story is heard, valued, and understood. <span className="italic font-light">Nothing will be too heavy for us to carry together.”</span>
        </blockquote>
        <p className="mt-6 text-[11px] uppercase tracking-[0.24em] font-medium text-[var(--color-linen)]/90">
          — Dr. Maya Reynolds, PsyD
        </p>
      </div>
    </section>
  );
}
