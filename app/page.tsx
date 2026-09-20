import { Hero } from "@/components/sales/hero"
import { Pain } from "@/components/sales/pain"
import { Transformations } from "@/components/sales/transformations"
import { Benefits } from "@/components/sales/benefits"
import { Testimonials } from "@/components/sales/testimonials"
import { Bonuses } from "@/components/sales/bonuses"
import { Pricing } from "@/components/sales/pricing"
import { Faq } from "@/components/sales/faq"
import { FinalCta, Footer } from "@/components/sales/final-cta"

export default function Page() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <Hero />
      <Pain />
      <Transformations />
      <Benefits />
      <Testimonials />
      <Bonuses />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  )
}
