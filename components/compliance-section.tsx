"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle2, FileCheck, Scale, Clock, Target } from "lucide-react"

const standards = [
  {
    icon: Shield,
    titleEn: "Built on AEO Security Principles",
    titleZh: "建基於 AEO 安全原則",
    descriptionEn: "Our operations adhere to Authorized Economic Operator security frameworks.",
    status: "Operational",
    statusZh: "運作中",
  },
  {
    icon: FileCheck,
    titleEn: "Standardized Processes (Seeking ISO)",
    titleZh: "標準化流程（申請 ISO 中）",
    descriptionEn: "Quality management systems aligned with ISO 9001 standards.",
    status: "In Progress",
    statusZh: "進行中",
  },
  {
    icon: Scale,
    titleEn: "HACCP-Ready Cold Chain",
    titleZh: "HACCP 就緒冷鏈",
    descriptionEn: "Cold chain operations designed for HACCP food safety compliance.",
    status: "Ready",
    statusZh: "就緒",
  },
]

const principles = [
  { en: "Supply Chain Security", zh: "供應鏈安全" },
  { en: "Documentation Integrity", zh: "文件完整性" },
  { en: "Partner Vetting", zh: "合作夥伴審核" },
  { en: "Customs Compliance", zh: "海關合規" },
  { en: "Anti-Bribery Policies", zh: "反賄賂政策" },
  { en: "Data Protection", zh: "數據保護" },
]

export function ComplianceSection() {
  return (
    <section id="standards" className="py-24 lg:py-32 bg-[#0a192f] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#64ffda]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#64ffda]/5 rounded-full blur-3xl translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - Bilingual */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[#233554] bg-[#112240]/50">
            <span className="text-xs font-medium text-[#64ffda] tracking-wider uppercase">Global Standards</span>
            <span className="text-xs text-[#8892b0]">|</span>
            <span className="text-xs text-[#8892b0]">全球營運標準遵循</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#ccd6f6] mb-4">
            Adherence to Global Standards Framework
          </h2>
          <p className="text-xl text-[#8892b0] mb-2">嚴格遵循國際標準框架</p>
          <p className="text-lg text-[#8892b0]/70 leading-relaxed mt-6">
            Our operations are built upon internationally recognized security and quality frameworks. 
            We maintain rigorous internal standards while pursuing formal certifications.
          </p>
          <p className="text-base text-[#8892b0]/60 leading-relaxed mt-2">
            我們的營運建基於國際認可的安全與品質框架，在追求正式認證的同時，維持嚴格的內部標準。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Standards Cards - Left Side */}
          <div className="lg:col-span-3 space-y-6">
            {standards.map((standard, index) => (
              <motion.div
                key={standard.titleEn}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 8, borderColor: "rgba(100, 255, 218, 0.3)" }}
                className="relative p-6 lg:p-8 rounded-2xl border border-[#233554] bg-[#112240]/60 backdrop-blur-sm group transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-[#64ffda]/10 flex items-center justify-center shrink-0 group-hover:bg-[#64ffda]/20 transition-colors">
                    <standard.icon className="w-7 h-7 text-[#64ffda]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-[#ccd6f6]">
                          {standard.titleEn}
                        </h3>
                        <p className="text-sm text-[#8892b0]/70">{standard.titleZh}</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#64ffda]/10 border border-[#64ffda]/20 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#64ffda] animate-pulse" />
                        <span className="text-xs text-[#64ffda] font-medium">{standard.status}</span>
                      </div>
                    </div>
                    <p className="text-[#8892b0] leading-relaxed">
                      {standard.descriptionEn}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Principles Panel - Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24 p-8 rounded-2xl border border-[#233554] bg-gradient-to-br from-[#112240]/80 to-[#0a192f]/80 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#64ffda]/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#64ffda]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#ccd6f6]">Operational Principles</h3>
                  <p className="text-sm text-[#8892b0]/70">營運原則</p>
                </div>
              </div>

              <div className="space-y-3">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle.en}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#0a192f]/60 border border-[#233554]/50 hover:border-[#64ffda]/20 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#64ffda] shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-[#ccd6f6]">{principle.en}</span>
                      <span className="text-xs text-[#8892b0]/60 ml-2">{principle.zh}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Commitment statement */}
              <div className="mt-8 pt-6 border-t border-[#233554]">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#8892b0] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-[#8892b0] leading-relaxed">
                      We are committed to continuous improvement and the pursuit of excellence 
                      in all compliance matters.
                    </p>
                    <p className="text-xs text-[#8892b0]/60 mt-2">
                      我們致力於持續改進，追求合規事務的卓越表現。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
