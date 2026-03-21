import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { CompetenciesSection } from "@/components/competencies-section"
import { PrivacySection } from "@/components/privacy-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <section id="ecosystem" className="scroll-mt-20">
        <EcosystemSection />
      </section>
      <section id="competencies" className="scroll-mt-20">
        <CompetenciesSection />
      </section>
      <section id="privacy" className="scroll-mt-20">
        <PrivacySection />
      </section>
      <Footer />
    </main>
  )
}
