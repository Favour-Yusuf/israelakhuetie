"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  "/brand/10lytics.svg",
  "/brand/ARA Blue.svg",
  "/brand/Logo lockup Black.svg",
  "/brand/Amani.png",
  "/brand/citymarket.png",
  "/brand/Difusio.png",
  "/brand/LisDebtRecovery.png",
  "/brand/yellowCowries.png",
];

export default function BrandsMarquee() {
  return (
    <section className="mt-24 pb-24">
      <p className="text-center text-sm uppercase tracking-widest text-[#1F2A44]/60 mb-10">
        Brands I’ve worked with
      </p>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...brands, ...brands].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={logo}
                alt="Brand Logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
