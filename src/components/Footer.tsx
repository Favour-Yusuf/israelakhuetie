export default function Footer() {
  return (
    <footer className="bg-[#14263D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Logo */}
          <div className="w-10 h-10 bg-yellow-400 rounded flex items-center justify-center font-bold text-black">
            IA
          </div>

          {/* Links */}
          <div className="flex gap-16 text-sm font-semibold">
            <div className="flex flex-col gap-2">
              <span>About</span>
              <span>Portfolio</span>
            </div>

            <div className="flex flex-col gap-2">
              <span>Experience</span>
              <span>Contact</span>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-8 border-t border-white/30" />

        {/* BOTTOM */}
        <div className="mt-4 flex flex-col md:flex-row md:justify-between gap-4 text-sm">
          <span>Copyright © 2025 Israel Akhuetie</span>
          <span>Follow Me:</span>
        </div>
      </div>
    </footer>
  );
}
