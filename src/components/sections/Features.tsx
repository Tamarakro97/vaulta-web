'use client'
import { motion, type Variants } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { IconDeviceMobile, IconWallet, IconApi, IconShieldCheck, IconChartBar } from '@tabler/icons-react'

// Card definitions — replace the `cards` array only:
const cards = [
  {
    slot: 'f1',
    icon: <IconWallet size={24} />,
    title: 'The Vault',
    badge: 'Savings',
    desc: 'Set a goal, name it, and Vaulta moves money there automatically. Earn 12% p.a. from day one. No minimums, no lockups.',
    dark: true,
  },
  {
    slot: 'f2',
    icon: <IconDeviceMobile size={24} />,
    title: 'Buckets',
    badge: 'Budgeting',
    desc: 'Split your income the moment it lands. Rent, groceries, the fun fund — Vaulta does the math so you don\'t have to.',
    warm: true,
  },
  {
    slot: 'f3',
    icon: <IconApi size={24} />,
    title: 'Instant Transfers',
    badge: 'Send & Receive',
    desc: 'Send money to any Nigerian bank account in seconds and any african country in minutes. No wait, no wire fees, no fuss.',
  },
  {
    slot: 'f4',
    icon: <IconShieldCheck size={24} />,
    title: 'Bank-grade Security',
    badge: 'Security',
    desc: 'NDIC insured up to ₦5M, biometric login, card freeze in a tap. Your money, watched over quietly.',
  },
  {
    slot: 'f5',
    icon: <IconChartBar size={24} />,
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
    <section id="features" className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[11px] font-medium tracking-[0.08em] uppercase text-[#2CC8CC] mb-3">
          Platform
        </p>
        <h2 className="text-[#101A33] font-bold mb-16" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
          One platform, dual capability.
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {cards.map(card => (
            <motion.div key={card.title} variants={item}>
              <Card size="feature" className="h-full flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAFAFA] flex items-center justify-center">
                  {card.icon}
                </div>
                <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-[#2CC8CC]">
                  {card.badge}
                </span>
                <h3 className="text-[#101A33] font-bold text-xl">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}