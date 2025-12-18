"use client";

import { motion, AnimatePresence } from "framer-motion";

interface PdfViewerModalProps {
  open: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export default function PdfViewerModal({
  open,
  onClose,
  pdfUrl,
  title,
}: PdfViewerModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden shadow-2xl flex flex-col">
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <h3 className="font-semibold text-[#1F2A44]">
                  {title}
                </h3>
                <div className="flex gap-4">
                  <a
                    href={pdfUrl}
                    download
                    className="text-sm font-semibold text-yellow-600"
                  >
                    Download PDF ↓
                  </a>
                  <button
                    onClick={onClose}
                    className="text-sm font-semibold text-[#1F2A44]"
                  >
                    Close ✕
                  </button>
                </div>
              </div>

              {/* PDF */}
              <div className="flex-1 bg-[#F5F5F5]">
                <iframe
                  src={pdfUrl}
                  className="w-full h-full"
                  title={title}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
