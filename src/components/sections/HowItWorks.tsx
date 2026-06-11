import { IconChevronRight } from '@tabler/icons-react'

const steps = [
  {
    number: '01 · Open',
    heading: 'Open your account in minutes.',
    body: 'ID and a few taps. No paperwork, no branch visits, no "we\'ll get back to you."',
  },
  {
    number: '02 · Settle in',
    heading: 'Move money in, set up wallets.',
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
    <section
      id="how"
      style={{
        background: 'var(--cream)',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: 'clamp(20px, 5vw, 48px)',
        paddingRight: 'clamp(20px, 5vw, 48px)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">

        <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-end mb-[72px]">
          <div className="flex-1">
            <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--navy)', margin: 0 }}>
              Three small steps.<br />One steady result.
            </h2>
          </div>
          <div className="flex-1">
            <p style={{ fontSize: 'clamp(15px, 2vw, 20px)', lineHeight: 1.5, color: 'var(--ink-60)', maxWidth: '400px' }}>
              Sign-up takes about four minutes from your phone. The rest is just life — happening, with a little more breathing room.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="pt-8" style={{ borderTop: '2px solid var(--navy)' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--ink-60)', marginBottom: '16px' }}>
                {step.number}
              </p>
              <h3 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '24px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--navy)', marginBottom: '12px' }}>
                {step.heading}
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--ink-60)', maxWidth: '32ch' }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8" style={{ borderTop: '1px solid var(--line)' }}>
          <a href="#cta" className="inline-flex items-center gap-2 font-semibold transition-colors" style={{ fontSize: '15px', color: 'var(--ink-60)' }}>
            Ready to start? Open your account in 4 minutes
            <IconChevronRight size={16} />
          </a>
        </div>

      </div>
    </section>
  )
}