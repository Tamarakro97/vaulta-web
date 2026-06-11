'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { IconMenu2, IconX } from '@tabler/icons-react'

const links = [
  { label: 'Features',     href: '#features' },
  { label: 'Earn',         href: '#grow' },
  { label: 'How it works', href: '#how' },
  { label: 'Customers',    href: '#story' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all"
        style={{
          background: 'color-mix(in oklab, var(--cream) 88%, transparent)',
          backdropFilter: 'saturate(140%) blur(12px)',
          borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
          height: scrolled ? '60px' : '76px',
          transition: 'height 250ms ease, border-color 250ms ease',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-12 h-full flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Image src="/vaulta-logo.png" alt="Vaulta" width={32} height={32} className="object-contain" />
            <span style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: '22px', letterSpacing: '-0.02em', color: 'var(--navy)' }}>
              Vaulta
            </span>
          </a>

          <div className="hidden md:flex items-center gap-9">
            {links.map(l => (
              <a key={l.label} href={l.href}
                className="text-[15px] font-medium text-[var(--navy-2)] hover:text-[var(--navy)] transition-colors relative group pb-1">
                {l.label}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 group-hover:w-full bg-[var(--peach)] transition-all duration-250" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button variant="primary" size="sm">Open an account →</Button>
          </div>

          <button className="md:hidden text-[var(--navy)]" onClick={() => setOpen(true)} aria-label="Open menu">
            <IconMenu2 size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[100] flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative ml-auto w-72 h-full flex flex-col gap-6 p-6"
            style={{ background: 'var(--navy)' }}>
            <button className="self-end text-white" onClick={() => setOpen(false)} aria-label="Close menu">
              <IconX size={22} />
            </button>
            {links.map(l => (
              <a key={l.label} href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-white">
                {l.label}
              </a>
            ))}
            <div className="mt-auto flex flex-col gap-3">
              <Button variant="ghost" className="w-full border-white/20 text-white hover:text-white">Sign in</Button>
              <Button variant="peach" className="w-full">Open an account →</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}