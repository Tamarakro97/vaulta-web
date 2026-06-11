import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section
      id="hero"
      className="pt-[76px] pb-[96px] px-12 overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[72px] items-center" style={{ gridTemplateColumns: '1.05fr 0.95fr' }}>

          {/* ── Left: Copy ── */}
          <div>
            <p
              className="mb-6 inline-flex items-center gap-3"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink-60)',
              }}
            >
              <span style={{ width: '22px', height: '1px', background: 'var(--navy)', opacity: 0.5, display: 'inline-block' }} />
              Intra-African payments · Est. 2025
            </p>

            <h1
              style={{
                fontFamily: 'var(--font-bricolage)',
                fontWeight: 800,
                fontSize: 'clamp(52px, 7vw, 96px)',
                lineHeight: 1.02,
                letterSpacing: '-0.025em',
                color: 'var(--navy)',
                margin: 0,
              }}
            >
              Send money<br />
              across Africa,{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--moss)' }}>instantly.</span>
            </h1>

            <p
              className="mt-7"
              style={{
                fontSize: '20px',
                lineHeight: 1.5,
                color: 'var(--ink-60)',
                maxWidth: '520px',
              }}
            >
              Vaulta moves your money across 54 African countries in 2–5 minutes — no SWIFT delays, no hidden FX fees, no branch queues. Banking that finally feels like home.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <Button variant="primary" size="lg">Send money now →</Button>
            </div>

            <div
              className="flex gap-7 mt-11 pt-7"
              style={{ borderTop: '1px solid var(--line)' }}
            >
              {[
                { num: '2-5m',  lbl: 'Transfer speed' },
                { num: '54',    lbl: 'African countries' },
                { num: '₦0',    lbl: 'Monthly fees' },
              ].map((s) => (
                <div key={s.lbl}>
                  <p style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '28px', lineHeight: 1, color: 'var(--navy)', letterSpacing: '-0.02em' }}>
                    {s.num}
                  </p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)', marginTop: '6px' }}>
                    {s.lbl}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Phone mock ── */}
          <div
            className="relative flex justify-center items-center"
            style={{
              aspectRatio: '4/5',
              maxHeight: '640px',
              padding: '40px 60px',
              overflow: 'visible',
            }}
          >

            {/* Background blob */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  radial-gradient(60% 50% at 40% 30%, var(--peach-soft) 0%, transparent 70%),
                  radial-gradient(50% 50% at 75% 75%, rgba(63,208,212,0.18) 0%, transparent 70%)
                `,
                filter: 'blur(2px)',
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
                padding: '14px 16px',
                boxShadow: '0 16px 32px -16px rgba(16,26,51,0.25)',
              }}
            >
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(63,208,212,0.25)', display: 'grid', placeItems: 'center', fontSize: '18px' }}>
                ⚡
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '14px', lineHeight: 1.1, color: 'var(--navy)' }}>Transfer sent</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--ink-60)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '2px' }}>Arrived in 3 minutes</p>
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
                padding: '14px 16px',
                boxShadow: '0 16px 32px -16px rgba(16,26,51,0.25)',
              }}
            >
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--peach-soft)', display: 'grid', placeItems: 'center', fontSize: '18px' }}>
                🌍
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '14px', lineHeight: 1.1, color: 'var(--navy)' }}>54 countries</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--ink-60)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '2px' }}>No hidden fees</p>
              </div>
            </div>

            {/* Phone shell */}
            <div
              className="relative z-[2]"
              style={{
                width: '320px',
                height: '580px',
                background: 'var(--navy)',
                borderRadius: '44px',
                padding: '12px',
                boxShadow: '0 1px 0 rgba(255,255,255,0.08) inset, 0 40px 80px -20px rgba(16,26,51,0.35), 0 16px 32px -16px rgba(16,26,51,0.25)',
              }}
              aria-hidden="true"
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: '#F2F5F9',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Top bar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 16px 12px', background: 'white', borderBottom: '1px solid #DDE6F0' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#EAF9F8', display: 'grid', placeItems: 'center', fontSize: '14px' }}>←</div>
                  <p style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: '15px', color: 'var(--navy)', flex: 1 }}>Africa Pay</p>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--teal-deep)', background: 'rgba(63,208,212,0.15)', padding: '3px 7px', borderRadius: '999px', letterSpacing: '0.06em' }}>LIVE</span>
                </div>

                {/* Scroll area */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '14px 14px 0' }}>

                  {/* Account number */}
                  <div style={{ background: 'white', borderRadius: '12px', border: '1.5px solid #DDE6F0', padding: '12px 14px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '14px', opacity: 0.4 }}>💳</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--navy)', fontWeight: 600 }}>2111262760</span>
                  </div>

                  {/* Recipient name */}
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 700, color: 'var(--ink-60)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '5px' }}>Recipient Full Name</p>
                  <div style={{ background: 'white', borderRadius: '12px', border: '1.5px solid #DDE6F0', padding: '12px 14px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '14px', opacity: 0.4 }}>👤</span>
                    <span style={{ fontSize: '13px', color: 'var(--navy)', fontWeight: 500 }}>Jane Doe</span>
                  </div>

                  {/* Bank name */}
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 700, color: 'var(--ink-60)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '5px' }}>Recipient Bank Name</p>
                  <div style={{ background: 'white', borderRadius: '12px', border: '1.5px solid #DDE6F0', padding: '12px 14px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '14px', opacity: 0.4 }}>🏦</span>
                    <span style={{ fontSize: '13px', color: 'var(--navy)', fontWeight: 500 }}>Equity Bank</span>
                  </div>

                  {/* Transfer summary */}
                  <div style={{ background: 'white', borderRadius: '14px', padding: '14px', marginBottom: '14px' }}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, color: 'var(--ink-60)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Transfer Summary</p>
                    {[
                      { label: 'Destination',       value: '🇰🇪 Kenya',  color: 'var(--navy)',      bold: false, pill: false },
                      { label: 'Recipient Gets',    value: 'KES 4,812',  color: 'var(--teal-deep)', bold: true,  pill: false },
                      { label: 'Debit from Wallet', value: '₦500,000',   color: 'var(--navy)',      bold: true,  pill: false },
                      { label: 'PAPSS Fee',         value: '₦250.00',    color: 'var(--navy)',      bold: false, pill: false },
                      { label: 'Settlement',        value: '~2–5 mins',  color: 'var(--teal-deep)', bold: false, pill: true  },
                    ].map((row) => (
                      <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #F0F4F8' }}>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--ink-60)' }}>{row.label}</span>
                        {row.pill ? (
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--teal-deep)', background: 'rgba(63,208,212,0.12)', padding: '3px 9px', borderRadius: '999px' }}>{row.value}</span>
                        ) : (
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: row.bold ? 700 : 500, color: row.color }}>{row.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Confirm button */}
                <div style={{ padding: '12px 14px 20px', background: '#F2F5F9' }}>
                  <div style={{ width: '100%', height: '44px', borderRadius: '999px', background: 'linear-gradient(135deg, var(--teal), var(--teal-deep))', display: 'grid', placeItems: 'center', color: 'white', fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: '14px' }}>
                    Confirm Transfer
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}