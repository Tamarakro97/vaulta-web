'use client'
import { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'ghost' | 'peach'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const sizes = {
    sm: 'h-[38px] px-[18px] text-[14px]',
    md: 'h-[44px] px-[22px] text-[15px]',
    lg: 'h-[54px] px-[28px] text-[16px]',
  }
  const variants: Record<Variant, string> = {
    primary: 'bg-[var(--navy)] text-[var(--cream)] hover:bg-[var(--navy-2)]',
    ghost:   'bg-transparent text-[var(--navy)] border border-[var(--line-strong)] hover:bg-[rgba(16,26,51,0.04)] hover:border-[var(--navy)]',
    peach:   'bg-[var(--peach)] text-[var(--navy)] hover:bg-[var(--rose)]',
  }
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full font-semibold
        transition-transform duration-150
        hover:-translate-y-px active:translate-y-0
        focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]
        ${sizes[size]} ${variants[variant]} ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}