"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const text = "Hello, I’m";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#FFF6E5]">
      <Navbar />

      {/* HERO WRAPPER */}
      <div className="pt-32 md:pt-40 px-6">
        <div className="max-w-6xl mx-auto">
          {/* MOBILE LAYOUT */}
          <div className="flex flex-col items-center text-center md:hidden">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm tracking-wide text-[#1F2A44]"
            >
              {displayText}
            </motion.p>

            <h1 className="mt-2 text-4xl font-extrabold text-[#1F2A44]">
              Israel Akhuetie
            </h1>

            <div className="w-80 h-80 rounded overflow-hidden">
                <Image
                  src="/original LinkedIn profile.png"
                  alt="Israel"
                  width={320}
                  height={320}
                  className="object-cover"
                />
              </div>

            <h2 className="mt-6 text-2xl font-bold text-[#1F2A44]">
              Digital Marketer
            </h2>

            <p className="mt-4 text-sm text-[#1F2A44]/80 max-w-sm">
              “Israel delivers. I've watched him generate leads from Meta Ads
              and drive app installs with consistent success.”
            </p>

            <p className="mt-2 text-sm font-semibold text-[#1F2A44]">
              — Favour Ekenne, CEO, Juba Africa
            </p>

            <p className="mt-6 text-sm text-[#1F2A44]/70">
              Based in Nigeria, Working Worldwide
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {["Resume", "Portfolio", "About", "Experience", "Contact"].map(
                (btn) => (
                  <button
                    key={btn}
                    className="bg-yellow-400 px-5 py-2 rounded-md font-semibold"
                  >
                    {btn}
                  </button>
                )
              )}
            </div>
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="hidden md:grid grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm tracking-widest text-[#1F2A44]"
              >
                {displayText}
              </motion.p>

              <h1 className="mt-2 text-5xl font-extrabold text-[#1F2A44]">
                Israel Akhuetie
              </h1>

              <h2 className="mt-4 text-2xl font-bold text-[#1F2A44]">
                Digital Marketer
              </h2>

              <p className="mt-6 max-w-lg text-[#1F2A44]/80">
                “Israel delivers. I've watched him generate leads from Meta Ads
                and drive app installs with consistent success.”
              </p>

              <p className="mt-2 font-semibold text-[#1F2A44]">
                — Favour Ekenne, CEO, Juba Africa
              </p>

              <p className="mt-6 text-sm text-[#1F2A44]/70">
                Based in Nigeria, Working Worldwide
              </p>

              <div className="mt-8 flex gap-4">
                {["Resume", "Portfolio", "About", "Experience", "Contact"].map(
                  (btn) => (
                    <button
                      key={btn}
                      className="bg-yellow-400 px-6 py-2 rounded-md font-semibold"
                    >
                      {btn}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 rounded overflow-hidden">
                <Image
                  src="/original LinkedIn profile.png"
                  alt="Israel"
                  width={320}
                  height={320}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
