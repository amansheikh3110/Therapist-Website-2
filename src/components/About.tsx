import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 lg:py-32 bg-[#FAF7F2] border-t border-[var(--color-sandMuted)]/40" id="about">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content Column */}
        <div className="w-full lg:w-[60%] px-6 sm:px-14 lg:pl-20 lg:pr-16 max-w-3xl">
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[46px] font-normal leading-tight text-charcoal mb-8 sm:mb-12">
            You’re holding onto hope that life can be better than it is right now.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 text-[13px] leading-relaxed text-charcoalLight font-light">
            {/* Col A */}
            <div>
              <p className="font-medium tracking-wide text-charcoal uppercase text-[11px] mb-3 leading-snug">
                AT DR. MAYA REYNOLDS PSYCHOLOGY WE HELP MAKE THAT HOPE A REALITY.
              </p>
              <p>
                Whether you're a high-achiever feeling exhausted under internal pressure, navigating chronic panic, or seeking to resolve long-standing trauma wounds, we provide an empathetic, grounded haven where you don't have to hold it all alone.
              </p>
            </div>
            {/* Col B */}
            <div>
              <p className="mb-4">
                First and foremost, we believe what you are experiencing is real, valid, and worthy of collaborative support. Our Santa Monica practice offers in-person care and telehealth throughout California, integrating CBT, EMDR, and nervous system regulation.
              </p>
              <Link href="#approach" className="editorial-underline text-[10px] font-medium tracking-[0.2em] uppercase text-charcoal hover:text-sageAccent mt-2 inline-block">
                LEARN MORE ABOUT OUR CARE
              </Link>
            </div>
          </div>
        </div>

        {/* Right Tall Vertical Shoreline Image */}
        <div className="w-full lg:w-[40%] mt-10 lg:mt-0 h-[300px] sm:h-[420px] lg:h-[620px] overflow-hidden relative">
          <Image 
            src="/images/value-prop-shore.jpeg" 
            alt="Gentle Pacific coast wave foam on sandy shore" 
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
