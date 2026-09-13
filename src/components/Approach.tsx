import Image from "next/image";
import Link from "next/link";

export default function Approach() {
  return (
    <section className="py-24 bg-[#FAF7F2]" id="approach">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-[58%] px-8 sm:px-14 lg:pl-20 lg:pr-16 max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-charcoal/70 uppercase mb-4">
            How We Work
          </p>
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[44px] text-charcoal font-normal leading-tight mb-10">
            We’re here to make a grounded difference.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px] leading-relaxed text-charcoalLight font-light mb-8">
            <div>
              <p className="font-medium tracking-wide text-charcoal uppercase text-[11px] mb-3 leading-snug">
                The clients we work with carry so much at once; it can be hard to prioritize themselves.
              </p>
              <p>
                In our Santa Monica office and virtual appointments, your safety and autonomy are our highest priorities. We listen with clinical precision and warmth to tailor every session to your history, rather than following rigid one-size-fits-all scripts.
              </p>
            </div>
            <div>
              <p>
                We gently weave together cognitive clarity (CBT), deep physiological healing (EMDR and somatic grounding), and practical relational boundaries. Our goal is to walk alongside you with steady compassion, equipping you to reconnect with your inherent calm and strength.
              </p>
            </div>
          </div>
          <div>
            <Link href="#contact" className="editorial-underline text-[10px] font-semibold tracking-[0.2em] uppercase text-charcoal hover:text-sageAccent">
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[42%] mt-12 lg:mt-0 h-[440px] lg:h-[600px] overflow-hidden relative">
          <Image 
            src="/images/approach-image.jpeg" 
            alt="Warm sunlit serene setting" 
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
