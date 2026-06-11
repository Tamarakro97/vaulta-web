import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'feature'
}

export function Card({ size = 'default', className = '', children, ...props }: CardProps) {
  const sizes = {
    default: 'rounded-[20px] p-6',
    feature: 'rounded-[28px] p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(44,200,204,0.25),0_4px_16px_rgba(44,200,204,0.15)]',
  }
  return (
    <div className={`bg-white shadow-[0_4px_6px_rgba(16,26,51,0.03),0_8px_32px_rgba(16,26,51,0.07)] ${sizes[size]} ${className}`} {...props}>
      {children}
    </div>
  )
}