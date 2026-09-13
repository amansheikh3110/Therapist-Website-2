export default function FAQ() {
  return (
    <section className="py-24 bg-white" id="faqs">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-charcoal/70 uppercase mb-2">
            Clarifying Care
          </p>
          <h2 className="font-cormorant text-3xl sm:text-4xl text-charcoal font-normal">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {/* Item 1 */}
          <details className="group border-b border-[var(--color-sandMuted)] pb-5" open>
            <summary className="flex justify-between items-center cursor-pointer list-none font-cormorant text-xl text-charcoal font-medium">
              <span>Do you offer in-person and telehealth sessions?</span>
              <span className="text-sageMuted text-2xl group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="mt-3 text-[13px] text-charcoalLight leading-relaxed font-light">
              Yes. We welcome clients in-person at our serene private suite in Santa Monica, California. We also provide secure video telehealth sessions for clients living anywhere across California.
            </p>
          </details>

          {/* Item 2 */}
          <details className="group border-b border-[var(--color-sandMuted)] pb-5">
            <summary className="flex justify-between items-center cursor-pointer list-none font-cormorant text-xl text-charcoal font-medium">
              <span>What is your clinical approach to trauma and EMDR?</span>
              <span className="text-sageMuted text-2xl group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="mt-3 text-[13px] text-charcoalLight leading-relaxed font-light">
              We prioritize physical and emotional safety first. Before beginning EMDR reprocessing, we ensure you have reliable somatic grounding and distress tolerance resources. The pace is always collaborative and dictated by your nervous system’s comfort.
            </p>
          </details>

          {/* Item 3 */}
          <details className="group border-b border-[var(--color-sandMuted)] pb-5">
            <summary className="flex justify-between items-center cursor-pointer list-none font-cormorant text-xl text-charcoal font-medium">
              <span>How do I get started with therapy?</span>
              <span className="text-sageMuted text-2xl group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="mt-3 text-[13px] text-charcoalLight leading-relaxed font-light">
              You can schedule a complimentary 15-minute phone consultation using our online contact form. This conversation allows us to discuss your goals, answer your questions, and confirm that we are the right therapeutic match.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
