"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  "/brand/10lytics.png",
  "/brand/ARA-Blue.svg",
  "/brand/Logo-lockup-Black.svg",
  "/brand/Amani.png",
  "/brand/citymarket.png",
  "/brand/Difusio.png",
  "/brand/LisDebtRecovery.png",
  "/brand/yellowCowries.png",
];

export default function BrandsMarquee() {
  return (
    <section className="mt-24 pb-24">
      <p className="mb-10 text-center text-sm uppercase tracking-widest text-[#1F2A44]/60">
        Brands I’ve worked with
      </p>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex w-max gap-16"
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
              className="flex items-center justify-center"
            >
              <Image
                src={logo}
                alt="Brand"
                width={120}
                height={60}
                className="
                  object-contain
                  transition
                  duration-300
                  ease-out
                  filter
                  grayscale
                  brightness-0
                  hover:grayscale-0
                  hover:brightness-100
                "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
