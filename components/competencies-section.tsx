"use client"

import { motion } from "framer-motion"

const competencies = [
  {
    id: "sourcing",
    titleEn: "Global Sourcing",
    titleZh: "全球採購",
    descriptionEn: "End-to-end procurement solutions with rigorous supplier vetting, quality assurance protocols, and competitive pricing strategies across diverse product categories.",
    descriptionZh: "涵蓋多元產品類別的端到端採購解決方案，包括嚴格供應商審核、品質保證及具競爭力之定價。",
    image: "https://images.unsplash.com/photo-1414235077428-33898ed1e829?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Gourmet perishables and premium goods",
  },
  {
    id: "logistics",
    titleEn: "Cold-Chain Logistics",
    titleZh: "冷鏈物流",
    descriptionEn: "Temperature-controlled supply chain management ensuring product integrity from origin to destination with real-time monitoring and compliance tracking capabilities.",
    descriptionZh: "溫控供應鏈管理，確保貨物從原產地到目的地的完整性，配備實時監控功能。",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Industrial logistics and shipping containers",
  },
  {
    id: "gateway",
    titleEn: "Greater China & ASEAN Gateway",
    titleZh: "大中華及東盟門戶",
    descriptionEn: "Strategic advisory and operational support for brands entering the Greater China and ASEAN markets, leveraging deep local expertise and established distribution networks.",
    descriptionZh: "為進入大中華及東盟市場的品牌提供策略顧問及營運支援，運用深厚的本地專業知識及成熟的分銷網絡。",
    image: null,
    imageAlt: null,
  },
]

export function CompetenciesSection() {
  return (
    <section id="competencies" className="py-32 lg:py-48 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
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

        {/* Asymmetric Bento Grid with Real Images */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Sourcing - Large Card with Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 border border-border overflow-hidden group cursor-pointer scroll-mt-24"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <img
                src={competencies[0].image!}
                alt={competencies[0].imageAlt!}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 left-4 text-xs tracking-widest text-white/60 uppercase">
                Sourcing
              </div>
            </div>
            <div className="p-8 lg:p-10">
              <h3 className="font-serif text-2xl lg:text-3xl font-normal text-foreground leading-tight mb-2">
                {competencies[0].titleEn}
              </h3>
              <p className="text-xs tracking-[0.1em] text-muted-foreground mb-6">
                {competencies[0].titleZh}
              </p>
              <p className="text-sm text-foreground leading-relaxed mb-4">
                {competencies[0].descriptionEn}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {competencies[0].descriptionZh}
              </p>
            </div>
          </motion.div>

          {/* Logistics - Tall Card with Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 border border-border overflow-hidden group cursor-pointer scroll-mt-24"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <img
                src={competencies[1].image!}
                alt={competencies[1].imageAlt!}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 left-4 text-xs tracking-widest text-white/60 uppercase">
                Cold-Chain
              </div>
            </div>
            <div className="p-8 lg:p-10">
              <h3 className="font-serif text-2xl lg:text-3xl font-normal text-foreground leading-tight mb-2">
                {competencies[1].titleEn}
              </h3>
              <p className="text-xs tracking-[0.1em] text-muted-foreground mb-6">
                {competencies[1].titleZh}
              </p>
              <p className="text-sm text-foreground leading-relaxed mb-4">
                {competencies[1].descriptionEn}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {competencies[1].descriptionZh}
              </p>
            </div>
          </motion.div>

          {/* Gateway - Full Width Card with Abstract Pattern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-12 border border-border overflow-hidden group cursor-pointer scroll-mt-24"
          >
            <div className="grid lg:grid-cols-2">
              {/* Abstract skyline visual */}
              <div className="relative w-full aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-neutral-100 to-neutral-50 overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-center pb-12">
                  <div className="flex items-end gap-2">
                    {[40, 60, 35, 80, 50, 65, 45, 70, 55].map((h, i) => (
                      <div 
                        key={i} 
                        className="w-4 bg-neutral-300 group-hover:bg-neutral-400 transition-colors duration-500"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-xs tracking-widest text-neutral-400 uppercase">
                  Gateway
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="font-serif text-2xl lg:text-3xl font-normal text-foreground leading-tight mb-2">
                  {competencies[2].titleEn}
                </h3>
                <p className="text-xs tracking-[0.1em] text-muted-foreground mb-6">
                  {competencies[2].titleZh}
                </p>
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  {competencies[2].descriptionEn}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {competencies[2].descriptionZh}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
