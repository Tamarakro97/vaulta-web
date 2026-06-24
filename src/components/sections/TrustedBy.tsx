export function TrustedBy() {
  const countries = [
    { code: 'ng', name: 'Nigeria' },
    { code: 'ke', name: 'Kenya' },
    { code: 'gh', name: 'Ghana' },
    { code: 'za', name: 'South Africa' },
    { code: 'eg', name: 'Egypt' },
    { code: 'rw', name: 'Rwanda' },
    { code: 'tz', name: 'Tanzania' },
    { code: 'ug', name: 'Uganda' },
    { code: 'ci', name: "Côte d'Ivoire" },
    { code: 'sn', name: 'Senegal' },
    { code: 'zm', name: 'Zambia' },
    { code: 'et', name: 'Ethiopia' },
  ]
  const doubled = [...countries, ...countries]

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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/css/flag-icons.min.css"
      />
      <p
        className="text-center mb-6"
        style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-60)', paddingLeft: '20px', paddingRight: '20px' }}
      >
        One platform, 54 countries
      </p>
      <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              margin: '0 28px',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--navy)',
              opacity: 0.75,
            }}
          >
            <span
              className={`fi fi-${item.code}`}
              style={{
                width: '28px',
                height: '20px',
                borderRadius: '3px',
                boxShadow: '0 0 0 1px rgba(16,26,51,0.08)',
                flexShrink: 0,
              }}
            />
            <span style={{ fontFamily: 'var(--font-body)' }}>{item.name}</span>
          </span>
        ))}
      </div>
    </section>
  )
}