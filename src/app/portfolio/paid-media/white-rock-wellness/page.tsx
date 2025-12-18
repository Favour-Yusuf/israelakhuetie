"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function CaseStudy() {
  return (
    <>
      <Navbar />
      <main className="pt-40 px-6 max-w-4xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold text-[#1F2A44]"
        >
          White Rock Wellness
        </motion.h1>

        <Section title="Objective">
          Generate high-quality leads profitably via Meta Ads.
        </Section>

        <Section title="Strategy">
          Full-funnel Meta campaign using lead forms, retargeting,
          and creative testing to reduce CPL.
        </Section>

        <Section title="Execution">
          • Audience research  
          • Creative testing  
          • Daily optimization  
        </Section>

        <Section title="Results">
          <Stats />
        </Section>

      </main>
    </>
  );
}

function Section({ title, children }: any) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-4 text-[#1F2A44]">{title}</h2>
      <p className="text-[#1F2A44]/80 leading-relaxed">{children}</p>
    </section>
  );
}

function Stats() {
  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      <Stat label="Revenue" value="₦10M+" />
      <Stat label="Leads" value="3,364" />
      <Stat label="CPL" value="₦425" />
      <Stat label="Ad Spend" value="₦1.4M" />
    </div>
  );
}

function Stat({ label, value }: any) {
  return (
    <div className="bg-white rounded-xl p-4 text-center">
      <p className="text-sm text-[#1F2A44]/60">{label}</p>
      <p className="text-xl font-bold text-[#1F2A44]">{value}</p>
    </div>
  );
}
