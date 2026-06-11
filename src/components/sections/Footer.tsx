'use client'

const links = {
  Product:   ['Wallet', 'Africa Pay', 'Vault', 'Cards'],
  Company:   ['About', 'Careers', 'Press', 'Blog'],
  Resources: ['Help center', 'Security', 'Status', 'Contact'],
  Legal:     ['Terms', 'Privacy', 'Disclosures', 'NDIC'],
}

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--navy)',
        paddingTop: '80px',
        paddingBottom: '32px',
        paddingLeft: 'clamp(20px, 5vw, 48px)',
        paddingRight: 'clamp(20px, 5vw, 48px)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
                <path d="M6 8 L20 32 L34 8" stroke="#F6F0E6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 14 Q20 8 31 14" stroke="#3FD0D4" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              </svg>
              <span style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: '20px', letterSpacing: '-0.02em', color: 'var(--cream)' }}>
                Vaulta
              </span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(246,240,230,0.55)', maxWidth: '26ch' }}>
              Banking that feels like home. A warmer, calmer way to keep, grow, and use your money.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, color: 'rgba(246,240,230,0.45)', marginBottom: '18px' }}>
                {section}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" style={{ fontSize: '14px', color: 'rgba(246,240,230,0.75)', textDecoration: 'none' }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'rgba(246,240,230,0.35)' }}
        >
          <span>© 2025 Vaulta Financial, Inc. All rights reserved.</span>
          <span>Made with care · Lagos</span>
        </div>

      </div>
    </footer>
  )
}