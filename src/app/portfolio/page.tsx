"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioTabs from "@/components/PortfolioTabs";
import PdfViewerModal from "@/components/PdfViewerModal";
import Link from "next/link";
import { useState } from "react";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");

  // PDF MODAL STATE
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

      <main className="bg-[#FFF6E5] min-h-screen pt-40 px-6 pb-4">
        <div className="max-w-7xl mx-auto">

          {/* ================= HEADER ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1F2A44]">
              Portfolio
            </h1>
            <p className="mt-4 text-[#1F2A44]/80 max-w-2xl">
              Paid Media · Copywriting · Funnels · Email Marketing
            </p>
          </motion.div>

          <PortfolioTabs active={activeTab} setActive={setActiveTab} />

          {/* ================= PAID MEDIA ================= */}
          {(activeTab === "All" || activeTab === "Paid Media") && (
            <Section title="Paid Media Case Studies">
              <PaidMediaCard
                brand="White Rock Wellness"
                industry="Healthcare"
                highlight="₦10M+ Revenue in 90 Days"
                href="/portfolio/paid-media/white-rock-wellness"
                metrics={[
                  "Leads: 3,364",
                  "CPL: ₦425",
                  "Ad Spend: ₦1.4M",
                ]}
              />

              <PaidMediaCard
                brand="Washtrack"
                industry="SaaS"
                highlight="884 App Installs in 45 Days"
                href="/portfolio/paid-media/washtrack"
                metrics={[
                  "MRR: ₦30,000",
                  "CPI: ₦235",
                  "Ad Spend: ₦207,320",
                ]}
              />
            </Section>
          )}

          {/* ================= COPYWRITING ================= */}
          {(activeTab === "All" || activeTab === "Copywriting") && (
            <Section title="Copywriting Samples">
              <PdfCard
                title="Ariel Remar Associates"
                type="Website Copy"
                onOpen={() =>
                  openPdf("/pdfs/ariel-remar.pdf", "Ariel Remar – Website Copy")
                }
              />
              <PdfCard
                title="ShopMammy"
                type="Website Copy"
                onOpen={() =>
                  openPdf("/pdfs/shopmammy.pdf", "ShopMammy – Website Copy")
                }
              />
              <PdfCard
                title="Amani"
                type="Landing Page"
                onOpen={() =>
                  openPdf("/pdfs/amani.pdf", "Amani – Landing Page Copy")
                }
              />
            </Section>
          )}

          {/* ================= FUNNELS ================= */}
          {(activeTab === "All" || activeTab === "Funnels") && (
            <Section title="Funnels (PDF)">
              <PdfCard
                title="Tech Champions"
                type="Sales Funnel"
                onOpen={() =>
                  openPdf(
                    "/pdfs/tech-champions-funnel.pdf",
                    "Tech Champions – Funnel"
                  )
                }
              />
              <PdfCard
                title="LIS Debt Recovery"
                type="Sales Page Funnel"
                onOpen={() =>
                  openPdf(
                    "/pdfs/lis-debt-recovery.pdf",
                    "LIS Debt Recovery – Funnel"
                  )
                }
              />
            </Section>
          )}

          {/* ================= EMAIL MARKETING ================= */}
          {(activeTab === "All" || activeTab === "Email Marketing") && (
            <Section title="Email Marketing Results">
              <PdfCard
                title="AboveSuccess"
                type="Newsletter Performance"
                onOpen={() =>
                  openPdf(
                    "/pdfs/abovesuccess-email.pdf",
                    "AboveSuccess – Email Results"
                  )
                }
              />
              <PdfCard
                title="Washtrack"
                type="Email Campaign Performance"
                onOpen={() =>
                  openPdf(
                    "/pdfs/washtrack-email.pdf",
                    "Washtrack – Email Results"
                  )
                }
              />
            </Section>
          )}
        </div>
      </main>

      <Footer />

      {/* ================= PDF MODAL ================= */}
      <PdfViewerModal
        open={pdfOpen}
        onClose={() => setPdfOpen(false)}
        pdfUrl={pdfUrl}
        title={pdfTitle}
      />
    </>
  );
}

/* ================= COMPONENTS ================= */

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {children}
      </div>
    </section>
  );
}

/* ---------- Paid Media Card ---------- */
function PaidMediaCard({
  brand,
  industry,
  highlight,
  href,
  metrics,
}: {
  brand: string;
  industry: string;
  highlight: string;
  href: string;
  metrics: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl p-8 shadow-sm flex flex-col justify-between"
    >
      <div>
        <p className="text-xs uppercase tracking-widest text-[#1F2A44]/60 mb-2">
          {industry}
        </p>
        <h3 className="text-xl font-bold text-[#1F2A44] mb-2">
          {brand}
        </h3>
        <p className="text-lg font-semibold text-yellow-600 mb-6">
          {highlight}
        </p>
        <ul className="space-y-2 text-sm text-[#1F2A44]/80">
          {metrics.map((m) => (
            <li key={m}>• {m}</li>
          ))}
        </ul>
      </div>

      <Link
        href={href}
        className="mt-8 text-sm font-semibold text-[#1F2A44]"
      >
        View Full Case Study →
      </Link>
    </motion.div>
  );
}

/* ---------- PDF Card ---------- */
function PdfCard({
  title,
  type,
  onOpen,
}: {
  title: string;
  type: string;
  onOpen: () => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white border border-[#1F2A44]/20 rounded-xl p-6"
    >
      <h3 className="font-semibold text-[#1F2A44]">{title}</h3>
      <p className="text-sm text-[#1F2A44]/70 mb-4">{type}</p>
      <button
        onClick={onOpen}
        className="text-sm font-semibold text-yellow-600"
      >
        View PDF →
      </button>
    </motion.div>
  );
}
