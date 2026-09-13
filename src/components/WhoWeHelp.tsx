import Image from "next/image";
import Link from "next/link";

export default function WhoWeHelp() {
  return (
    <section className="py-24 bg-white" id="who-we-help">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Title with Script Accent */}
        <div className="mb-16">
          <h2 className="font-cormorant text-4xl sm:text-5xl text-charcoal font-normal tracking-tight">
            Who we <span className="font-script-accent text-sageAccent text-5xl sm:text-6xl pl-1">help</span>
          </h2>
        </div>

        {/* 3 Column Clinical Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* Card 1: Anxiety */}
          <div className="flex flex-col group">
            <div className="h-80 sm:h-96 w-full overflow-hidden mb-6 bg-[var(--color-sandMuted)] relative">
              <Image
                src="/images/anxiety-card2.jpeg"
                alt="Individual enjoying calm reflection in daylight"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <h3 className="font-cormorant text-2xl text-charcoal font-normal mb-3">
              Anxiety Therapy in Santa Monica
            </h3>
            <p className="text-[13px] text-charcoalLight leading-relaxed font-light mb-6 flex-grow">
              For adults who appear capable and functional on the outside while quietly carrying constant worry, bodily tension, racing thoughts, or sleep disruption. We identify roots and restore autonomic balance.
            </p>
            <div>
              <Link href="#contact" className="editorial-underline text-[10px] font-semibold tracking-[0.2em] text-charcoal uppercase hover:text-sageAccent">
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Card 2: Trauma & EMDR */}
          <div className="flex flex-col group">
            <div className="h-80 sm:h-96 w-full overflow-hidden mb-6 bg-[var(--color-sandMuted)] relative">
              <Image
                src="/images/trauma-card.jpeg"
                alt="Quiet ocean coastal landscape evoking peace"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <h3 className="font-cormorant text-2xl text-charcoal font-normal mb-3">
              Trauma & EMDR Therapy
            </h3>
            <p className="text-[13px] text-charcoalLight leading-relaxed font-light mb-6 flex-grow">
              Paced, safe healing for single-incident trauma or long-standing childhood wounds and relational patterns. Utilizing EMDR and somatic stabilization to release painful stored memories safely.
            </p>
            <div>
              <Link href="#contact" className="editorial-underline text-[10px] font-semibold tracking-[0.2em] text-charcoal uppercase hover:text-sageAccent">
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Card 3: Burnout & Perfectionism */}
          <div className="flex flex-col group">
            <div className="h-80 sm:h-96 w-full overflow-hidden mb-6 bg-[var(--color-sandMuted)] relative">
              <Image
                src="/images/burnout-card.jpeg"
                alt="Person grounded in peaceful nature mindfulness"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <h3 className="font-cormorant text-2xl text-charcoal font-normal mb-3">
              Burnout & Perfectionism
            </h3>
            <p className="text-[13px] text-charcoalLight leading-relaxed font-light mb-6 flex-grow">
              Tailored care for professionals, creatives, and entrepreneurs depleted by relentless internal pressure, imposter feelings, and difficulty stepping away from work obligations.
            </p>
            <div>
              <Link href="#contact" className="editorial-underline text-[10px] font-semibold tracking-[0.2em] text-charcoal uppercase hover:text-sageAccent">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
