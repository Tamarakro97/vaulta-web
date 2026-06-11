export function Testimonial() {
  return (
    <section
      id="story"
      style={{
        background: 'var(--peach-soft)',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: 'clamp(20px, 5vw, 48px)',
        paddingRight: 'clamp(20px, 5vw, 48px)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">

          {/* Left — Quote */}
          <div className="flex-1">
            <div style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(60px, 10vw, 120px)', lineHeight: 0.7, color: 'var(--navy)', opacity: 0.15 }}>
              "
            </div>
            <blockquote style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 600, fontSize: 'clamp(22px, 3vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--navy)', margin: '-24px 0 0' }}>
              I used to dread checking my balance. Now Vaulta tells me what I need to know —
              and somehow there&apos;s always a little{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--moss)' }}>more there</span>
              {' '}than I expected.
            </blockquote>
            <div className="flex items-center gap-4 mt-9">
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--moss)', color: 'var(--cream)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '18px', flexShrink: 0 }}>
                TA
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '16px', color: 'var(--navy)' }}>Tunde Adeyemi</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-60)', marginTop: '3px' }}>
                  Vaulta member · Lagos, NG
                </p>
              </div>
            </div>
          </div>

          {/* Right — Stat boxes */}
          <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[320px]">
            {[
              { value: '₦1.2B+', label: 'Transferred by members in 2025' },
              { value: '4.9 ★',  label: 'Average App Store rating' },
              { value: '180k+',  label: 'Active members and counting' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[20px] p-6" style={{ background: 'var(--cream)' }}>
                <p style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1, letterSpacing: '-0.025em', color: 'var(--navy)' }}>
                  {stat.value}
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-60)', marginTop: '6px' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}