import { IconChevronRight } from '@tabler/icons-react'

const steps = [
  {
    number: '01 · Open',
    heading: 'Open your account in minutes.',
    body: 'ID and a few taps. No paperwork, no branch visits, no "we\'ll get back to you."',
  },
  {
    number: '02 · Settle in',
    heading: 'Move money in, set up wallet.',
    body: 'Deposit via debit card or bank transfer. Name a savings goal, set an auto-save amount.',
  },
  {
    number: '03 · Watch it work',
    heading: 'Get on with the rest of your life.',
    body: 'We\'ll check in every week with a friendly summary. You\'ll wonder why this took so long.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="py-[140px] px-12" style={{ background: 'var(--cream)' }}>
      <div className="max-w-[1280px] mx-auto">

        {/* Section header — 2 column split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end mb-[72px]">
          <div>
            <h2
              className="font-bold"
              style={{
                fontFamily: 'var(--font-bricolage)',
                fontSize: 'clamp(36px, 4vw, 64px)',
                lineHeight: 1.02,
                letterSpacing: '-0.025em',
                color: 'var(--navy)',
              }}
            >
              Three small steps.<br />One steady result.
            </h2>
          </div>
          <div className="pb-2">
            <p style={{ fontSize: '20px', lineHeight: 1.5, color: 'var(--ink-60)', maxWidth: '400px' }}>
              Sign-up takes about four minutes from your phone. The rest is just life — happening, with a little more breathing room.
            </p>
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="pt-8"
              style={{ borderTop: '2px solid var(--navy)' }}
            >
              <p
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-60)',
                }}
              >
                {step.number}
              </p>
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-bricolage)',
                  fontSize: '28px',
                  fontWeight: 600,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  color: 'var(--navy)',
                }}
              >
                {step.heading}
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--ink-60)', maxWidth: '32ch' }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-8" style={{ borderTop: '1px solid var(--line)' }}>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-[var(--navy)]"
            style={{ fontSize: '15px', color: 'var(--ink-60)' }}
          >
            Ready to start? Open your account in 4 minutes
            <IconChevronRight size={16} />
          </a>
        </div>

      </div>
    </section>
  )
}