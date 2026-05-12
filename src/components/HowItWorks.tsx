const steps = [
  {
    num: '01',
    title: 'We Learn Your Business',
    body: 'Before we write a single word or design a single post, we take the time to understand your business, your audience and what makes you different. This is where the strategy starts.',
  },
  {
    num: '02',
    title: 'We Build Your Content Strategy',
    body: "Using direct response frameworks from the world's most successful brands, we map out exactly what your brand needs to say, how to say it and where to say it. No guesswork. No random posting.",
  },
  {
    num: '03',
    title: 'We Create and Publish Everything',
    body: 'Copywriting, graphics, video scripting, scheduling and publishing. We handle the entire production process so nothing falls through the cracks and your page stays active and professional every week.',
  },
  {
    num: '04',
    title: 'We Manage, Monitor and Optimise',
    body: 'We respond to comments and DMs, track what is working and continuously refine your content to make sure it keeps performing. Your social media is never left on autopilot.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <p className="eyebrow">The process</p>
        <h2 className="section-title">Simple Process. Serious Results.</h2>

        <div
          className="how-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
            marginTop: 48,
          }}
        >
          {steps.map((s) => (
            <HowStep key={s.num} {...s} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .how-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .how-grid { grid-template-columns: 1fr !important; } }
        .how-step:hover { border-color: var(--teal) !important; }
      `}</style>
    </section>
  );
}

function HowStep({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div
      className="how-step"
      style={{
        padding: '28px 22px', background: '#fff',
        borderRadius: 'var(--radius)', border: '1.5px solid var(--border)',
        position: 'relative', overflow: 'hidden', transition: 'border-color 0.2s',
      }}
    >
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 44, fontWeight: 700, color: 'var(--border)',
        lineHeight: 1, marginBottom: 16,
      }}>
        {num}
      </div>
      <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--dark)', marginBottom: 10 }}>{title}</div>
      <div style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.7 }}>{body}</div>
    </div>
  );
}