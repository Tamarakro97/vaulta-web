export function TrustedBy() {
  const logos = ['CBN Licensed', 'NDIC Insured', 'Flutterwave', 'Paystack', 'ISO 27001', 'Africa Pay']
  const doubled = [...logos, ...logos]

  return (
    <section
      className="overflow-hidden"
      style={{
        background: 'var(--cream)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        padding: '28px 0',
      }}
    >
      <p
        className="text-center mb-6"
        style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-60)', paddingLeft: '20px', paddingRight: '20px' }}
      >
        Banking partners &amp; security
      </p>
      <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
        {doubled.map((logo, i) => (
          <span
            key={i}
            style={{ display: 'inline-flex', alignItems: 'center', margin: '0 40px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '18px', letterSpacing: '-0.02em', color: 'var(--navy)', opacity: 0.55 }}
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  )
}