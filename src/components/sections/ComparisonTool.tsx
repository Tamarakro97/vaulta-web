'use client'
import { useState } from 'react'

export function ComparisonTool() {
  const [amount, setAmount] = useState(500000)

  const bankCost   = Math.round(amount * 0.09)
  const vaultaCost = Math.round(amount * 0.012)
  const saved      = bankCost - vaultaCost

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-[11px] font-medium tracking-[0.08em] uppercase text-[#2CC8CC] mb-3">
          Why Vaulta
        </p>
        <h2 className="text-[#101A33] font-bold mb-4" style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}>
          Stop losing 8–10% to the legacy banking trap.
        </h2>
        <p className="text-gray-500 mb-12 text-base">
          Drag the slider to see how much you save on your transfer.
        </p>

        {/* Slider */}
        <div className="mb-10">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>₦10,000</span>
            <span className="font-mono font-bold text-[#101A33] text-lg">
              ₦{amount.toLocaleString()}
            </span>
            <span>₦10,000,000</span>
          </div>
          <input
            type="range"
            min={10000} max={10000000} step={10000}
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{ accentColor: '#2CC8CC' }}
          />
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-[20px] border-2 border-red-100 p-6 bg-red-50/30">
            <p className="text-xs font-mono uppercase tracking-widest text-red-400 mb-4">Traditional Bank</p>
            <p className="font-mono font-bold text-3xl text-red-500 mb-2">
              ₦{bankCost.toLocaleString()} lost
            </p>
            <p className="text-gray-400 text-sm">~9% FX spread + hidden fees</p>
            <div className="mt-4 pt-4 border-t border-red-100 flex gap-4 text-sm text-gray-500">
              <span>⏱ 3–5 Business Days</span>
              <span>📋 Multiple forms</span>
            </div>
          </div>

          <div className="rounded-[20px] border-2 border-[#2CC8CC]/30 p-6"
            style={{ boxShadow: '0 0 20px rgba(44,200,204,0.12)' }}>
            <p className="text-xs font-mono uppercase tracking-widest text-[#2CC8CC] mb-4">Vaulta</p>
            <p className="font-mono font-bold text-3xl text-[#101A33] mb-2">
              ₦{vaultaCost.toLocaleString()} only
            </p>
            <p className="text-gray-400 text-sm">Tight spreads, no hidden fees</p>
            <div className="mt-4 pt-4 border-t border-[#2CC8CC]/20 flex gap-4 text-sm text-gray-500">
              <span>⚡ &lt;15 Seconds</span>
              <span>✅ One tap</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-400">
          You save <span className="font-mono font-bold text-[#2CC8CC]">₦{saved.toLocaleString()}</span> with Vaulta
        </div>
      </div>
    </section>
  )
}