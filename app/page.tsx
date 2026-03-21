import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { CompetenciesSection } from "@/components/competencies-section"
import { GovernanceSection } from "@/components/governance-section"
import { MapSection } from "@/components/map-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <EcosystemSection />
      <CompetenciesSection />
      <GovernanceSection />
      <MapSection />
      <Footer />
    </main>
  )
}
