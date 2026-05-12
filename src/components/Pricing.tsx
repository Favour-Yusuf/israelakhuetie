'use client';

import { useState } from 'react';

type Plan = {
  tier: string;
  badge: 'starter' | 'popular' | 'advanced';
  badgeLabel: string;
  desc: string;
  organic: number;
  adFee: number;
  featured: boolean;
  strategy: string[];
  content: string[];
  paidExtras: string[];
};

const plans: Plan[] = [
  {
    tier: 'Presence',
    badge: 'starter',
    badgeLabel: 'Starter',
    desc: 'For businesses establishing a consistent social media presence for the first time.',
    organic: 220000,
    adFee: 150000,
    featured: false,
    strategy: [
      'Monthly content strategy & planning',
      'Brand voice & messaging guide',
      'Content calendar delivered monthly',
    ],
    content: [
      'Instagram & Facebook management',
      '3 posts per week, per platform (graphics or video)',
      'Copywriting & video scripting included',
      'Basic community management (comments & DMs)',
      'Content scheduling & publishing',
    ],
    paidExtras: [
      'Instagram & Facebook ads',
      'Setup & management of 2 Meta ad campaigns',
      'Audience targeting & basic retargeting',
      '2 to 3 BOFU creatives per month',
      'Ad copywriting',
      'Monthly optimization & reporting',
    ],
  },
  {
    tier: 'Awareness',
    badge: 'popular',
    badgeLabel: 'Most popular',
    desc: 'For businesses ready to expand their reach and build a loyal audience.',
    organic: 280000,
    adFee: 180000,
    featured: true,
    strategy: [
      'Monthly content strategy & planning',
      'Brand voice & messaging guide',
      'Competitor analysis each month',
      'Content calendar & scheduling',
    ],
    content: [
      'Instagram & Facebook management',
      '4 posts per week, per platform (graphics or video)',
      'Copywriting & video scripting included',
      'Advanced community management',
      'Visibility & engagement practices',
    ],
    paidExtras: [
      'Instagram & Facebook ads',
      'Setup & management of 2 to 3 campaigns',
      'Advanced targeting & retargeting',
      '2 to 4 BOFU creatives per month',
      'Creative testing & iteration (angles & hooks)',
      'Conversion optimization focus',
      'Monthly performance tracking',
    ],
  },
  {
    tier: 'Growth',
    badge: 'advanced',
    badgeLabel: 'Full-service',
    desc: 'For businesses ready to dominate their market with a full-scale social strategy.',
    organic: 500000,
    adFee: 350000,
    featured: false,
    strategy: [
      'Monthly content strategy & planning',
      'Brand voice & messaging guide',
      'Full platform & campaign strategy',
      'Seasonal & promotional planning',
      'Content calendar & scheduling',
    ],
    content: [
      'Instagram, Facebook & TikTok management',
      '5 posts per week, per platform (graphics or video)',
      'Copywriting & video scripting included',
      'Advanced community management',
      'User-generated content (UGC) strategy',
      'Influencer & affiliate outreach',
      'Priority content turnaround',
    ],
    paidExtras: [
      'Instagram, Facebook & TikTok ads',
      'Full-funnel campaigns (cold, retargeting & conversion)',
      '3 to 5 active campaigns',
      '3 to 6 BOFU creatives per month',
      'Continuous testing & scaling of winning ads',
      'Bi-weekly performance optimization',
      'Conversion rate improvement focus',
    ],
  },
];

const badgeStyles: Record<string, { background: string; color: string }> = {
  starter: { background: '#f0f0e8', color: '#6b6e6e' },
  popular: { background: '#e0fafa', color: '#00aaaa' },
  advanced: { background: '#fff4cc', color: '#aa8800' },
};

function fmt(n: number) {
  return n.toLocaleString('en-NG');
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      style={{ width: 14, height: 14, flexShrink: 0, marginTop: 1, color }}
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PricingCard({ plan, mode }: { plan: Plan; mode: 'organic' | 'paid' }) {
  const price = mode === 'organic' ? plan.organic : plan.organic + plan.adFee;
  const adManagement = plan.adFee;

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 'var(--radius)',
        padding: '22px 18px',
        display: 'flex',
        flexDirection: 'column',
        border: plan.featured ? '2px solid var(--teal)' : '1.5px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {plan.featured && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 4, background: 'var(--teal)',
        }} />
      )}

      <span style={{
        display: 'inline-block', fontSize: 9, fontWeight: 500,
        padding: '3px 9px', borderRadius: 999, marginBottom: 12,
        letterSpacing: '0.04em', textTransform: 'uppercase',
        ...badgeStyles[plan.badge],
      }}>
        {plan.badgeLabel}
      </span>

      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, color: 'var(--dark)', marginBottom: 4 }}>
        {plan.tier}
      </p>
      <p style={{ fontSize: 11, color: 'var(--gray)', lineHeight: 1.55, marginBottom: 16 }}>{plan.desc}</p>

      <p style={{ fontSize: 11, color: 'var(--gray)', marginBottom: 2 }}>starting at</p>
      <div style={{ fontSize: 28, fontWeight: 500, color: 'var(--dark)', lineHeight: 1, marginBottom: 4 }}>
        ₦{fmt(price)}
      </div>
      <p style={{ fontSize: 11, color: 'var(--gray)' }}>per month</p>

      {mode === 'paid' && (
        <div style={{
          fontSize: 10, background: '#fff9e6', color: '#aa8800',
          borderRadius: 7, padding: '6px 9px', marginTop: 8, lineHeight: 1.5,
        }}>
          Ad management: ₦{fmt(adManagement)}/mo + your ad budget (paid directly to platform)
        </div>
      )}

      <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '14px 0' }} />

      <p style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b0b3b3', marginBottom: 7, marginTop: 10 }}>
        Strategy
      </p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
        {plan.strategy.map((f) => (
          <li key={f} style={{ fontSize: 12, color: 'var(--dark)', display: 'flex', gap: 7, alignItems: 'flex-start', lineHeight: 1.45 }}>
            <CheckIcon color="var(--teal)" /><span>{f}</span>
          </li>
        ))}
      </ul>

      <p style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b0b3b3', marginBottom: 7, marginTop: 10 }}>
        Content &amp; management
      </p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
        {plan.content.map((f) => (
          <li key={f} style={{ fontSize: 12, color: 'var(--dark)', display: 'flex', gap: 7, alignItems: 'flex-start', lineHeight: 1.45 }}>
            <CheckIcon color="#c8cbcb" /><span>{f}</span>
          </li>
        ))}
      </ul>

      {mode === 'paid' && (
        <>
          <p style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b0b3b3', marginBottom: 7, marginTop: 10 }}>
            Ads
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
            {plan.paidExtras.map((f) => (
              <li key={f} style={{ fontSize: 12, color: 'var(--dark)', display: 'flex', gap: 7, alignItems: 'flex-start', lineHeight: 1.45 }}>
                <CheckIcon color="var(--red)" /><span>{f}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <div style={{ marginTop: 16 }}>
        <a
          href={`https://wa.me/2348114595848?text=Hi%2C%20I%27m%20interested%20in%20the%20${plan.tier}%20plan`}
          style={{
            display: 'block', textAlign: 'center',
            padding: '11px 0', borderRadius: 'var(--radius-sm)',
            fontSize: 13, fontWeight: 500, textDecoration: 'none',
            transition: 'all 0.2s',
            ...(plan.featured
              ? { background: 'var(--teal)', borderColor: 'var(--teal)', color: '#fff', border: '1.5px solid var(--teal)' }
              : { border: '1.5px solid var(--border)', color: 'var(--dark)', background: 'transparent' }),
          }}
        >
          Get started
        </a>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [mode, setMode] = useState<'organic' | 'paid'>('organic');

  return (
    <section id="pricing" className="section" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <div style={{ maxWidth: 600, marginBottom: 32 }}>
          <p className="eyebrow">Packages</p>
          <h2 className="section-title">Simple Packages. No Hidden Fees. No Surprises.</h2>
          <p className="section-sub">
            We keep our packages simple so you know exactly what you are getting and exactly what you are
            paying. Senior strategy and execution on every tier. No exceptions.
          </p>
        </div>

        {/* Toggle */}
        <div style={{ marginBottom: 24 }}>
          <div style={{
            display: 'inline-flex', background: '#fff',
            border: '1.5px solid var(--border)', borderRadius: 999, padding: 4,
          }}>
            {(['organic', 'paid'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                style={{
                  border: 'none', background: mode === m ? 'var(--dark)' : 'none',
                  color: mode === m ? 'var(--cream)' : 'var(--gray)',
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500,
                  padding: '9px 22px', borderRadius: 999, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {m === 'organic' ? 'Organic only' : 'Organic + Ads'}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div
          className="p-cards"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 16 }}
        >
          {plans.map((p) => (
            <PricingCard key={p.tier} plan={p} mode={mode} />
          ))}
        </div>

        {/* Add-ons */}
        <div style={{
          background: '#fff', borderRadius: 'var(--radius)',
          padding: 24, border: '1.5px solid var(--border)', marginTop: 16,
        }}>
          <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b0b3b3', marginBottom: 14 }}>
            Add-ons
          </p>
          {[
            { name: 'Video Creative', pill: 'per video', sub: '60-second video creative, fully scripted and edited. Available on any plan.', price: '25,000' },
            { name: 'On-site Shoot Coordination', sub: 'We handle everything, briefing, coordination and delivery. Contact us for pricing.', price: 'Contact us' },
            { name: 'Web Development', sub: 'Need a website? We work with trusted partners to get it done. Contact us for pricing.', price: 'Contact us' },
            { name: 'Brand Identity', sub: 'Logo, colours, typography and brand guidelines. Contact us for pricing.', price: 'Contact us' },
          ].map((addon, i, arr) => (
            <div
              key={addon.name}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                padding: '10px 0', gap: 8,
                borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div>
                <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--dark)' }}>
                  {addon.name}
                  {addon.pill && (
                    <span style={{
                      display: 'inline-block', fontSize: 9, padding: '2px 7px',
                      borderRadius: 999, background: 'var(--yellow)', color: '#6b5800',
                      marginLeft: 6, fontWeight: 500,
                    }}>
                      {addon.pill}
                    </span>
                  )}
                </p>
                <p style={{ fontSize: 11, color: 'var(--gray)', marginTop: 2 }}>{addon.sub}</p>
              </div>
              <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--dark)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                {addon.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .p-cards { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) {
          .p-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}