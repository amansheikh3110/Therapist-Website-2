import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-[var(--color-sandMuted)]/60" id="contact">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-[58%] px-8 sm:px-14 lg:pl-20 lg:pr-16 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-charcoal/70 uppercase mb-4">
            Schedule an Appointment
          </p>
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[46px] text-charcoal font-normal leading-tight mb-6">
            Find a therapist who is the right fit for <span className="font-script-accent text-sageAccent text-5xl lg:text-6xl pl-1">you.</span>
          </h2>
          <p className="text-[13px] text-charcoalLight font-light leading-relaxed mb-4">
            Coming to therapy is a courageous decision, and connecting with the right therapist makes all the difference. We understand that your journey is personal, and we're here to support you with clinical rigor and genuine understanding every step of the way.
          </p>
          <p className="text-[13px] text-charcoalLight font-light leading-relaxed mb-8">
            Click the button below to schedule your complimentary 15-minute consultation or reach out directly.
          </p>
          <div>
            <Link
              href="#contact"
              className="inline-block px-8 py-2.5 border border-charcoal rounded-full text-[11px] font-medium tracking-[0.2em] text-charcoal uppercase hover:bg-charcoal hover:text-white transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[42%] mt-12 lg:mt-0 h-[420px] lg:h-[580px] overflow-hidden relative">
          <Image 
            src="/images/cta-shore.jpeg" 
            alt="Beach shoreline sand detail representing grounding" 
            fill
            className="object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
