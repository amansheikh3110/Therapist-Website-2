import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhoWeHelp from "@/components/WhoWeHelp";
import QuoteBanner from "@/components/QuoteBanner";
import Expertise from "@/components/Expertise";
import Approach from "@/components/Approach";
import Specialties from "@/components/Specialties";
import Office from "@/components/Office";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <WhoWeHelp />
        <QuoteBanner />
        <Expertise />
        <Approach />
        <Specialties />
        <Office />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
