'use client'
import { useState } from 'react'

export function CTABanner() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <section
      id="cta"
      style={{
        background: 'var(--cream)',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: 'clamp(20px, 5vw, 48px)',
        paddingRight: 'clamp(20px, 5vw, 48px)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div
          className="rounded-[36px] relative overflow-hidden"
          style={{ background: 'var(--navy)', padding: 'clamp(40px, 6vw, 80px)' }}
        >
          {/* Decorative orbs */}
          <div aria-hidden="true" style={{ position: 'absolute', right: '-120px', bottom: '-120px', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(63,208,212,0.35) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', left: '-80px', top: '-80px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(242,183,155,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div className="flex flex-col md:flex-row gap-10 md:gap-[60px] items-center relative z-10">
            {/* Copy */}
            <div className="flex-1">
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(246,240,230,0.6)', marginBottom: '16px' }}>
                Open in under 4 minutes
              </p>
              <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--cream)', margin: '0 0 16px' }}>
                Make today the day Africa felt like one market.
              </h2>
              <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.6, color: 'rgba(246,240,230,0.75)', marginBottom: '32px', maxWidth: '480px' }}>
                Join 180,000+ businesses and traders moving money across Africa in minutes, not days. No fees, no minimums, no fine-print regrets.
              </p>

              {/* Email form */}
              <div
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '22px', padding: '8px', display: 'flex', gap: '8px', flexWrap: 'wrap', position: 'relative', zIndex: 1, maxWidth: '480px' }}
              >
                <input
                  type="email"
                  placeholder="you@somewhere.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ flex: 1, background: 'transparent', border: 0, outline: 0, color: 'var(--cream)', fontFamily: 'var(--font-body)', fontSize: '15px', padding: '0 18px', minWidth: '180px' }}
                />
                <button
                  onClick={() => { if (email) setSubmitted(true) }}
                  style={{
                    height: '44px',
                    padding: '0 22px',
                    borderRadius: '999px',
                    background: submitted ? 'var(--teal)' : 'var(--peach)',
                    color: 'var(--navy)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '15px',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'background 300ms',
                  }}
                >
                  {submitted ? '✓ You\'re on the list' : 'Get early access →'}
                </button>
              </div>

              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'rgba(246,240,230,0.45)', marginTop: '16px', letterSpacing: '0.04em' }}>
                By signing up you agree to our terms · We never sell your data.
              </p>
            </div>

            {/* Visual */}
            <div className="hidden md:block" style={{ flexShrink: 0 }}>
              <div style={{ width: '240px', aspectRatio: '1', borderRadius: '24px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', display: 'grid', placeItems: 'center' }}>
                <svg viewBox="0 0 200 200" fill="none" style={{ width: '75%', height: '75%' }}>
                  <circle cx="100" cy="100" r="90" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                  <circle cx="100" cy="100" r="70" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                  <circle cx="100" cy="100" r="50" stroke="rgba(63,208,212,0.4)" strokeWidth="1"/>
                  <path d="M60 100 L100 140 L150 70" stroke="#3FD0D4" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <text x="100" y="180" textAnchor="middle" fill="#F6F0E6" opacity="0.6" fontFamily="Geist Mono" fontSize="10" letterSpacing="2">NDIC INSURED · ₦5M</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}