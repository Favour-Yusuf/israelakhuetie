const stats = [
  { num: '3hr 23m', label: 'Average daily time spent on social media' },
  { num: '7', label: 'Social platforms used monthly per internet user' },
  { num: '98.2%', label: 'Of internet users research products on social media before buying' },
  { num: '66.9%', label: 'Of internet users discover new brands through social media' },
];

export default function Stats() {
  return (
    <section id="stats" className="section" style={{ background: 'var(--dark)' }}>
      <div className="container">
        {/* Top grid */}
        <div
          className="stats-top"
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0, marginBottom: 56,
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'var(--radius)', overflow: 'hidden',
          }}
        >
          {stats.map((s) => (
            <div
              key={s.num}
              style={{
                padding: '32px 24px',
                borderRight: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700,
                color: 'var(--teal)', lineHeight: 1, marginBottom: 10,
              }}>
                {s.num}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,234,0.6)', lineHeight: 1.5 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Body */}
        <div
          className="stats-body"
          style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 56, alignItems: 'center',
          }}
        >
          <div>
            <h2 className="section-title" style={{ color: 'var(--cream)' }}>
              Why Every Business Needs to Take Social Media Seriously
            </h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,234,0.65)', maxWidth: '100%' }}>
              Your clients are not waiting to find you through word of mouth alone. They are scrolling,
              searching and making decisions about who to trust and who to buy from every single day.
              The businesses winning right now are the ones showing up consistently with the right content,
              in the right places, at the right time. Zubaa builds the presence and strategy that puts your
              business exactly where your clients are already spending their time.
            </p>
          </div>

          <blockquote style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'var(--radius)',
            padding: 36,
            borderLeft: '4px solid var(--teal)',
          }}>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 18, fontStyle: 'italic',
              color: 'var(--cream)', lineHeight: 1.65, marginBottom: 20,
            }}>
              &ldquo;Social media is not about posting more. It is a trust machine. It is how you educate
              your audience and position your business as the only logical choice when someone is ready to
              buy.&rdquo;
            </p>
            <cite style={{ fontSize: 11, color: 'rgba(255,255,234,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Israel Akhuetie, Founder of Zubaa
            </cite>
          </blockquote>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-top { grid-template-columns: 1fr 1fr !important; }
          .stats-body { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}