'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ── paste the logo base64 into a separate file or use your own image ──
// For now we inline the src directly on the <img> tag via a constant
const LOGO_SRC =
  'data:image/png;base64,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';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(255,255,234,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 64, maxWidth: 'var(--max)', margin: '0 auto', padding: '0 var(--pad)',
        }}>
          {/* Logo */}
          <Link href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_SRC} alt="Zubaa" style={{ width: 36, height: 36, borderRadius: 8 }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: 'var(--dark)' }}>
              Zubaa
            </span>
          </Link>

          {/* Desktop links */}
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <Link href="#services" style={{ fontSize: 13, fontWeight: 500, color: 'var(--gray)' }}>Services</Link>
            <Link href="#about" style={{ fontSize: 13, fontWeight: 500, color: 'var(--gray)' }}>About</Link>
            <Link
              href="https://wa.me/2348114595848?text=Hi%2C%20I%27d%20like%20to%20speak%20with%20an%20expert"
              style={{
                background: 'var(--dark)', color: 'var(--cream)',
                padding: '8px 18px', borderRadius: 'var(--radius-sm)',
                fontSize: 13, fontWeight: 500,
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-hamburger"
            aria-label="Toggle menu"
            style={{
              display: 'none', flexDirection: 'column', gap: 5,
              cursor: 'pointer', padding: 4, background: 'none', border: 'none',
            }}
          >
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--dark)', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--dark)', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--dark)', borderRadius: 2 }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0,
          background: 'var(--cream)', borderBottom: '1px solid var(--border)',
          padding: '20px var(--pad)', zIndex: 99,
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {['#services', '#pricing', '#about'].map((href, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 15, fontWeight: 500, color: 'var(--dark)',
                padding: '8px 0', borderBottom: '1px solid var(--border)',
              }}
            >
              {['Services', 'Pricing', 'About'][i]}
            </Link>
          ))}
          <Link
            href="https://wa.me/2348114595848?text=Hi%2C%20I%27d%20like%20to%20speak%20with%20an%20expert"
            onClick={() => setMenuOpen(false)}
            style={{ fontSize: 15, fontWeight: 500, color: 'var(--dark)', padding: '8px 0' }}
          >
            Contact Us
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}