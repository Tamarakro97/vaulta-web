'use client'
import { useState } from 'react'

function calcFV(P: number, PMT: number, years: number, rate: number) {
  const n = 12
  const r = rate
  const t = years
  if (r === 0) return P + PMT * n * t
  const factor = Math.pow(1 + r / n, n * t)
  return P * factor + PMT * ((factor - 1) / (r / n))
}

export function Calculator() {
  const [deposit, setDeposit]       = useState(200000)
  const [monthly, setMonthly]       = useState(50000)
  const [years, setYears]           = useState(5)
  const [useVaulta, setUseVaulta]   = useState(true)

  const rate = useVaulta ? 0.12 : 0.005
  const fv = calcFV(deposit, monthly, years, rate)
  const totalContrib = deposit + monthly * 12 * years
  const earned = Math.max(0, fv - totalContrib)

  const fvInt = Math.floor(fv)
  const fvDec = String(Math.round((fv - fvInt) * 100)).padStart(2, '0')

  const fmt = (n: number) => n.toLocaleString('en-NG', { maximumFractionDigits: 0 })
  const fmt2 = (n: number) => n.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  return (
    <section id="grow" className="py-[140px] px-12" style={{ background: 'var(--cream-2)' }}>
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* Left — Copy */}
          <div>
            <p
              className="mb-3"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink-60)',
              }}
            >
              Watch it grow
            </p>
            <h2
              className="mb-5"
              style={{
                fontFamily: 'var(--font-bricolage)',
                fontWeight: 700,
                fontSize: 'clamp(32px, 3.5vw, 56px)',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
                color: 'var(--navy)',
              }}
            >
              A quiet 12% p.a.,<br />working while you rest.
            </h2>
            <p
              className="mb-8"
              style={{ fontSize: '20px', lineHeight: 1.5, color: 'var(--ink-60)', maxWidth: '480px' }}
            >
              See what a steady, no-fee savings vault could mean for you. Move the dials — we'll keep the math honest.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {['No minimum balance', 'Withdraw anytime', 'NDIC Insured'].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center"
                  style={{
                    height: '38px',
                    padding: '0 18px',
                    borderRadius: '9999px',
                    border: '1.5px solid var(--line-strong)',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--navy)',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Calculator card */}
          <div
            className="rounded-[32px] p-10"
            style={{
              background: 'var(--cream)',
              border: '1px solid var(--line)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {/* Result */}
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: 'var(--ink-60)',
                marginBottom: '8px',
              }}
            >
              Projected balance
            </p>
            <div className="flex items-start leading-none" style={{ lineHeight: 0.95 }}>
              <span
                style={{
                  fontFamily: 'var(--font-bricolage)',
                  fontWeight: 600,
                  fontSize: '36px',
                  color: 'var(--ink-40)',
                  marginTop: '6px',
                  marginRight: '2px',
                }}
              >
                ₦
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-bricolage)',
                  fontWeight: 800,
                  fontSize: '72px',
                  letterSpacing: '-0.035em',
                  color: 'var(--navy)',
                }}
              >
                {fmt(fvInt)}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-bricolage)',
                  fontWeight: 600,
                  fontSize: '36px',
                  color: 'var(--ink-40)',
                  marginTop: '6px',
                }}
              >
                .{fvDec}
              </span>
            </div>
            <p
              className="mt-2 mb-8"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--ink-60)',
              }}
            >
              in {years} {years === 1 ? 'year' : 'years'} &nbsp;·&nbsp;{' '}
              <span style={{ color: 'var(--moss)', fontWeight: 600 }}>
                +₦{fmt2(earned)} earned
              </span>
            </p>

            {/* Sliders */}
            <div className="flex flex-col gap-6">

              {/* Starting deposit */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>
                    Starting deposit
                  </span>
                  <span style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '20px', color: 'var(--navy)' }}>
                    ₦{fmt(deposit)}
                  </span>
                </div>
                <input
                  type="range" min={0} max={5000000} step={50000}
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  className="w-full"
                  style={{ accentColor: 'var(--navy)', height: '6px', cursor: 'pointer' }}
                />
              </div>

              {/* Monthly contribution */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>
                    Monthly contribution
                  </span>
                  <span style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '20px', color: 'var(--navy)' }}>
                    ₦{fmt(monthly)}
                  </span>
                </div>
                <input
                  type="range" min={0} max={500000} step={5000}
                  value={monthly}
                  onChange={(e) => setMonthly(Number(e.target.value))}
                  className="w-full"
                  style={{ accentColor: 'var(--navy)', height: '6px', cursor: 'pointer' }}
                />
              </div>

              {/* Time horizon */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>
                    Time horizon
                  </span>
                  <span style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '20px', color: 'var(--navy)' }}>
                    {years} {years === 1 ? 'year' : 'years'}
                  </span>
                </div>
                <input
                  type="range" min={1} max={30} step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full"
                  style={{ accentColor: 'var(--navy)', height: '6px', cursor: 'pointer' }}
                />
              </div>
            </div>

            {/* Toggle */}
            <div
              className="flex gap-2 mt-6 p-1 rounded-[14px]"
              style={{ background: 'var(--cream-2)' }}
            >
              {[
                { label: 'Big bank — 0.5% p.a.', value: false },
                { label: 'Vaulta — 12% p.a.',    value: true  },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setUseVaulta(opt.value)}
                  className="flex-1 rounded-[10px] py-3 text-sm font-medium transition-all duration-200"
                  style={{
                    background: useVaulta === opt.value ? 'var(--navy)' : 'transparent',
                    color: useVaulta === opt.value ? 'var(--cream)' : 'var(--ink-60)',
                    fontWeight: useVaulta === opt.value ? 600 : 500,
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '13px',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}