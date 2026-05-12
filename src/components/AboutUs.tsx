// Replace FOUNDER_IMG_SRC with your actual image path or keep the base64
const FOUNDER_IMG_SRC = '/Babe- studio portrait.png'; // put the image in /public/images/

const bodyParagraphs = [
  'I spent over five years in digital marketing, worked with a lot of brands across different industries, spent thousands of hours and a lot of money on courses from the best of the best marketers in the world. People who have built and scaled brands at a level most agencies in this part of the world have never even dreamed of.',
  'And the more I learned, the more something started to bother me. Businesses with real offerings, real value, real products. Getting crushed online because their social media had no strategy, no direction and no soul behind it. Just random posting. Just content for the sake of content.',
  'The problem is most agencies do not even know the difference. They learned what they learned from other agencies doing the same mediocre work. Nobody went back to the source. Nobody asked what actually works at a global scale and why.',
  'Social media is not about posting more. It is not about follower counts or likes. It is about building trust. It is about educating your audience and exposing them to your unique point of view so that when the moment comes, they choose you without hesitation.',
  'Most agencies treat it like a factory. Hundreds of clients. Junior staff doing the work. No transparent pricing. No real thinking behind any of it. Just content going out and nobody asking whether it is actually working.',
  'Zubaa exists to be the opposite of that. We work with a select number of clients at a time. Everyone who works with us gets senior attention, real strategy and content built with actual intention behind it.',
  'Because if your business has something worth offering, you have every right to a social media presence that delivers. Not someday. Now.',
];

export default function About() {
  return (
    <section
      id="about"
      className="section"
      style={{ background: 'var(--dark)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: -200, right: -100, width: 500, height: 500,
        background: 'radial-gradient(circle,rgba(0,206,203,0.06) 0%,transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div className="about-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          {/* Image (desktop) */}
          <div className="about-img-desktop" style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 20, overflow: 'hidden',
              aspectRatio: '3/4', maxHeight: 560,
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FOUNDER_IMG_SRC}
                alt="Israel Akhuetie, Founder of Zubaa"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
              />
            </div>
            <div style={{
              position: 'absolute', bottom: 24, right: -20,
              background: 'var(--teal)', color: 'var(--dark)',
              borderRadius: 'var(--radius)', padding: '16px 20px',
            }}>
              <span style={{ display: 'block', fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, lineHeight: 1, marginBottom: 2 }}>
                Israel Akhuetie
              </span>
              <p style={{ fontSize: 12, fontWeight: 500 }}>Founder, Zubaa</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="eyebrow" style={{ color: 'var(--teal)' }}>About</p>
            <h2 className="section-title" style={{ color: 'var(--cream)' }}>
              <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>
                &ldquo;I Built Zubaa Because I Got Tired of Watching Good Businesses Fail at Social Media.&rdquo;
              </em>
            </h2>

            {/* Mobile image */}
            <div className="about-img-mobile" style={{ display: 'none' }}>
              <div style={{
                width: '100%', maxWidth: 400, margin: '28px auto',
                borderRadius: 20, overflow: 'hidden', aspectRatio: '3/4', position: 'relative',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FOUNDER_IMG_SRC}
                  alt="Israel Akhuetie, Founder of Zubaa"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                />
              </div>
            </div>

            <div style={{ fontSize: 14, color: 'rgba(255,255,234,0.72)', lineHeight: 1.85, marginTop: 24 }}>
              {bodyParagraphs.map((p, i) => (
                <p key={i} style={{ marginBottom: i < bodyParagraphs.length - 1 ? 18 : 0 }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-inner { grid-template-columns: 1fr !important; }
          .about-img-desktop { display: none !important; }
          .about-img-mobile { display: block !important; }
        }
      `}</style>
    </section>
  );
}