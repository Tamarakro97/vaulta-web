import { InputHTMLAttributes } from 'react'

export function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`
        h-11 w-full rounded-[12px] border border-gray-200 px-4
        text-sm text-[#101A33] bg-white
        focus:outline-none focus:border-[#2CC8CC]
        focus:shadow-[0_0_0_3px_rgba(44,200,204,0.20)]
        transition-shadow duration-150
        ${className}
      `}
      {...props}
    />
  )
}