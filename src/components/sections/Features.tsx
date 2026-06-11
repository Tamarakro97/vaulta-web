'use client'
import { motion, type Variants } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { IconDeviceMobile, IconWallet, IconArrowsExchange, IconShieldCheck, IconChartBar } from '@tabler/icons-react'

const cards = [
  {
    icon: <IconWallet size={28} />,
    title: 'The Vault',
    badge: 'Savings',
    desc: 'Set a goal, name it, and Vaulta moves money there automatically. Earn 12% p.a. from day one. No minimums, no lockups.',
  },
  {
    icon: <IconDeviceMobile size={28} />,
    title: 'Buckets',
    badge: 'Budgeting',
    desc: 'Split your income the moment it lands. Rent, groceries, the fun fund — Vaulta does the math so you don\'t have to.',
  },
  {
    icon: <IconArrowsExchange size={28} />,
    title: 'Instant Transfers',
    badge: 'Send & Receive',
    desc: 'Send money to any Nigerian bank account in minutes. No wait, no wire fees, no fuss.',
  },
  {
    icon: <IconShieldCheck size={28} />,
    title: 'Bank-grade Security',
    badge: 'Security',
    desc: 'NDIC insured up to ₦5M, biometric login, card freeze in a tap. Your money, watched over quietly.',
  },
  {
    icon: <IconChartBar size={28} />,
    title: 'A Clearer Picture',
    badge: 'Insights',
    desc: 'Weekly summaries that read like a postcard, not a spreadsheet. Know exactly where you stand.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
    },
  },
}

export function Features() {
  return (
    <section
      id="features"
      style={{
        background: 'var(--cream-2)',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: 'clamp(20px, 5vw, 48px)',
        paddingRight: 'clamp(20px, 5vw, 48px)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-end mb-16">
          <div className="flex-1">
            <p className="mb-3" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>
              What&apos;s inside
            </p>
            <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--navy)', margin: 0 }}>
              A whole financial life,<br />in one calm place.
            </h2>
          </div>
          <div className="flex-1">
            <p style={{ fontSize: 'clamp(15px, 2vw, 20px)', lineHeight: 1.5, color: 'var(--ink-60)', maxWidth: '400px' }}>
              Everything you&apos;d want from a bank, none of the noise you wouldn&apos;t.
            </p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {cards.map((card) => (
            <motion.div key={card.title} variants={item}>
              <Card size="feature" className="h-full flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--cream)', color: 'var(--navy)', border: '1px solid var(--line)' }}>
                  {card.icon}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--teal-deep)' }}>
                  {card.badge}
                </span>
                <h3 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 600, fontSize: '20px', color: 'var(--navy)', margin: 0 }}>{card.title}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--ink-60)', margin: 0 }}>{card.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}