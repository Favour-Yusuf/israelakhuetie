"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FFF6E5] min-h-screen pt-40 px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-20"
          >
            <p className="text-sm tracking-widest text-[#1F2A44]/70 uppercase">
              Get to Know More
            </p>
            <h1 className="mt-2 text-5xl md:text-6xl font-extrabold text-[#1F2A44]">
              About Israel
            </h1>
          </motion.div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-full h-120 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/israel'sgradimage.jpg"
                  alt="Israel Akhuetie"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Accent block */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-xl -z-10" />
            </motion.div>

           
            {/* TEXT */}
<motion.div
  initial="hidden"
  animate="show"
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  }}
  className="text-[#1F2A44]"
>
  {/* INTRO LINE */}
  <motion.p
    variants={fadeUp}
    className="text-xl md:text-2xl font-semibold leading-snug mb-6"
  >
    I don’t just run ads —
    <span className="text-yellow-500"> I build systems that grow revenue.</span>
  </motion.p>

  {/* STORY BLOCK */}
  <motion.p
    variants={fadeUp}
    className="mb-6 text-lg leading-relaxed text-[#1F2A44]/85"
  >
    I’m a digital marketer with{" "}
    <Highlight>4+ years of hands-on experience</Highlight>{" "}
    building and executing{" "}
    <Highlight>data-backed campaigns</Highlight>{" "}
    across eCommerce, real estate, finance, legal, and SaaS.
    My work helps small to medium-sized businesses scale using
    full-funnel strategies — from first click to final conversion.
  </motion.p>

  {/* PULL QUOTE */}
  <motion.div
    variants={fadeUp}
    className="my-10 p-6 border-l-4 border-yellow-400 bg-white/60 rounded-r-xl"
  >
    <p className="text-xl font-semibold leading-relaxed">
      Every campaign I touch is designed to answer one question:
      <span className="block mt-2 text-yellow-600">
        “How does this make the business more money?”
      </span>
    </p>
  </motion.div>

  {/* EXPERTISE */}
  <motion.p
    variants={fadeUp}
    className="mb-6 text-lg leading-relaxed text-[#1F2A44]/85"
  >
    My expertise spans{" "}
    <Highlight>paid media</Highlight>,{" "}
    <Highlight>SEO</Highlight>,{" "}
    <Highlight>social media</Highlight>,{" "}
    <Highlight>funnels</Highlight>,{" "}
    <Highlight>copywriting</Highlight>, and{" "}
    <Highlight>email marketing</Highlight>.
    I obsess over customer behavior and design journeys that
    move prospects smoothly from awareness to action —
    while squeezing every drop of ROI from the budget.
  </motion.p>

  {/* NUMBERS FLEX */}
  <motion.div
    variants={fadeUp}
    className="grid grid-cols-2 gap-6 my-12"
  >
    <Stat label="Ad Budgets Managed" value="₦500 – ₦1M+" />
    <Stat label="Focus" value="Profit & Scale" />
  </motion.div>

  {/* PHILOSOPHY */}
  <motion.p
    variants={fadeUp}
    className="mb-6 text-lg leading-relaxed text-[#1F2A44]/85"
  >
    I work with{" "}
    <Highlight>direct response principles</Highlight>{" "}
    — which means everything is measurable, scalable,
    and tied directly to business outcomes.
    I test relentlessly, kill what doesn’t work,
    and double down on what does.
  </motion.p>

  {/* PERSONAL NOTE */}
  <motion.p
    variants={fadeUp}
    className="mb-10 text-lg leading-relaxed text-[#1F2A44]/85"
  >
    Outside of marketing, I play football —
    where strategy, teamwork, and execution under pressure
    mirror the same mindset I bring to performance-driven campaigns.
  </motion.p>

  {/* CLOSING STRIP */}
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ delay: 0.8, duration: 0.6 }}
    className="mt-6 h-0.5 bg-yellow-400"
  />

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
    className="mt-6 text-sm uppercase tracking-widest text-[#1F2A44]/70"
  >
    Strategy · Execution · Measurable Growth
  </motion.p>
</motion.div>

          </div>
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

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative font-semibold text-[#1F2A44]">
      <span className="relative z-10">{children}</span>
      <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-300/70 -z-0" />
    </span>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <p className="text-sm text-[#1F2A44]/60 mb-1">{label}</p>
      <p className="text-xl font-bold text-[#1F2A44]">{value}</p>
    </div>
  );
}
