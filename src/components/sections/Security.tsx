'use client'
import { IconLock, IconShieldCheck, IconBuilding, IconCertificate } from '@tabler/icons-react'

const items = [
  { icon: <IconLock size={22} />,        title: 'End-to-End Encryption',     desc: 'Every transaction and data exchange is encrypted in transit and at rest.',              color: { bg: '#EFF6FF', icon: '#3B82F6' } },
  { icon: <IconShieldCheck size={22} />, title: 'Automated Fraud Screening',  desc: 'Every transaction is screened in real time before it leaves your wallet.',             color: { bg: '#F0FDF4', icon: '#22C55E' } },
  { icon: <IconBuilding size={22} />,    title: 'Licensed Financial Partners', desc: 'Vaulta operates through CBN-licensed financial institutions only.',                    color: { bg: '#FAF5FF', icon: '#A855F7' } },
  { icon: <IconCertificate size={22} />, title: 'NDIC Insured to ₦5M',        desc: 'Your deposits are protected by the Nigerian Deposit Insurance Corporation.',           color: { bg: '#FFF7ED', icon: '#F97316' } },
]

export function Security() {
  return (
    <section
      style={{
        background: 'var(--cream)',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: 'clamp(20px, 5vw, 48px)',
        paddingRight: 'clamp(20px, 5vw, 48px)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="mb-3" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>
            Security
          </p>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--navy)', margin: 0 }}>
            Bank-grade security for every transaction.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] p-8 flex flex-col gap-4"
              style={{ background: 'var(--cream-2)', border: '1px solid transparent', transition: 'all 200ms' }}
            >
              <div className="flex items-center justify-center" style={{ width: '56px', height: '56px', borderRadius: '18px', background: item.color.bg, color: item.color.icon }}>
                {item.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 600, fontSize: '18px', lineHeight: 1.2, color: 'var(--navy)', margin: 0 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--ink-60)', margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}