import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#FAF7F2] min-h-fit lg:h-[84vh] lg:min-h-[620px] lg:max-h-[900px] flex items-center overflow-hidden" id="hero">
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between">
        {/* Editorial Copy Column */}
        <div className="w-full lg:w-[57%] px-6 sm:px-10 lg:px-16 pt-10 pb-8 lg:py-0 flex flex-col justify-center max-w-2xl lg:order-2">
          {/* Eyebrow Tag */}
          <p className="text-[11px] font-medium tracking-[0.22em] text-charcoal/80 uppercase mb-4 sm:mb-5">
            Therapy & Counseling in Santa Monica & Across CA
          </p>
          {/* Main Title with Script Accent */}
          <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-[58px] leading-[1.14] text-charcoal font-normal mb-5 sm:mb-6">
            Rebuild your foundation on solid ground and finally begin to <span className="font-script-accent text-sageAccent text-5xl lg:text-7xl lowercase pl-1 pr-1.5 -rotate-2 inline-block">thrive.</span>
          </h1>
          {/* Subtitle copy */}
          <p className="text-sm lg:text-[15px] leading-relaxed text-charcoalLight/90 font-light mb-8 sm:mb-9 max-w-lg">
            Evidence-based therapy for adults navigating anxiety, trauma, and burnout to reflect, heal, and find sustainable relief in an authentic, supportive space.
          </p>
          {/* Underlined CTA Link */}
          <div>
            <Link href="#contact" className="editorial-underline text-[11px] font-semibold tracking-[0.22em] text-charcoal uppercase hover:text-sageAccent">
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </div>

        {/* Dr. Maya's Portrait */}
        <div className="w-full lg:w-[35%] lg:h-full relative overflow-hidden bg-sandStone/20 flex-shrink-0 lg:order-1 flex items-center justify-center px-4 pb-8 sm:pb-10 lg:px-0 lg:pb-0">
          <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none lg:w-full lg:h-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto relative overflow-hidden rounded-sm lg:rounded-none shadow-sm lg:shadow-none">
            <Image 
              src="/images/Dr. Maya Reynolds.png" 
              alt="Dr. Maya Reynolds, PsyD - Santa Monica Licensed Clinical Psychologist" 
              fill
              className="object-cover object-[center_12%] lg:object-top"
              priority
            />
          </div>
        </div>

        {/* Right Ocean Landscape Sliver (Desktop only) */}
        <div className="hidden xl:block w-[8%] h-full relative overflow-hidden flex-shrink-0 lg:order-3">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#FAF7F2] opacity-30 z-10"></div>
          <div className="w-full h-full bg-slate-300 relative">
            <Image 
              src="/images/hero-ocean.jpeg" 
              alt="Serene Santa Monica coastline waters" 
              fill
              className="object-cover object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
