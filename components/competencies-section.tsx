"use client"

import { motion } from "framer-motion"

const competencies = [
  {
    titleEn: "Global Sourcing",
    titleZh: "全球採購",
    descriptionEn: "End-to-end procurement solutions with rigorous supplier vetting, quality assurance protocols, and competitive pricing strategies across diverse product categories.",
    descriptionZh: "涵蓋多元產品類別的端到端採購解決方案，包括嚴格供應商審核、品質保證及具競爭力之定價。",
  },
  {
    titleEn: "Cold-Chain Logistics",
    titleZh: "冷鏈物流",
    descriptionEn: "Temperature-controlled supply chain management ensuring product integrity from origin to destination with real-time monitoring and compliance tracking capabilities.",
    descriptionZh: "溫控供應鏈管理，確保貨物從原產地到目的地的完整性，配備實時監控功能。",
  },
  {
    titleEn: "Market Entry Strategy",
    titleZh: "市場進入策略",
    descriptionEn: "Strategic advisory and operational support for brands entering the Greater China and ASEAN markets, leveraging deep local expertise and established distribution networks.",
    descriptionZh: "為進入大中華及東盟市場的品牌提供策略顧問及營運支援，運用深厚的本地專業知識及成熟的分銷網絡。",
  },
]

export function CompetenciesSection() {
  return (
    <section className="py-32 lg:py-48 bg-background">
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
            What We Do
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-tight">
            Core Competencies
          </h2>
          <p className="text-sm tracking-[0.15em] text-muted-foreground mt-4">
            核心能力
          </p>
        </motion.div>

        {/* 3-Column Competencies Grid */}
        <div className="grid md:grid-cols-3 gap-0">
          {competencies.map((competency, index) => (
            <motion.div
              key={competency.titleEn}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border-t border-border pt-8 pb-12 px-0 md:px-6 first:pl-0 last:pr-0"
            >
              {/* Title */}
              <h3 className="font-serif text-xl lg:text-2xl font-normal text-foreground leading-tight mb-2">
                {competency.titleEn}
              </h3>
              <p className="text-xs tracking-[0.1em] text-muted-foreground mb-6">
                {competency.titleZh}
              </p>

              {/* Description */}
              <p className="text-sm text-foreground leading-relaxed mb-4">
                {competency.descriptionEn}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {competency.descriptionZh}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
