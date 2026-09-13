import Image from "next/image";

export default function Office() {
  return (
    <section className="py-24 bg-[#F5F0EA] border-y border-[var(--color-sandMuted)]/60" id="office">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-charcoal/70 uppercase mb-3">
            A Calm Space for Healing
          </p>
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[46px] font-normal text-charcoal">
            Our Santa Monica <span className="italic text-sageDark">Sanctuary</span>
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-charcoalLight font-light">
            Located in Santa Monica, California. A quiet, private suite intentionally designed to feel calm and grounding, with abundant natural light, exposed brick, and an uncluttered atmosphere. Clients often share that the space itself helps them feel more at ease when they arrive. In-person therapy is offered here, alongside secure telehealth appointments across California.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Office Image 1 */}
          <div className="flex flex-col bg-white p-4 shadow-sm border border-[var(--color-sandMuted)]">
            <div className="h-80 sm:h-[420px] overflow-hidden relative">
              <Image 
                src="/images/office1.jpeg" 
                alt="Sunlit Santa Monica therapy office with exposed brick and natural light" 
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="pt-4 px-2">
              <p className="font-cormorant text-lg text-charcoal">Warm Natural Light & Architectural Calm</p>
              <p className="text-xs text-charcoalLight font-light mt-1">Tall airy windows and acoustic warmth to foster ease and open conversation.</p>
            </div>
          </div>

          {/* Office Image 2 */}
          <div className="flex flex-col bg-white p-4 shadow-sm border border-[var(--color-sandMuted)]">
            <div className="h-80 sm:h-[420px] overflow-hidden relative">
              <Image 
                src="/images/office2.jpeg" 
                alt="Thoughtfully curated seating area with soothing neutral tones and botanicals" 
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="pt-4 px-2">
              <p className="font-cormorant text-lg text-charcoal">Intentional Seating & Serene Ambiance</p>
              <p className="text-xs text-charcoalLight font-light mt-1">Private, supportive furnishings designed to provide grounding comfort throughout your session.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
