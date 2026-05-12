"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PaidMediaCard({
  title,
  industry,
  metrics,
  href,
}: any) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl p-8 shadow-sm"
    >
      <h3 className="text-xl font-bold text-[#1F2A44]">{title}</h3>
      <p className="text-sm text-[#1F2A44]/60">{industry}</p>

      <p className="mt-4 text-[#1F2A44] font-semibold">{metrics}</p>

      <Link
        href={href}
        className="inline-block mt-6 text-yellow-600 font-semibold"
      >
        View Case Study →
      </Link>
    </motion.div>
  );
}
