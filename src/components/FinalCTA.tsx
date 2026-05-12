import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section
      className="section"
      style={{ background: 'var(--cream)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle,rgba(0,206,203,0.07) 0%,transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <p className="eyebrow" style={{ textAlign: 'center' }}>Get started</p>
        <h2 className="section-title" style={{ maxWidth: 660, margin: '0 auto 16px' }}>
          Ready to Build a Social Media Presence That Actually Works for Your Business?
        </h2>
        <p className="section-sub" style={{ margin: '0 auto 36px' }}>
          We keep our client list intentionally small so every business gets our full attention. If you are
          interested in working with us, the best time to reach out is before that changes.
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
      </div>
    </section>
  );
}