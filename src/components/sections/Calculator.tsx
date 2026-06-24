'use client'
import { useState } from 'react'

const corridors = [
  { flag: '🇰🇪', country: 'Kenya',        from: 'NGN', to: 'KES', rate: 0.009625 },
  { flag: '🇬🇭', country: 'Ghana',        from: 'NGN', to: 'GHS', rate: 0.003812 },
  { flag: '🇿🇦', country: 'South Africa', from: 'NGN', to: 'ZAR', rate: 0.021 },
  { flag: '🇰🇪', country: 'Kenya',        from: 'GHS', to: 'KES', rate: 9.14 },
]

export function Calculator() {
  const [selected, setSelected] = useState(0)
  const [amount, setAmount] = useState(500000)
  const corridor = corridors[selected]

  const bankFee   = amount * 0.085
  const bankTime   = '3–5 days'
  const vaultaFee  = 250
  const vaultaTime = '2–5 minutes'
  const saved      = bankFee - vaultaFee

  const received = ((amount - vaultaFee) * corridor.rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  const fmt = (n: number) => n.toLocaleString('en-NG', { maximumFractionDigits: 0 })

  return (
    <section
      id="grow"
      style={{
        background: 'var(--cream-2)',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: 'clamp(20px, 5vw, 48px)',
        paddingRight: 'clamp(20px, 5vw, 48px)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">

          {/* Left — Copy */}
          <div className="flex-1">
            <p className="mb-3" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>
              See it move
            </p>
            <h2 className="mb-5" style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--navy)' }}>
              Borders shouldn&apos;t cost you days or a fortune.
            </h2>
            <p className="mb-8" style={{ fontSize: 'clamp(15px, 2vw, 20px)', lineHeight: 1.5, color: 'var(--ink-60)', maxWidth: '480px' }}>
              Pick a country and an amount, and we&apos;ll show you how fast and how cheaply your money crosses. We&apos;ll keep the math honest.
            </p>
            <div className="flex flex-wrap gap-3">
              {['No hidden fees', 'No branch visits', 'PAPSS-powered'].map((badge) => (
                <span
                  key={badge}
                  style={{ height: '38px', padding: '0 18px', borderRadius: '9999px', border: '1.5px solid var(--line-strong)', fontSize: '14px', fontWeight: 500, color: 'var(--navy)', display: 'inline-flex', alignItems: 'center' }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Cost/speed card */}
          <div
            className="w-full md:w-auto"
            style={{ background: 'var(--cream)', border: '1px solid var(--line)', borderRadius: '32px', padding: 'clamp(24px, 4vw, 40px)', boxShadow: 'var(--shadow-card)', maxWidth: '480px', width: '100%' }}
          >
            {/* Corridor tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {corridors.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '999px',
                    border: selected === i ? '1.5px solid var(--navy)' : '1.5px solid var(--line)',
                    background: selected === i ? 'var(--navy)' : 'transparent',
                    color: selected === i ? 'var(--cream)' : 'var(--navy)',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {c.flag} {c.from}→{c.to}
                </button>
              ))}
            </div>

            {/* Amount input */}
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)', marginBottom: '8px' }}>
              You send ({corridor.from})
            </p>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full mb-6"
              style={{
                fontFamily: 'var(--font-bricolage)',
                fontWeight: 800,
                fontSize: 'clamp(28px, 5vw, 40px)',
                color: 'var(--navy)',
                background: 'var(--cream-2)',
                border: '1px solid var(--line)',
                borderRadius: '16px',
                padding: '12px 16px',
                outline: 'none',
              }}
            />

            {/* Comparison */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[20px] p-5" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#EF4444', marginBottom: '6px' }}>Traditional bank</p>
                <p style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '22px', color: 'var(--navy)' }}>₦{fmt(bankFee)} in fees</p>
                <p style={{ fontSize: '13px', color: 'var(--ink-60)', marginTop: '4px' }}>{bankTime} to settle</p>
              </div>

              <div className="rounded-[20px] p-5" style={{ background: 'rgba(63,208,212,0.08)', border: '1px solid rgba(63,208,212,0.25)' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--teal-deep)', marginBottom: '6px' }}>With Vaulta</p>
                <p style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '22px', color: 'var(--navy)' }}>₦{fmt(vaultaFee)} flat fee</p>
                <p style={{ fontSize: '13px', color: 'var(--ink-60)', marginTop: '4px' }}>{vaultaTime} to settle · {corridor.to} {received} received</p>
              </div>
            </div>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--moss)', marginTop: '16px', textAlign: 'center', fontWeight: 600 }}>
              You save ₦{fmt(saved)} with Vaulta
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}