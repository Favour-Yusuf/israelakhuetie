"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skills = [
  {
    title: "Digital Strategy",
    level: 5,
    description:
      "Competitor research, audience analysis, and multi-channel campaign planning.",
  },
  {
    title: "Paid Media",
    level: 5,
    description:
      "Facebook & Google Ads focused on conversions and measurable outcomes.",
  },
  {
    title: "Organic Growth",
    level: 4,
    description:
      "SEO, social media content, and content marketing that attract and engage.",
  },
  {
    title: "Conversion & Retention",
    level: 5,
    description:
      "Funnels, copywriting, and email marketing built for conversion.",
  },
  {
    title: "Analytics & Optimization",
    level: 4,
    description:
      "GA4, performance tracking, and reporting that drive smarter decisions.",
  },
  {
    title: "Automation Tools",
    level: 4,
    description:
      "Zapier, Zoho, Make, and workflow automations that improve efficiency.",
  },
];

const tools = [
  "meta",
  "googleads",
  "googleanalytics",
  "googletagmanager",
  "systemelogo",
  "mailchimp",
  "klaviyo",
  "sendernet",
  "zoho",
  "canva",
  "hootsuite",
  "buffer",
  "notion",
  "zapier",
  "make",
  "Typeform",
  "meta",
  
];

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FFF6E5] min-h-screen pt-40 px-6 pb-5">
        <div className="max-w-6xl mx-auto">
          {/* ================= SKILLS ================= */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-[#1F2A44]/70">
              Explore My
            </p>
            <h1 className="mt-2 text-5xl font-extrabold text-[#1F2A44]">
              Skills
            </h1>

            <div className="mt-16 space-y-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-[#1F2A44]">
                      {skill.title}
                    </h3>
                    <span className="text-sm text-[#1F2A44]/60">
                      {skill.level}/5
                    </span>
                  </div>

                  <p className="mt-2 text-[#1F2A44]/80 max-w-2xl">
                    {skill.description}
                  </p>

                  {/* BAR */}
                  <div className="mt-4 h-2 w-full bg-[#1F2A44]/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-yellow-400 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ================= TOOLS ================= */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32"
          >
            <p className="text-sm uppercase tracking-widest text-[#1F2A44]/70">
              Tools I Use
            </p>
            <h2 className="mt-2 text-4xl font-extrabold text-[#1F2A44]">
              Marketing Stack
            </h2>

            <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool}
                  whileHover={{ y: -6, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-center"
                >
                  <Image
                    src={`/tools/${tool}.svg`}
                    alt={tool}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ================= EDUCATION ================= */}
          <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="mt-32 mb-40"
>
  {/* SECTION HEADER */}
  <div className="mb-16">
    <p className="text-sm uppercase tracking-widest text-[#1F2A44]/70">
      Education
    </p>
    <h2 className="mt-2 text-4xl font-extrabold text-[#1F2A44]">
      Academic & Professional Training
    </h2>
  </div>

  <div className="grid md:grid-cols-2 gap-16 items-start max-w-5xl">
    {/* ACADEMIC FOUNDATION */}
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
    >
      <motion.h3
        variants={fadeUp}
        className="text-xl font-semibold text-[#1F2A44] mb-8"
      >
        Academic Foundation
      </motion.h3>

      <motion.div variants={fadeUp} className="mb-8">
        <h4 className="font-semibold text-lg text-[#1F2A44]">
          Bachelor of Business Administration (BBA)
        </h4>
        <p className="text-[#1F2A44]/80">
          Major: Digital Marketing
        </p>
        <p className="text-sm text-[#1F2A44]/60">
          Nexford University — Washington, DC · GPA: 3.68 / 4.0 · 2024
        </p>
      </motion.div>

      <motion.div variants={fadeUp}>
        <h4 className="font-semibold text-lg text-[#1F2A44]">
          Associate of Science in Business Administration
        </h4>
        <p className="text-sm text-[#1F2A44]/60">
          Nexford University — Washington, DC · 2023
        </p>
      </motion.div>
    </motion.div>

    {/* CERTIFICATIONS */}
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
      }}
      className="relative"
    >
      {/* Subtle background card */}
      <div className="absolute inset-0 bg-white/60 rounded-2xl -z-10" />

      <motion.h3
        variants={fadeUp}
        className="text-xl font-semibold text-[#1F2A44] mb-8"
      >
        Professional Certifications
      </motion.h3>

      <div className="flex flex-wrap gap-3">
        {[
          "SEO Certification · HubSpot Academy",
          "Email Marketing · HubSpot Academy",
          "Media Buying · Wynbrooke Advertising Academy",
          "Brand, Strategy & Digital Marketing · Nexford",
          "Content Marketing & Social Media · Nexford",
        ].map((cert, index) => (
          <motion.span
            key={index}
            variants={fadeUp}
            whileHover={{ y: -3 }}
            className="px-4 py-2 rounded-full border border-[#1F2A44]/20 text-sm text-[#1F2A44]/80 bg-white"
          >
            {cert}
          </motion.span>
        ))}
      </div>

      {/* CREDIBILITY NOTE */}
      <motion.p
        variants={fadeUp}
        className="mt-10 text-sm text-[#1F2A44]/70 leading-relaxed"
      >
        These certifications reinforce my hands-on experience and ensure
        my strategies stay aligned with modern platforms, algorithms,
        and performance best practices.
      </motion.p>
    </motion.div>
  </div>
</motion.section>

        </div>
      </main>

      <Footer />
    </>
  );
}


const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
