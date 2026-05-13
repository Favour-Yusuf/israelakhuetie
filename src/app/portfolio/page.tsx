"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioTabs from "@/components/PortfolioTabs";
import Image from "next/image";
import { useState } from "react";

/* ================= PDF MODAL ================= */

function PdfViewerModal({
  open,
  onClose,
  pdfUrl,
  title,
}: {
  open: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
          >
            <div className="bg-white w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden flex flex-col">
              <div className="flex justify-between items-center px-6 py-4 border-b">
                <h3 className="font-semibold text-[#1F2A44]">{title}</h3>
                <button onClick={onClose} className="text-sm font-semibold">
                  Close ✕
                </button>
              </div>

              <iframe src={pdfUrl} className="w-full h-full" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ================= PAGE ================= */

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [pdfOpen, setPdfOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [pdfTitle, setPdfTitle] = useState("");

  const openPdf = (url: string, title: string) => {
    setPdfUrl(url);
    setPdfTitle(title);
    setPdfOpen(true);
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#FFF6E5] min-h-screen pt-40 px-6 pb-5">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <h1 className="text-6xl font-extrabold text-[#1F2A44]">
              Portfolio
            </h1>
            <p className="mt-4 text-[#1F2A44]/80">
              Paid Media · Social Media · Copywriting · Funnels · Email
            </p>
          </motion.div>

          <PortfolioTabs active={activeTab} setActive={setActiveTab} />

          {/* ================= PAID MEDIA ================= */}
          {(activeTab === "All" || activeTab === "Paid Media") && (
            <Section title="Paid Media">
              <DriveCard
                image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208520/Portfolio%20Visuals%281%29/White_Rock_wellness_lffumf.png"
                title="White Rock Wellness"
                subtitle="Meta Ads · Lead Generation"
                bullets={[
                  "Leads: 3,364",
                  "Revenue: ₦10M+",
                  "CPL: ₦425",
                  "Ad Spend: ₦1.4M",
                ]}
                link="https://drive.google.com/drive/folders/1w7TPbaBFEhuG-KdfDUj381R-qydhl2XX"
              />

              <DriveCard
                image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208499/Portfolio%20Visuals%281%29/Paid_Media_Washtrack_dhtrac.png"
                title="Washtrack"
                subtitle="Meta Ads · App Install"
                bullets={[
                  "Installs: 884",
                  "MRR: ₦30,000",
                  "CPI: ₦235",
                  "Ad Spend: ₦207,320",
                ]}
                link="https://drive.google.com/drive/folders/1y3fSsVwznzAn4bKrrOf6cj6UohFnFT7a"
              />

              <DriveCard
                image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208503/Portfolio%20Visuals%281%29/Cypex_ws0ap9.png"
                title="Cypex"
                subtitle="Meta Ads · Lead Generation"
                bullets={[
                  "Leads: 40",
                  "Bookings: 17",
                  "Revenue: ₦595,000",
                  "Ad Spend: ₦12,500",
                ]}
                link="https://drive.google.com/drive/folders/1DbAKUFPIiAD3GLoDwHTwKF5k8qXPtKwQ"
              />

              <DriveCard
                image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208513/Portfolio%20Visuals%281%29/Tech_champions_lead_gen_vcdv2w.png"
                title="Tech Champions"
                subtitle="Meta Ads · Lead Generation"
                bullets={[
                  "Leads: 247",
                  "Bookings: 30",
                  "Pipeline: ₦741M",
                  "CPL: ₦493",
                ]}
                link="https://drive.google.com/drive/folders/1C2igtEgl31je9q3zLjR6Eq2_9r8NP0gU"
              />
            </Section>
          )}

          {/* ================= COPYWRITING (PDF MODAL) ================= */}
          {(activeTab === "All" || activeTab === "Copywriting") && (
            <Section title="Copywriting">
              <PdfCard
                image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208521/Portfolio%20Visuals%281%29/Copywriting_Ariel_Remar_bgutme.png"
                title="Ariel Remar Associates"
                subtitle="Website Copy"
                industry="Investment Migration Advisory"
                onOpen={() =>
                  openPdf("/pdfs/Web Copy (Ariel Remar).pdf", "Ariel Remar Website Copy")
                }
              />

              <PdfCard
                image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208507/Portfolio%20Visuals%281%29/Shopmammy_j7cwql.png"
                title="ShopMammy"
                subtitle="Website Copy"
                industry="Saas"
                onOpen={() =>
                  openPdf("/pdfs/Shop Mammy.pdf", "ShopMammy Website Copy")
                }
              />

              <PdfCard
                image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208506/Portfolio%20Visuals%281%29/Amani_cxrqi8.png"
                title="Amani"
                subtitle="Landing Page"
                industry="Real Estate"
                onOpen={() =>
                  openPdf("/pdfs/Amani Waitlist Copy.pdf", "Amani Landing Page")
                }
              />
              <PdfCard
                image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208519/Portfolio%20Visuals%281%29/Tech_Champions_nwcded.png"
                title="Tech Champions"
                subtitle="Optin Page "
                industry="IT Services & Solutions"
                onOpen={() =>
                  openPdf("/pdfs/Free App Checklist _ TYP.pdf", "Tech Champions Optin Page")
                }
              />
              <PdfCard
                image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208506/Portfolio%20Visuals%281%29/LIS_Debt_Recovery_Company_g8ctto.png"
                title="LIS Debt Recovery Company"
                subtitle="Email"
                industry="Legal Services"
                onOpen={() =>
                  openPdf("/pdfs/Emails Sequence.pdf", "LIS Debt Recovery Company Email")
                }
              />
              <PdfCard
                image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208507/Portfolio%20Visuals%281%29/Atbods_xlp9et.png"
                title="Atbod"
                subtitle="Sales Page"
                industry="Graphic Design"
                onOpen={() =>
                  openPdf("/pdfs/Atbods Copy.pdf", "Atbod Sales Page")
                }
              />
              <PdfCard
                image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208507/Portfolio%20Visuals%281%29/Montero_Digitals_rxqs7r.png"
                title="Monero Digitals"
                subtitle="Sales Page"
                industry="Web3 (BizOp)"
                onOpen={() =>
                  openPdf("/pdfs/Land Web3 Jobs.pdf", "Monero Digitals Sales Page")
                }
              />
              <PdfCard
                image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208518/Portfolio%20Visuals%281%29/Washtrack_2_cxbpw4.png"
                title="Washtrack"
                subtitle="FB Ad"
                industry="Saas"
                onOpen={() =>
                  openPdf("/pdfs/[App Install] Washtrack.pdf", "Monero Digitals Sales Page")
                }
              />
            </Section>
          )}


          {(activeTab === "All" || activeTab === "Funnels") && (
  <Section title="Funnels">
    <DriveCard
      image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208506/Portfolio%20Visuals%281%29/Funnel_Tech_champions_otu7y5.png"
      title="Tech Champions"
      subtitle="Tech Training · Sales Page"
      bullets={[
        "High-conversion long-form sales page",
        "Clear value positioning",
        "Built to support paid traffic",
      ]}
      link="https://drive.google.com/drive/folders/1ut8NX67Ix7LQYP4YCgN5QescZTQDIo6e?usp=sharing"
    />

    <DriveCard
      image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208506/Portfolio%20Visuals%281%29/LIS_Debt_Recovery_Company_2_tilxm4.png"
      title="LIS Debt Recovery Company"
      subtitle="Legal Services · Sales Page"
      bullets={[
        "Trust-focused copy structure",
        "Clear CTA placement",
        "Lead qualification messaging",
      ]}
      link="https://drive.google.com/drive/folders/1ut46Mo85ldnTuXoIK361fCuOr1w1dOSe?usp=sharing"
    />

    <DriveCard
      image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208517/Portfolio%20Visuals%281%29/Tech_Champions_2_qreeie.png"
      title="Tech Champions"
      subtitle="Tech Training · Lead Generation Funnel"
      bullets={[
        "Opt-in focused landing page",
        "Free checklist incentive",
        "Optimized for Meta Ads traffic",
      ]}
      link="https://drive.google.com/drive/folders/11_dBl2UhH4LtCEzavPEelwJ4smvHtDyI?usp=sharing"
    />
  </Section>
)}

{(activeTab === "All" || activeTab === "Email Marketing") && (
  <Section title="Email Marketing">
    <DriveCard
      image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208493/Portfolio%20Visuals%281%29/Above_Success_nxvref.png"
      title="AboveSuccess"
      subtitle="Personal Development · Newsletter Strategy"
      bullets={[
        "List growth: 0 → 56 (organic)",
        "38% average open rate",
        "35% click-through rate",
      ]}
      link="https://drive.google.com/drive/folders/1239j_IvVm-d6uUJF4LCWrmqiqvK7_t-C?usp=sharing"
    />

    <DriveCard
      image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208512/Portfolio%20Visuals%281%29/Tech_Champions_3_efjel1.png"
      title="Tech Champions"
      subtitle="App Development · Email Automation"
      bullets={[
        "List growth: 0 → 116 (paid)",
        "25.3% average open rate",
        "15.66% click-through rate",
      ]}
      link="https://drive.google.com/drive/folders/18XuQ8_Iz8odqyEdlcbmvgy80MJ90QKsS?usp=sharing"
    />

    <DriveCard
      image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208520/Portfolio%20Visuals%281%29/Email_Marketing_Washtrack_gvccxw.png"
      title="Washtrack"
      subtitle="SaaS · Email Campaigns"
      bullets={[
        "List growth: 0 → 476",
        "25.31% average open rate",
        "Automation & segmentation management",
      ]}
      link="https://drive.google.com/drive/folders/1fkeuJOOmuRYuoGrk6ueNuE_PvoSpf37S?usp=sharing"
    />
  </Section>
)}

{(activeTab === "All" || activeTab === "Social Media") && (
  <Section title="Social Media Management">
    <DriveCard
      image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208518/Portfolio%20Visuals%281%29/Washtrack_rd7kai.png"
      title="WashTrack"
      subtitle="SaaS · Social Media Management (10.2025 – 12.2025)"
      bullets={[
        "Campaign ideation & activity planning",
        "Content planning & strategy",
        "Creative research & direction",
        "Copywriting: FB, IG, X, video scripts, emails",
        "Account management: FB, IG, X",
      ]}
      link="https://drive.google.com/drive/folders/11m0lqVahfG8CcrlCMVLI4BMvms7eHQD8"
    />

    <DriveCard
      image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208506/Portfolio%20Visuals%281%29/Socials_City_Market_xszy8o.png"
      title="CityMarket"
      subtitle="Retail & Ecommerce · Social Media (12.2024 – 03.2025)"
      bullets={[
        "Campaign activity ideation",
        "Content planning & strategy",
        "Creative research & direction",
        "Copywriting: FB, IG, X",
        "Video scripts & brochure copy",
      ]}
      link="https://drive.google.com/drive/folders/1pD1EGnuwTUDxfa4Ipi8Y78XaKrCc7OXs"
    />

    <DriveCard
      image="https://res.cloudinary.com/dcuad6p9z/image/upload/v1768208522/Portfolio%20Visuals%281%29/Yellow_Cowries_emg88l.png"
      title="Yellow Cowries"
      subtitle="Financial Literacy NGO · Social Media (12.2024 – 04.2025)"
      bullets={[
        "Campaign ideation & strategy",
        "Content planning & creative direction",
        "Copywriting: FB, IG, X, LinkedIn",
        "Video scripts, proposals & emails",
        "Account management: FB, IG, X, LinkedIn",
      ]}
      link="https://drive.google.com/drive/folders/18H6TeVwkQJfZP3A6i79Gaq-zsKwic8u8"
    />
  </Section>
)}



        </div>

      </main>

      <Footer />

      <PdfViewerModal
        open={pdfOpen}
        onClose={() => setPdfOpen(false)}
        pdfUrl={pdfUrl}
        title={pdfTitle}
      />
    </>
  );
}

/* ================= SHARED COMPONENTS ================= */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-32">
      <h2 className="text-4xl font-extrabold text-[#1F2A44] mb-12">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {children}
      </div>
    </section>
  );
}

/* ---------- Google Drive Card ---------- */
function DriveCard({
  image,
  title,
  subtitle,
  bullets,
  link,
}: {
  image: string;
  title: string;
  subtitle: string;
  bullets: string[];
  link: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm"
    >
      <div className="relative w-full aspect-[4/5] bg-[#0F1B2D] rounded-xl overflow-hidden">
  <Image
    src={image}
    alt={title}
    fill
    className="object-contain p-4"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>


      <div className="p-6">
        <h3 className="font-bold text-[#1F2A44]">{title}</h3>
        <p className="text-sm text-[#1F2A44]/70 mb-4">{subtitle}</p>

        <ul className="text-sm text-[#1F2A44]/80 space-y-1 mb-4">
          {bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>

        <span className="text-sm font-semibold text-yellow-600">
          View More →
        </span>
      </div>
    </motion.a>
  );
}

/* ---------- PDF Card ---------- */
function PdfCard({
  image,
  title,
  subtitle,
  industry,
  onOpen,
}: {
  image: string;
  title: string;
  subtitle: string;
  industry: string;
  onOpen: () => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer"
      onClick={onOpen}
    >
      <div className="relative w-full aspect-[4/5] bg-[#0F1B2D] rounded-xl overflow-hidden">
  <Image
    src={image}
    alt={title}
    fill
    className="object-contain p-4"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>

      <div className="p-6">
        <h3 className="font-bold text-[#1F2A44]">{title}</h3>
        <p className="text-sm text-[#1F2A44]/70 mb-4">{subtitle}</p>
        <p className="text-sm text-[#1F2A44]/70 mb-4">{industry}</p>

        <span className="text-sm font-semibold text-yellow-600">
          View Copy →
        </span>
      </div>
    </motion.div>
  );
}
