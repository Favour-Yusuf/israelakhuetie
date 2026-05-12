const services = [
  {
    title: 'Social Media Strategy',
    body: 'A custom monthly content plan built around your business goals, brand voice and target audience. Not a template. Not a guess. A real strategy with real direction behind every post.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" style={{ width: 20, height: 20, stroke: 'var(--teal)' }}>
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Content Creation',
    body: 'Every caption, graphic, video script and piece of on-screen text is created by us. Content built to stop the scroll, hold attention and move your audience closer to a decision.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" style={{ width: 20, height: 20, stroke: 'var(--teal)' }}>
        <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Community Management',
    body: 'Comments, DMs and interactions handled professionally during business hours. Your audience stays engaged and your brand stays responsive without you lifting a finger.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" style={{ width: 20, height: 20, stroke: 'var(--teal)' }}>
        <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Social Media Advertising',
    body: 'Direct response ad campaigns built and managed on Meta and TikTok. Every naira in your ad budget works with a clear strategy and proven frameworks behind it.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" style={{ width: 20, height: 20, stroke: 'var(--teal)' }}>
        <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" stroke="currentColor" />
        <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Content Scheduling and Publishing',
    body: 'We plan, schedule and publish everything across your platforms on time every time. Your page stays active and consistent whether you are in a meeting or on the floor.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" style={{ width: 20, height: 20, stroke: 'var(--teal)' }}>
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: 'User Generated Content',
    body: 'We develop UGC strategies that turn your clients into your most powerful marketing asset. Real people, real experiences, real content that builds trust faster than anything we could create ourselves.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" style={{ width: 20, height: 20, stroke: 'var(--teal)' }}>
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ maxWidth: 640, marginBottom: 48 }}>
          <p className="eyebrow">What we do</p>
          <h2 className="section-title">Expert Social Media Solutions</h2>
          <p className="section-sub">
            At Zubaa we offer a focused range of social media marketing services built around one goal
            — making your business impossible to ignore online. Social media is what we do and we do it
            at the highest level.
          </p>
        </div>

        <div
          className="services-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
        >
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .services-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr !important; } }
        .service-card:hover { border-color: var(--teal) !important; transform: translateY(-2px); }
      `}</style>
    </section>
  );
}

function ServiceCard({ title, body, icon }: { title: string; body: string; icon: React.ReactNode }) {
  return (
    <div
      className="service-card"
      style={{
        padding: '28px 24px', background: 'var(--cream)',
        borderRadius: 'var(--radius)', border: '1.5px solid var(--border)',
        transition: 'all 0.2s',
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: 'rgba(0,206,203,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 16,
      }}>
        {icon}
      </div>
      <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--dark)', marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.7 }}>{body}</div>
    </div>
  );
}