"use client";

import { motion } from "framer-motion";

const tabs = [
  "All",
  "Paid Media",
  "Social Media",
  "Copywriting",
  "Funnels",
  "Email Marketing",
];

export default function PortfolioTabs({
  active,
  setActive,
}: {
  active: string;
  setActive: (tab: string) => void;
}) {
  return (
    <div className="flex gap-6 flex-wrap mb-20">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className="relative text-sm font-semibold text-[#1F2A44]"
        >
          {tab}
          {active === tab && (
            <motion.span
              layoutId="underline"
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-500"
            />
          )}
        </button>
      ))}
    </div>
  );
}
