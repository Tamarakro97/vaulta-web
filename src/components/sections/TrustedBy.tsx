export function TrustedBy() {
  const logos = ['CBN Licensed', 'NDIC Insured', 'Flutterwave', 'Paystack', 'ISO 27001', 'Africa Pay']
  const doubled = [...logos, ...logos]

  return (
    <section className="py-16 bg-[#101A33] border-y border-white/5 overflow-hidden">
      <p className="text-center text-white/30 text-sm mb-10 tracking-wide">
        Trusted by thousands of businesses, freelancers, and fintechs across Africa.
      </p>
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((logo, i) => (
          <span key={i} className="inline-flex items-center mx-10 text-white/20 font-semibold text-lg tracking-tight">
            {logo}
          </span>
        ))}
      </div>
    </section>
  )
}