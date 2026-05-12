const benefits = [
  {
    num: '01',
    title: 'You stop losing clients to competitors who show up better online',
    body: 'Most businesses lose potential clients before a single conversation ever happens. A consistent, professional presence makes sure that when someone is deciding who to call, your business is the obvious choice they land on.',
  },
  {
    num: '02',
    title: 'Your content works while you focus on running your business',
    body: 'No more spending evenings figuring out what to post. No more inconsistent uploads that make your page look abandoned. We handle everything from strategy to publishing so your time stays exactly where it belongs.',
  },
  {
    num: '03',
    title: 'Every post is built on direct response principles that actually convert',
    body: 'We do not create content to fill a feed. We apply the same frameworks used by 7 to 9 figure brands globally to make sure every piece of content is working toward a real business outcome. More enquiries. More bookings. More revenue.',
  },
  {
    num: '04',
    title: 'Your brand builds trust with clients before the first conversation happens',
    body: 'People research before they buy. A strong consistent social media presence means by the time a client reaches out, they already trust you. You are never starting from zero every single time they land on your page.',
  },
  {
    num: '05',
    title: 'You work directly with seniors, not passed down to a junior team',
    body: 'Most agencies win your business then hand you off to someone you have never met. Zubaa works with a select number of clients by design. Every strategy, every piece of content and every decision goes through experienced hands. You are never passed down the chain.',
  },
  {
    num: '06',
    title: 'You get a system built on global frameworks, not local guesswork',
    body: 'Most agencies build your content based on what they think looks good. We build it on the same direct response principles used by the fastest growing brands in the world. Every decision, what to post, when to post, how to write it, is backed by frameworks tested at a scale most local agencies have never even studied.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <p className="eyebrow">Why it matters</p>
        <h2 className="section-title">
          What Changes When Your Social Media Actually Has a Strategy Behind It
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          marginTop: 48,
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
        }}>
          {benefits.map((b) => (
            <BenefitItem key={b.num} {...b} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #benefits .benefits-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          #benefits .benefits-grid { grid-template-columns: 1fr !important; }
        }
        .benefit-item:hover { background: var(--cream); }
      `}</style>
    </section>
  );
}

function BenefitItem({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div
      className="benefit-item"
      style={{
        padding: '32px 28px',
        borderRight: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.2s',
      }}
    >
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 40, fontWeight: 700, color: 'var(--border)',
        lineHeight: 1, marginBottom: 16,
      }}>
        {num}
      </div>
      <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--dark)', marginBottom: 10, lineHeight: 1.4 }}>
        {title}
      </div>
      <div style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.7 }}>{body}</div>
    </div>
  );
}