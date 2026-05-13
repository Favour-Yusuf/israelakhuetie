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
              <div className="relative w-full h-[480px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/israel'sgradimage.jpg"
                  alt="Israel Akhuetie"
                  fill
                  className="object-cover"
                  priority
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
              <motion.p
                variants={fadeUp}
                className="mb-6 text-lg leading-relaxed text-[#1F2A44]/85"
              >
                I’m a digital marketer with 4+ years of experience working on
                campaigns and growth initiatives across eCommerce, real estate,
                finance, legal, and SaaS.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mb-6 text-lg leading-relaxed text-[#1F2A44]/85"
              >
                I enjoy understanding how people actually make decisions online
                and using that insight to shape messaging, funnels, and campaigns
                that move from awareness to conversion. My work spans conversion
                rate optimization (CRO), paid media, funnel strategy,
                copywriting, email marketing, SEO, and social media management.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mb-6 text-lg leading-relaxed text-[#1F2A44]/85"
              >
                I bring a systems-first approach to marketing. I’m comfortable
                turning broad business objectives into clear execution plans,
                aligning channels around a single strategy, and using performance
                data to identify what should be scaled, optimized, or retired.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-lg leading-relaxed text-[#1F2A44]/85"
              >
                I work best in environments where collaboration is valued,
                feedback is direct, and marketing is treated as a long-term
                growth function rather than a one-off campaign.
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
