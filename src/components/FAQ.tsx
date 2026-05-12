'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Are these your set fees for social media marketing?',
    a: 'No, our social media marketing packages are tailored to fit each client\'s unique situation. We provide a starting point, but our team will work closely with you to meet your specific goals and budget. Rest assured, we offer competitive rates to help businesses succeed on social media without breaking the bank.',
  },
  {
    q: 'Do you have a minimum term for social media marketing?',
    a: 'Yes. Social media growth takes time, so we ask for a minimum commitment of six months. This allows your business to experience the full impact of our tailored social media marketing services and achieve sustainable, long-term results.',
  },
  {
    q: 'Do you provide 24/7 community management?',
    a: 'No, we prioritise a healthy work-life balance to ensure our team is at its creative and strategic best. While we do not offer 24/7 community management, our team will always be available to respond promptly during business hours.',
  },
  {
    q: 'Do you provide other digital services like website design?',
    a: 'Social media is our core focus, but we work alongside trusted partners for website design and other digital needs. If you need a website, we can connect you with the right people and make sure everything works together as one cohesive brand.',
  },
  {
    q: 'What is your refund policy?',
    a: 'We do not offer refunds. Once your month begins, our team gets to work immediately on your strategy, content creation and scheduling. Those hours are fully committed to your brand from day one. We are confident in the quality of our work and are always available to address any concerns directly.',
  },
  {
    q: 'What do I need to get started?',
    a: 'Just reach out via WhatsApp. We will have a quick conversation about your business, your goals and the platforms that make the most sense for you. From there we handle everything, strategy, content, posting and management, so you can focus on running your business.',
  },
  {
    q: 'Who will actually be working on my account?',
    a: 'Seniors. Not juniors. Not interns. Zubaa is a boutique agency by design which means every strategy, every piece of content and every decision made about your account goes through experienced hands. You are never passed down the chain. That is the whole point of keeping our client list small.',
  },
  {
    q: 'How long before I start seeing results?',
    a: 'Six months is our minimum commitment and there is a reason for that. Social media is not a switch you flip. In the first 30 days you will see a consistent, professional presence go up. By month 2 and 3 engagement starts building and the right audience starts finding you. By month 4 to 6 that audience is warm enough to convert into real enquiries and revenue. Anyone promising results before that is selling you something that does not exist.',
  },
  {
    q: 'How much of my time will this require?',
    a: 'Very little on most days. After the initial onboarding where we learn your business, your main job is to respond to verification codes when platforms request them and give feedback on content within 48 hours. For clients who want to be the face of their brand or have a spokesperson on video, we make that as easy as possible. Every month we send a content calendar with clear briefs and a quick walkthrough so you can batch create your video content in one sitting. Beyond that we handle everything else so you can focus on running your business.',
  },
  {
    q: 'Can I upgrade or downgrade my package?',
    a: 'Yes. If your business needs change you can move between packages at the start of a new billing cycle. We will have that conversation with you directly and make sure the transition is seamless.',
  },
  {
    q: 'How do you measure success?',
    a: 'We track four things every month. Shares, because content worth sharing is content that is working. Profile visits, because the right people finding and checking your page means your content is reaching the right audience. Saves, because when people bookmark your content it means they trust what you are putting out. And DMs and enquiries, because that is the number that actually becomes revenue. Everything we do is pointed at those four metrics.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  function toggle(i: number) {
    setOpen(open === i ? null : i);
  }

  return (
    <section id="faq" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ maxWidth: 580, marginBottom: 48 }}>
          <p className="eyebrow">Questions</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div
          className="faq-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  background: 'var(--cream)',
                  borderRadius: 'var(--radius)',
                  border: `1.5px solid ${isOpen ? 'var(--teal)' : 'var(--border)'}`,
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%', background: 'none', border: 'none',
                    padding: '18px 20px',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    cursor: 'pointer',
                    fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500,
                    color: 'var(--dark)', textAlign: 'left', gap: 12,
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{
                    width: 22, height: 22, flexShrink: 0,
                    borderRadius: '50%',
                    border: `1.5px solid ${isOpen ? 'var(--teal)' : 'var(--border)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 16, color: 'var(--teal)',
                    transition: 'transform 0.25s',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                    lineHeight: 1,
                  }}>
                    +
                  </span>
                </button>
                <div style={{
                  fontSize: 13, color: 'var(--gray)', lineHeight: 1.75,
                  padding: isOpen ? '0 20px 18px' : '0 20px',
                  maxHeight: isOpen ? 400 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease, padding 0.35s ease',
                }}>
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .faq-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}