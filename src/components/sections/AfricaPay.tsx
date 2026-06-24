'use client'

export function AfricaPay() {
  return (
    <section
      id="africapay"
      style={{
        background: 'var(--navy)',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: 'clamp(20px, 5vw, 48px)',
        paddingRight: 'clamp(20px, 5vw, 48px)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div className="flex-1">
            <p
              className="mb-6 inline-flex items-center gap-3"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--teal)',
              }}
            >
              <span style={{ width: '22px', height: '1px', background: 'var(--teal)', opacity: 0.5, display: 'inline-block' }} />
              One Africa, one market
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-bricolage)',
                fontWeight: 800,
                fontSize: 'clamp(36px, 6vw, 64px)',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
                color: 'var(--cream)',
                margin: 0,
              }}
            >
              Borders for maps,<br />
              not for{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>money.</span>
            </h2>

            <p
              className="mt-7"
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: 1.5,
                color: 'rgba(246,240,230,0.65)',
                maxWidth: '480px',
              }}
            >
              No SWIFT delays, no 8% FX loss. Pick a corridor, enter your amount — your trade settles across the continent in 2–5 minutes.
            </p>

            <div className="flex flex-col gap-6 mt-9">
              {[
                { n: '01', text: 'Pick your destination country' },
                { n: '02', text: 'Enter amount and recipient details' },
                { n: '03', text: 'Trade settles in 2–5 minutes' },
              ].map((step) => (
                <div key={step.n} className="flex gap-5 items-start">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--teal)', fontWeight: 600, letterSpacing: '0.08em', paddingTop: '2px', minWidth: '28px' }}>
                    {step.n}
                  </span>
                  <p style={{ fontSize: '15px', color: 'rgba(246,240,230,0.75)', lineHeight: 1.5 }}>
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="flex gap-7 mt-11 pt-7"
              style={{ borderTop: '1px solid rgba(246,240,230,0.12)' }}
            >
              {[
                { num: '54',    lbl: 'African countries' },
                { num: '2-5m',  lbl: 'Average settlement' },
                { num: '₦250',  lbl: 'Flat fee, no surprises' },
              ].map((s) => (
                <div key={s.lbl}>
                  <p style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: 'clamp(18px, 3vw, 28px)', lineHeight: 1, color: 'var(--cream)', letterSpacing: '-0.02em' }}>
                    {s.num}
                  </p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(246,240,230,0.5)', marginTop: '6px' }}>
                    {s.lbl}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Phone mock — hidden on mobile ── */}
          <div
            className="relative justify-center items-center hidden md:flex"
            style={{
              aspectRatio: '4/5',
              maxHeight: '580px',
              padding: '40px 60px',
              overflow: 'visible',
              minWidth: '320px',
            }}
          >
            {/* Background blob */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  radial-gradient(60% 50% at 40% 30%, rgba(63,208,212,0.15) 0%, transparent 70%),
                  radial-gradient(50% 50% at 75% 75%, rgba(242,183,155,0.12) 0%, transparent 70%)
                `,
                zIndex: 0,
              }}
            />

            {/* Chip — top left */}
            <div
              className="animate-floatA absolute flex items-center gap-3 z-10"
              style={{
                top: '0%',
                left: '0%',
                background: 'var(--cream)',
                border: '1px solid var(--line)',
                borderRadius: '18px',
                padding: '12px 14px',
                boxShadow: '0 16px 32px -16px rgba(16,26,51,0.25)',
              }}
            >
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(63,208,212,0.2)', display: 'grid', placeItems: 'center', fontSize: '16px' }}>
                🇰🇪
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '13px', lineHeight: 1.1, color: 'var(--navy)' }}>Trade settled</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--ink-60)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '2px' }}>NGN → KES · 3 minutes</p>
              </div>
            </div>

            {/* Chip — bottom right */}
            <div
              className="animate-floatB absolute flex items-center gap-3 z-10"
              style={{
                bottom: '0%',
                right: '0%',
                background: 'var(--cream)',
                border: '1px solid var(--line)',
                borderRadius: '18px',
                padding: '12px 14px',
                boxShadow: '0 16px 32px -16px rgba(16,26,51,0.25)',
              }}
            >
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--peach-soft)', display: 'grid', placeItems: 'center', fontSize: '16px' }}>
                🇬🇭
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '13px', lineHeight: 1.1, color: 'var(--navy)' }}>54 countries</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--ink-60)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '2px' }}>One connected market</p>
              </div>
            </div>

            {/* Phone shell */}
            <div
              className="relative z-[2]"
              style={{
                width: '300px',
                height: '530px',
                background: 'var(--navy)',
                borderRadius: '44px',
                padding: '12px',
                boxShadow: '0 1px 0 rgba(255,255,255,0.08) inset, 0 40px 80px -20px rgba(16,26,51,0.5), 0 16px 32px -16px rgba(16,26,51,0.35)',
              }}
              aria-hidden="true"
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'var(--cream)',
                  borderRadius: '32px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.01em', color: 'var(--navy)', lineHeight: 1.1 }}>Good morning, Tobi</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: 'var(--ink-60)', marginTop: '2px' }}>Tuesday · 9:42 am</p>
                  </div>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'var(--peach)', border: '2px solid var(--cream)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-bricolage)', fontWeight: 600, fontSize: '11px', color: 'var(--navy)' }}>T</div>
                </div>

                <div style={{ marginTop: '14px', background: 'var(--navy)', borderRadius: '20px', padding: '16px', color: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', right: '-25px', top: '-25px', width: '120px', height: '120px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(63,208,212,0.5) 0%, transparent 70%)' }} />
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.10em', textTransform: 'uppercase', opacity: 0.6 }}>Total balance</p>
                  <p style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '24px', marginTop: '4px', letterSpacing: '-0.02em' }}>
                    ₦2,431,842<span style={{ opacity: 0.5, fontSize: '14px', fontWeight: 500 }}>.40</span>
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '10px', opacity: 0.7, fontFamily: 'var(--font-mono)' }}>
                    <span>+ ₦148,200 this week</span>
                    <span style={{ color: 'var(--teal)' }}>● Live</span>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginTop: '12px' }}>
                  {[
                    { icon: '＋', label: 'Add' },
                    { icon: '↗', label: 'Send' },
                    { icon: '≡', label: 'Bills' },
                    { icon: '◷', label: 'Plan' },
                  ].map((a) => (
                    <div key={a.label} style={{ background: 'var(--cream-2)', borderRadius: '12px', padding: '8px 4px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
                      <div style={{ width: '26px', height: '26px', borderRadius: '7px', background: 'var(--cream)', display: 'grid', placeItems: 'center', fontSize: '12px', color: 'var(--navy)' }}>{a.icon}</div>
                      <span style={{ fontSize: '9px', fontWeight: 500, color: 'var(--navy-2)' }}>{a.label}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', marginBottom: '4px' }}>
                  <p style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 600, fontSize: '12px', color: 'var(--navy)' }}>Recent activity</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: 'var(--ink-60)' }}>This week</p>
                </div>

                {[
                  { ico: '🇰🇪', bg: 'rgba(63,208,212,0.18)', color: 'var(--teal-deep)', name: 'Trade — Nairobi Supplier', cat: 'Settled',        amt: '+₦45,000', pos: true  },
                  { ico: '🇬🇭', bg: 'var(--cream-2)',         color: 'var(--navy)',      name: 'Trade — Accra Buyer',    cat: 'Settled · Mon',  amt: '+₦82,000', pos: true },
                  { ico: 'R',   bg: 'var(--peach-soft)',      color: 'var(--navy)',      name: 'Rent Payment',           cat: 'Housing · Sun',  amt: '–₦85,000', pos: false },
                  { ico: '🇿🇦', bg: 'var(--cream-2)',         color: 'var(--navy)',      name: 'Trade — Cape Town Supplier', cat: 'Settled · Sat', amt: '–₦5,000',  pos: false },
                ].map((tx) => (
                  <div key={tx.name} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', borderBottom: '1px solid var(--line)' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '9px', background: tx.bg, color: tx.color, display: 'grid', placeItems: 'center', fontSize: '13px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, flexShrink: 0 }}>{tx.ico}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: '10px', fontWeight: 600, color: 'var(--navy)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tx.name}</p>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'var(--ink-60)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{tx.cat}</p>
                    </div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 600, color: tx.pos ? 'var(--moss)' : 'var(--navy)', flexShrink: 0 }}>{tx.amt}</p>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}