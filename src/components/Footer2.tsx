import Link from 'next/link';

const LOGO_SRC =
  'data:image/png;base64,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';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', padding: '48px 0 32px' }}>
      <div className="container">
        <div
          className="footer-inner"
          style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 48, marginBottom: 40 }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO_SRC} alt="Zubaa" style={{ width: 36, height: 36, borderRadius: 8 }} />
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: 'var(--cream)' }}>
                Zubaa
              </span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,234,0.5)', lineHeight: 1.75 }}>
              Zubaa Media is a boutique social media marketing agency built for businesses that are serious
              about growth. We apply direct response frameworks from the world&apos;s leading brands to
              deliver content and strategy that actually converts. We work with a selected number of clients
              at a time. That is not a limitation. It is the point.
            </p>
          </div>

          {/* Get Started */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,234,0.35)', marginBottom: 16 }}>
              Get Started
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['#services', 'Services'], ['#pricing', 'Packages'], ['#about', 'About'], ['#faq', 'FAQ']].map(([href, label]) => (
                <Link key={label} href={href} style={{ fontSize: 13, color: 'rgba(255,255,234,0.6)' }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal + Contact */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,234,0.35)', marginBottom: 16 }}>
              Legal
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
              <a href="https://docs.google.com/document/d/1HTbJvTEPH2bRCKE_W8SU5pQ1YTg-FPl2dkV7gaKsIk4/edit?usp=sharing" target="_blank" rel="noreferrer" style={{ fontSize: 13, color: 'rgba(255,255,234,0.6)' }}>
                Terms and Conditions
              </a>
              <a href="https://docs.google.com/document/d/1qt8C-65ZPB1gUdgn-vL6O8wt2z8VjbNBTnT41TTulM0/edit?usp=sharing" target="_blank" rel="noreferrer" style={{ fontSize: 13, color: 'rgba(255,255,234,0.6)' }}>
                Privacy Policy
              </a>
            </div>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,234,0.35)', marginBottom: 16 }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="mailto:hello@zubaamedia.com" style={{ fontSize: 13, color: 'rgba(255,255,234,0.6)' }}>hello@zubaamedia.com</a>
              <a href="tel:08114595848" style={{ fontSize: 13, color: 'rgba(255,255,234,0.6)' }}>08114595848</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,234,0.3)' }}>
              &copy; Zubaa Limited 2026. All rights reserved.
            </p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,234,0.3)', marginTop: 6 }}>
              <a href="https://docs.google.com/document/d/1HTbJvTEPH2bRCKE_W8SU5pQ1YTg-FPl2dkV7gaKsIk4/edit?usp=sharing" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,234,0.4)', textDecoration: 'underline', marginRight: 16 }}>Terms and Conditions</a>
              <a href="https://docs.google.com/document/d/1qt8C-65ZPB1gUdgn-vL6O8wt2z8VjbNBTnT41TTulM0/edit?usp=sharing" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,234,0.4)', textDecoration: 'underline' }}>Privacy Policy</a>
            </p>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 12 }}>
            <SocialLink href="https://www.instagram.com/zubaamedia/" label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 16, height: 16 }}>
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/zubaamedia" label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 16, height: 16 }}>
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </SocialLink>
            <SocialLink href="https://wa.me/2348114595848" label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 16, height: 16 }}>
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-inner { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      style={{
        width: 34, height: 34, borderRadius: 8,
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'rgba(255,255,234,0.45)', transition: 'all 0.2s',
      }}
    >
      {children}
    </a>
  );
}