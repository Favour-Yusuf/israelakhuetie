import Hero from "@/components/Hero";
import BrandsMarquee from "@/components/BrandsMarquee";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFF6E5] flex flex-col">
      <Hero />
      <BrandsMarquee />
      <Footer />
    </main>
  );
}
