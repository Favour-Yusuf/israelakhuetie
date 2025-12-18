"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const mailtoLink = `mailto:akhuetieisrael04@gmail.com?subject=Contact from ${form.name}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )}`;

  return (
    <>
      <Navbar />

      <main className="bg-[#FFF6E5] min-h-screen pt-40 px-6 pb-24">
        <div className="max-w-6xl mx-auto">

          {/* ================= HEADER ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1F2A44]">
              Let’s Chat
            </h1>
            <p className="mt-4 text-[#1F2A44]/80 max-w-xl text-lg">
              Open to roles, projects, and conversations.
            </p>
          </motion.div>

          {/* ================= CONTENT ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <p className="text-lg text-[#1F2A44]/85 leading-relaxed">
                Whether you’re hiring, building something exciting, or just want
                to connect — I’m always open to meaningful conversations.
              </p>

              {/* CONTACT INFO */}
              <div className="space-y-4">
                <a
                  href="mailto:akhuetieisrael04@gmail.com"
                  className="flex items-center gap-3 text-[#1F2A44] font-semibold hover:text-yellow-600 transition"
                >
                  <Mail size={20} />
                  akhuetieisrael04@gmail.com
                </a>
              </div>

              {/* SOCIALS */}
              <div className="flex gap-6 pt-6">
                <a
                  href="https://www.linkedin.com/in/israelakhuetie/"
                  target="_blank"
                  className="p-3 bg-white rounded-xl shadow-sm hover:-translate-y-1 transition"
                >
                  <Linkedin className="text-[#1F2A44]" />
                </a>

                <a
                  href="https://www.instagram.com/israelakhuetie/"
                  target="_blank"
                  className="p-3 bg-white rounded-xl shadow-sm hover:-translate-y-1 transition"
                >
                  <Instagram className="text-[#1F2A44]" />
                </a>
              </div>
            </motion.div>

            {/* RIGHT SIDE – FORM */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <form className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-[#1F2A44]">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="mt-2 w-full px-4 py-3 rounded-lg border border-[#1F2A44]/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#1F2A44]">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="mt-2 w-full px-4 py-3 rounded-lg border border-[#1F2A44]/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#1F2A44]">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="mt-2 w-full px-4 py-3 rounded-lg border border-[#1F2A44]/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <a
                  href={mailtoLink}
                  className="inline-flex items-center justify-center w-full bg-[#1F2A44] text-white font-semibold py-4 rounded-lg hover:bg-[#162033] transition"
                >
                  Send Email →
                </a>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
