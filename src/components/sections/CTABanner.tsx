import { Button } from '@/components/ui/Button'

export function CTABanner() {
  return (
    <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #0C1224 0%, #101A33 100%)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(44,200,204,0.12) 0%, transparent 70%)' }}
        />
        <h2 className="text-white font-bold mb-4 relative" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
          Ready to borderless your finances?
        </h2>
        <p className="text-white/50 mb-10 text-lg">
          Join thousands of businesses transacting across Africa with zero friction.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" className="px-10">Open an Account</Button>
          <Button variant="ghost" className="px-10">Get API Keys</Button>
        </div>
      </div>
    </section>
  )
}