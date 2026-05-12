import Hero from "@/components/Hero2";
import Navbar from "@/components/Navbar2";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import About from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer2";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFF6E5] flex flex-col">
      <Navbar />
      <Hero />
      <Benefits/>
      <HowItWorks/>
      <Stats/>
      <Services/>
      <Pricing/>
      <About/>
      <FAQ/>
      <FinalCTA/>
    <Footer/>
      
    </main>
  );
}
