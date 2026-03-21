import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PedigreeSection } from "@/components/pedigree-section"
import { CompetenciesSection } from "@/components/competencies-section"
import { ComplianceSection } from "@/components/compliance-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a192f]">
      <Navbar />
      <HeroSection />
      <section id="about" className="scroll-mt-20">
        <PedigreeSection />
      </section>
      <CompetenciesSection />
      <ComplianceSection />
      <Footer />
    </main>
  )
}
