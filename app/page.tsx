import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { MachineInfo } from "@/components/machine-info"
import { WhatToClean } from "@/components/what-to-clean"
import { Pricing } from "@/components/pricing"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <MachineInfo />
      <WhatToClean />
      <Pricing />
      <WhyChooseUs />
      <CallToAction />
      <Footer />
    </main>
  )
}
