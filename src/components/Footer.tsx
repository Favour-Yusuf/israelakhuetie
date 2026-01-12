"use client";

import { Facebook, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#14263D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* ================= TOP ================= */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* BRAND / NAME */}
          <div className="flex flex-col gap-2">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <p className="text-sm text-white/70 max-w-xs">
              Digital marketer who helps businesses turn attention into real
              demand by designing messaging, channels, and funnels to work
              together.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex gap-16 text-sm font-semibold">
            <div className="flex flex-col gap-2">
              <Link href="/about" className="hover:text-yellow-400 transition">
                About
              </Link>
              <Link
                href="/portfolio"
                className="hover:text-yellow-400 transition"
              >
                Portfolio
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <Link
                href="/experience"
                className="hover:text-yellow-400 transition"
              >
                Experience
              </Link>
              <Link
                href="/contact"
                className="hover:text-yellow-400 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-white/20" />

        {/* ================= BOTTOM ================= */}
        <div className="mt-6 flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          {/* COPYRIGHT */}
          <span className="text-white/70">
            © {new Date().getFullYear()} Israel Akhuetie. All rights reserved.
          </span>

          {/* SOCIAL + CREDIT */}
          <div className="flex flex-col gap-3 md:items-end">
            {/* SOCIALS */}
            <div className="flex items-center gap-4">
              <span className="text-white/70">Follow me</span>

              <a
                href="https://facebook.com/israelakhuetie1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-yellow-400 transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/israelakhuetie/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-yellow-400 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/israelakhuetie/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-yellow-400 transition"
              >
                <Instagram size={18} />
              </a>
            </div>

            {/* MADE WITH LOVE */}
            <span className="text-xs text-white/50">
              Made with ❤️ and intention
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
