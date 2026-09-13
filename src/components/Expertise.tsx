export default function Expertise() {
  return (
    <section className="py-24 lg:py-28 bg-white border-b border-[var(--color-sandMuted)]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
        <div className="w-full lg:w-1/3">
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[44px] text-charcoal font-normal leading-tight">
            Our areas of<br />
            <span className="font-script-accent text-sageAccent text-5xl lg:text-6xl pl-1 inline-block">expertise</span>
          </h2>
        </div>
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12">
          {/* Col 1 */}
          <div className="space-y-0">
            <div className="py-4 border-b border-[var(--color-sandMuted)] text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal">
              Anxiety & Panic Disorders
            </div>
            <div className="py-4 border-b border-[var(--color-sandMuted)] text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal">
              Trauma & PTSD Recovery
            </div>
            <div className="py-4 border-b border-[var(--color-sandMuted)] text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal">
              Somatic & Nervous System Balance
            </div>
            <div className="py-4 border-b border-[var(--color-sandMuted)] text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal">
              High Internal Pressure & Perfectionism
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-0">
            <div className="py-4 border-b border-[var(--color-sandMuted)] text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal">
              Professional Burnout & Work Stress
            </div>
            <div className="py-4 border-b border-[var(--color-sandMuted)] text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal">
              Healthy Boundaries & Relationships
            </div>
            <div className="py-4 border-b border-[var(--color-sandMuted)] text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal">
              Life Transitions & Identity Work
            </div>
            <div className="py-4 border-b border-[var(--color-sandMuted)] text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal text-sageAccent">
              ...And More
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
