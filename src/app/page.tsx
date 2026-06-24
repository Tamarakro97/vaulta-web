
// The file should already be AfricaPay.tsx from the latest version
// Make sure your imports match:
import { Navbar }       from '@/components/sections/Navbar'
import { Hero }         from '@/components/sections/Hero'
import { TrustedBy }    from '@/components/sections/TrustedBy'
import { Features }     from '@/components/sections/Features'
import { ComparisonTool } from '@/components/sections/ComparisonTool'  // rename this to Calculator.tsx
import { HowItWorks }   from '@/components/sections/HowItWorks'
// import { Testimonial } from '@/components/sections/Testimonial'
import { AfricaPay }     from '@/components/sections/AfricaPay'
import { Calculator } from '@/components/sections/Calculator'
import { Security }      from '@/components/sections/Security'
import { CTABanner }    from '@/components/sections/CTABanner'
import { Footer }       from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <ComparisonTool />
      <HowItWorks />
      {/* <Testimonial/> */}
      <AfricaPay />
      <Calculator />
      <Security />
      <CTABanner />
      <Footer />
    </main>
  )
}