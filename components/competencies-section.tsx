"use client"

import { motion } from "framer-motion"

const competencies = [
  {
    number: "01",
    titleEn: "Global Sourcing Excellence",
    titleZh: "多維度採購",
    descriptionEn: "End-to-end procurement solutions with rigorous supplier vetting, quality assurance protocols, and competitive pricing strategies across diverse product categories.",
    descriptionZh: "涵蓋多元產品類別的端到端採購解決方案，包括嚴格供應商審核、品質保證及具競爭力之定價。",
  },
  {
    number: "02",
    titleEn: "Cold-Chain Logistics",
    titleZh: "冷鏈物流",
    descriptionEn: "Temperature-controlled supply chain management ensuring product integrity from origin to destination with real-time monitoring and compliance tracking capabilities.",
    descriptionZh: "溫控供應鏈管理，確保貨物從原產地到目的地的完整性，配備實時監控功能。",
  },
  {
    number: "03",
    titleEn: "Greater China & ASEAN Gateway",
    titleZh: "東南亞與大中華門戶",
    descriptionEn: "Your strategic entry point to Asia&apos;s most dynamic markets, with deep local expertise, established distribution networks, and regulatory navigation support.",
    descriptionZh: "您進入亞洲最具活力市場的策略入口，擁有深厚的本地專業知識及區域網絡。",
  },
]

export function CompetenciesSection() {
  return (
    <section className="py-32 lg:py-48 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 lg:mb-32"
        >
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
            Core Competencies
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-tight">
            Infrastructure & Capability
          </h2>
          <p className="text-xs tracking-[0.2em] text-muted-foreground mt-4">
            核心能力
          </p>
        </motion.div>

        {/* Competencies Grid */}
        <div className="space-y-0">
          {competencies.map((competency, index) => (
            <motion.div
              key={competency.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border-t border-border py-16 lg:py-20 group"
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="font-serif text-4xl lg:text-5xl font-normal text-border group-hover:text-muted-foreground transition-colors duration-500">
                    {competency.number}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="font-serif text-2xl lg:text-3xl font-normal text-foreground leading-tight mb-2">
                    {competency.titleEn}
                  </h3>
                  <p className="text-sm tracking-[0.1em] text-muted-foreground">
                    {competency.titleZh}
                  </p>
                </div>

                {/* Description */}
                <div className="lg:col-span-7">
                  <p className="text-base lg:text-lg text-foreground leading-relaxed mb-4">
                    {competency.descriptionEn}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {competency.descriptionZh}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
