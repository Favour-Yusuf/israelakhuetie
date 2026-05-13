"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Linkedin, Instagram, Mail, X } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValid =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.message.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/akhuetieisrael04@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: "New contact from portfolio",
            _template: "table",
          }),
        }
      );

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#FFF6E5] min-h-screen pt-40 px-6 pb-24">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
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

          {/* CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
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

              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#1F2A44]">
                  Expected response time
                </p>
                <p className="text-sm text-[#1F2A44]/70">
                  Within 24 hours
                </p>
              </div>

              <a
                href="mailto:akhuetieisrael04@gmail.com"
                className="flex items-center gap-3 text-[#1F2A44] font-semibold hover:text-yellow-600 transition"
              >
                <Mail size={20} />
                akhuetieisrael04@gmail.com
              </a>

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

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="mt-2 w-full px-4 py-3 text-black rounded-lg border border-[#1F2A44]/20 focus:ring-2 focus:ring-yellow-400"
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
                    className="mt-2 w-full text-black px-4 py-3 rounded-lg border border-[#1F2A44]/20 focus:ring-2 focus:ring-yellow-400"
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
                    className="mt-2 w-full text-black px-4 py-3 rounded-lg border border-[#1F2A44]/20 focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isValid || loading}
                  className={`w-full py-4 rounded-lg font-semibold transition
                    ${
                      isValid
                        ? "bg-[#1F2A44] text-white hover:bg-[#162033]"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />

      {/* THANK YOU MODAL */}
      <AnimatePresence>
        {submitted && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50"
              onClick={() => setSubmitted(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-6"
            >
              <div className="bg-white max-w-md w-full rounded-2xl p-8 relative shadow-xl text-center">
                <button
                  onClick={() => setSubmitted(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-black"
                >
                  <X size={18} />
                </button>

                <h3 className="text-2xl font-bold text-[#1F2A44] mb-4">
                  Thanks for reaching out 👋
                </h3>

                <p className="text-[#1F2A44]/80 leading-relaxed">
                  Your message has been sent successfully.
                  I’ll get back to you within 24 hours.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
