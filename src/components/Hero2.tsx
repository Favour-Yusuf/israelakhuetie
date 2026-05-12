import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        padding: 'clamp(130px,15vw,180px) 0 clamp(80px,10vw,120px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glows */}
      <div style={{
        content: "''", position: 'absolute', top: -100, left: '50%',
        transform: 'translateX(-50%)', width: 700, height: 500,
        background: 'radial-gradient(circle,rgba(0,206,203,0.08) 0%,transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -50, right: '10%', width: 300, height: 300,
        background: 'radial-gradient(circle,rgba(255,237,102,0.1) 0%,transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 var(--pad)' }}>
        {/* Label pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#fff', border: '1px solid var(--border)',
          borderRadius: 999, padding: '6px 14px',
          fontSize: 11, fontWeight: 500, color: 'var(--gray)',
          marginBottom: 28, letterSpacing: '0.04em',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0 }} />
          Social Media Marketing Agency
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(36px,5.5vw,64px)', fontWeight: 700,
          lineHeight: 1.1, color: 'var(--dark)', marginBottom: 20,
        }}>
          Build the Kind of Online Presence That Makes Clients{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>Choose You First</em>
        </h1>

        <p style={{
          fontSize: 16, color: 'var(--gray)', lineHeight: 1.75,
          margin: '0 auto 36px', maxWidth: 560,
        }}>
          We build the strategy, content and presence that turns your social media from an afterthought
          into your strongest marketing channel.
        </p>

        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <Link
            href="https://wa.me/2348114595848?text=Hi%2C%20I%27d%20like%20to%20speak%20with%20an%20expert"
            className="btn btn-primary"
          >
            Speak with an Expert
          </Link>
          <Link href="#pricing" className="btn btn-secondary">
            See Our Packages
          </Link>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 48,
          marginTop: 56, paddingTop: 40,
          borderTop: '1px solid var(--border)', flexWrap: 'wrap',
        }}>
          {[
            { num: '10+', label: 'Years combined experience' },
            { num: '7-9 Fig', label: 'Global brand frameworks we use' },
            { num: '100%', label: 'Senior execution on every account' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 32, fontWeight: 700, color: 'var(--dark)', lineHeight: 1,
              }}>
                {num}
              </div>
              <div style={{ fontSize: 12, color: 'var(--gray)', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}