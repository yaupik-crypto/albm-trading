"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Package, Thermometer, Globe, ArrowUpRight } from "lucide-react"

const competencies = [
  {
    icon: Package,
    number: "01",
    titleEn: "Multi-Vertical Sourcing",
    titleZh: "多維度採購",
    descriptionEn: "End-to-end procurement solutions with rigorous supplier vetting, quality assurance, and competitive pricing across diverse product categories.",
    descriptionZh: "涵蓋多元產品類別的端到端採購解決方案，包括嚴格供應商審核、品質保證及具競爭力之定價。",
    features: [
      { en: "Supplier Qualification", zh: "供應商資格認證" },
      { en: "Quality Control", zh: "品質管控" },
      { en: "Price Optimization", zh: "價格優化" },
      { en: "Contract Negotiation", zh: "合約談判" },
    ],
  },
  {
    icon: Thermometer,
    number: "02",
    titleEn: "Cold-Chain Logistics",
    titleZh: "卓越冷鏈與物流",
    descriptionEn: "Temperature-controlled supply chain management ensuring product integrity from origin to destination with real-time monitoring capabilities.",
    descriptionZh: "溫控供應鏈管理，確保貨物從原產地到目的地的完整性，配備實時監控功能。",
    features: [
      { en: "Temperature Monitoring", zh: "溫度監測" },
      { en: "Compliance Tracking", zh: "合規追蹤" },
      { en: "Last-Mile Delivery", zh: "最後一哩配送" },
      { en: "Storage Solutions", zh: "倉儲方案" },
    ],
    hasImage: true,
  },
  {
    icon: Globe,
    number: "03",
    titleEn: "Greater China & ASEAN Gateway",
    titleZh: "大中華與亞太市場門戶",
    descriptionEn: "Your strategic entry point to Asia's most dynamic markets, with deep local expertise and established networks across the region.",
    descriptionZh: "您進入亞洲最具活力市場的策略入口，擁有深厚的本地專業知識及區域網絡。",
    features: [
      { en: "Market Entry Strategy", zh: "市場進入策略" },
      { en: "Local Partnerships", zh: "本地夥伴關係" },
      { en: "Regulatory Guidance", zh: "法規指引" },
      { en: "Cultural Navigation", zh: "文化導航" },
    ],
  },
]

export function CompetenciesSection() {
  return (
    <section id="competencies" className="py-24 lg:py-32 bg-[#112240] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="competencies-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#ccd6f6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#competencies-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - Bilingual */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[#233554] bg-[#0a192f]/50">
            <span className="text-xs font-medium text-[#64ffda] tracking-wider uppercase">Core Competencies</span>
            <span className="text-xs text-[#8892b0]">|</span>
            <span className="text-xs text-[#8892b0]">核心能力</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#ccd6f6] mb-4">
            Comprehensive Trade Solutions
          </h2>
          <p className="text-xl text-[#8892b0] mb-2">全方位貿易解決方案</p>
          <p className="text-lg text-[#8892b0]/70 leading-relaxed mt-6">
            Three pillars of excellence that define our commitment to seamless international trade operations.
          </p>
        </motion.div>

        {/* Bento Grid - Competencies */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* First competency - Large card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative p-8 lg:p-10 rounded-2xl border border-[#233554] bg-[#0a192f]/80 backdrop-blur-sm group hover:border-[#64ffda]/30 transition-all duration-300"
          >
            {/* Number */}
            <div className="absolute top-8 right-8 text-6xl lg:text-7xl font-bold text-[#233554] group-hover:text-[#64ffda]/20 transition-colors">
              {competencies[0].number}
            </div>
            
            <div className="w-14 h-14 rounded-xl bg-[#64ffda]/10 flex items-center justify-center mb-6 group-hover:bg-[#64ffda]/20 transition-colors">
              <Package className="w-7 h-7 text-[#64ffda]" />
            </div>
            
            <h3 className="text-2xl font-bold text-[#ccd6f6] mb-2">
              {competencies[0].titleEn}
            </h3>
            <p className="text-lg text-[#8892b0]/70 mb-4">{competencies[0].titleZh}</p>
            
            <p className="text-[#8892b0] leading-relaxed mb-6">
              {competencies[0].descriptionEn}
            </p>
            <p className="text-sm text-[#8892b0]/60 leading-relaxed mb-8">
              {competencies[0].descriptionZh}
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {competencies[0].features.map((feature) => (
                <div 
                  key={feature.en}
                  className="flex items-center gap-2 text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#64ffda]" />
                  <span className="text-[#ccd6f6]">{feature.en}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Second competency - With image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl border border-[#233554] bg-[#0a192f]/80 backdrop-blur-sm group hover:border-[#64ffda]/30 transition-all duration-300 overflow-hidden"
          >
            {/* Image - Refrigerated container */}
            <div className="relative h-48 lg:h-56">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop"
                alt="Cold chain logistics - refrigerated shipping container"
                fill
                className="object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/60 to-transparent" />
              
              {/* Number overlay */}
              <div className="absolute top-4 right-4 text-5xl font-bold text-white/20">
                {competencies[1].number}
              </div>
            </div>
            
            <div className="p-8">
              <div className="w-12 h-12 rounded-xl bg-[#64ffda]/10 flex items-center justify-center mb-5 group-hover:bg-[#64ffda]/20 transition-colors -mt-16 relative z-10 border border-[#233554]">
                <Thermometer className="w-6 h-6 text-[#64ffda]" />
              </div>
              
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">
                {competencies[1].titleEn}
              </h3>
              <p className="text-sm text-[#8892b0]/70 mb-4">{competencies[1].titleZh}</p>
              
              <p className="text-[#8892b0] text-sm leading-relaxed">
                {competencies[1].descriptionEn}
              </p>
            </div>
          </motion.div>

          {/* Third competency - Full width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-2 relative p-8 lg:p-10 rounded-2xl border border-[#233554] bg-gradient-to-br from-[#0a192f]/90 to-[#112240]/90 backdrop-blur-sm group hover:border-[#64ffda]/30 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="flex-1">
                {/* Number */}
                <div className="absolute top-8 right-8 text-6xl lg:text-8xl font-bold text-[#233554] group-hover:text-[#64ffda]/20 transition-colors">
                  {competencies[2].number}
                </div>
                
                <div className="w-14 h-14 rounded-xl bg-[#64ffda]/10 flex items-center justify-center mb-6 group-hover:bg-[#64ffda]/20 transition-colors">
                  <Globe className="w-7 h-7 text-[#64ffda]" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-[#ccd6f6] mb-2">
                  {competencies[2].titleEn}
                </h3>
                <p className="text-lg text-[#8892b0]/70 mb-4">{competencies[2].titleZh}</p>
                
                <p className="text-[#8892b0] leading-relaxed max-w-2xl">
                  {competencies[2].descriptionEn}
                </p>
                <p className="text-sm text-[#8892b0]/60 leading-relaxed mt-2 max-w-2xl">
                  {competencies[2].descriptionZh}
                </p>
              </div>
              
              {/* Features grid */}
              <div className="lg:w-72 grid grid-cols-2 gap-4">
                {competencies[2].features.map((feature) => (
                  <div 
                    key={feature.en}
                    className="p-4 rounded-xl bg-[#112240]/80 border border-[#233554] group-hover:border-[#64ffda]/20 transition-colors"
                  >
                    <div className="text-sm font-medium text-[#ccd6f6] mb-1">{feature.en}</div>
                    <div className="text-xs text-[#8892b0]/60">{feature.zh}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-[#64ffda] font-medium hover:gap-3 transition-all group"
          >
            <span>Discuss Your Requirements</span>
            <span className="text-[#8892b0]">|</span>
            <span>討論您的需求</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
