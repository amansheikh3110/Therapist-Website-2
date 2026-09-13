import Image from "next/image";
import Link from "next/link";

export default function Specialties() {
  return (
    <section className="py-24 bg-white" id="specialties">
      <div className="w-full mb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-[50%] h-[320px] lg:h-[460px] overflow-hidden relative">
            <Image 
              src="/images/specialties-image.jpeg" 
              alt="Family walking peacefully at coastline" 
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full lg:w-[50%] px-8 sm:px-14 lg:px-20 py-10 lg:py-0">
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[46px] font-normal text-charcoal leading-[1.2]">
              Honoring where you’ve been <span className="font-script-accent text-sageAccent text-4xl lg:text-6xl pl-1 pr-1 font-normal">&</span> helping shape where you’re headed.
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="w-full lg:w-1/4">
            <h3 className="font-cormorant text-3xl text-charcoal font-normal">
              Our <span className="font-script-accent text-sageAccent text-4xl">specialties</span><br />include...
            </h3>
          </div>
          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
            {/* Item 1 */}
            <div>
              <h4 className="font-cormorant text-2xl text-charcoal font-normal mb-3">Trauma Recovery</h4>
              <p className="text-[13px] text-charcoalLight font-light leading-relaxed mb-4">
                We don’t always know when and how we’ve experienced trauma. In therapy, we work together to help you process your past, understand what’s causing you to feel "stuck," and regain a visceral sense of safety and agency.
              </p>
              <Link href="#contact" className="editorial-underline text-[10px] font-semibold tracking-[0.2em] text-charcoal uppercase hover:text-sageAccent">
                LEARN MORE
              </Link>
            </div>
            {/* Item 2 */}
            <div>
              <h4 className="font-cormorant text-2xl text-charcoal font-normal mb-3">EMDR Reprocessing</h4>
              <p className="text-[13px] text-charcoalLight font-light leading-relaxed mb-4">
                Eye Movement Desensitization and Reprocessing (EMDR) is a powerful, evidence-backed modality that aids the brain in reprocessing painful or distressing memories so they no longer trigger acute daily distress.
              </p>
              <Link href="#contact" className="editorial-underline text-[10px] font-semibold tracking-[0.2em] text-charcoal uppercase hover:text-sageAccent">
                LEARN MORE
              </Link>
            </div>
            {/* Item 3 */}
            <div>
              <h4 className="font-cormorant text-2xl text-charcoal font-normal mb-3">Anxiety & Panic Relief</h4>
              <p className="text-[13px] text-charcoalLight font-light leading-relaxed mb-4">
                Moving past perpetual alarm states and catastrophic thoughts through physiological nervous system regulation, cognitive reframing, and actionable somatic stabilization techniques.
              </p>
              <Link href="#contact" className="editorial-underline text-[10px] font-semibold tracking-[0.2em] text-charcoal uppercase hover:text-sageAccent">
                LEARN MORE
              </Link>
            </div>
            {/* Item 4 */}
            <div>
              <h4 className="font-cormorant text-2xl text-charcoal font-normal mb-3">Burnout & High Achievers</h4>
              <p className="text-[13px] text-charcoalLight font-light leading-relaxed mb-4">
                High-functioning exhaustion requires intentional, specialized care. We unpack internalized perfectionism, rebalance boundary fatigue, and craft life rhythms that preserve both well-being and ambition.
              </p>
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
