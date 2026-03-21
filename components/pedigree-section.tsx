"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TrendingUp, Wine, BarChart3, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Wine,
    titleEn: "Two More Glasses (TMG)",
    titleZh: "TMG 旗艦品牌",
    descriptionEn: "Our flagship consumer brand serving as the data anchor for market intelligence.",
    descriptionZh: "以旗艦零售品牌 TMG 為數據之錨。",
  },
  {
    icon: BarChart3,
    titleEn: "Retail to Strategy",
    titleZh: "零售轉策略",
    descriptionEn: "Leveraging retail success for market entry strategy development.",
    descriptionZh: "將零售成功轉化為市場進入策略。",
  },
  {
    icon: TrendingUp,
    titleEn: "Data-Driven Insights",
    titleZh: "數據驅動洞察",
    descriptionEn: "Real-time market intelligence from frontline consumer interactions.",
    descriptionZh: "來自前線消費者互動的實時市場情報。",
  },
  {
    icon: Lightbulb,
    titleEn: "Strategic Advisory",
    titleZh: "策略諮詢",
    descriptionEn: "Comprehensive guidance for Greater China market navigation.",
    descriptionZh: "大中華市場全面導航指引。",
  },
]

export function PedigreeSection() {
  return (
    <section id="ecosystem" className="py-24 lg:py-32 bg-[#0a192f] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#112240]/50 to-transparent" />
      
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
            <span className="text-xs font-medium text-[#64ffda] tracking-wider uppercase">Strategic Intelligence</span>
            <span className="text-xs text-[#8892b0]">|</span>
            <span className="text-xs text-[#8892b0]">戰略市場洞察</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#ccd6f6] mb-4">
            The Philosophy of{" "}
            <span className="text-[#64ffda]">&apos;A Little Bit More&apos;</span>
          </h2>
          <p className="text-xl text-[#8892b0] mb-2">「再進一步」的營運哲學</p>
          <p className="text-lg text-[#8892b0]/80 leading-relaxed mt-6">
            Our ecosystem is anchored by our flagship consumer brand Two More Glasses (TMG), 
            leveraging retail success for comprehensive market entry strategies.
          </p>
          <p className="text-base text-[#8892b0]/60 leading-relaxed mt-2">
            以旗艦零售品牌 TMG (Two More Glasses) 為數據之錨，將零售成功轉化為市場策略。
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Large Featured Card - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 lg:row-span-2 relative group"
          >
            <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden border border-[#233554] bg-[#112240]">
              {/* Image - Wine cellar with iPad */}
              <Image
                src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=2940&auto=format&fit=crop"
                alt="Premium wine cellar with data analytics"
                fill
                className="object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/60 to-transparent" />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#64ffda]/10 border border-[#64ffda]/30">
                  <Wine className="w-4 h-4 text-[#64ffda]" />
                  <span className="text-sm text-[#64ffda] font-medium">TMG Ecosystem</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#ccd6f6] mb-3">
                  Two More Glasses
                </h3>
                <p className="text-[#8892b0] leading-relaxed max-w-xl">
                  Our flagship brand provides frontline market intelligence, transforming consumer 
                  insights into strategic advantages for international market entry.
                </p>
                <p className="text-[#8892b0]/70 text-sm mt-2">
                  以前線消費者洞察轉化為國際市場進入之策略優勢。
                </p>
              </div>
            </div>
          </motion.div>

          {/* Smaller feature cards */}
          {features.slice(0, 2).map((feature, index) => (
            <motion.div
              key={feature.titleEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(100, 255, 218, 0.3)" }}
              className="relative p-6 lg:p-8 rounded-2xl border border-[#233554] bg-[#112240]/80 backdrop-blur-sm group transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#64ffda]/10 flex items-center justify-center mb-5 group-hover:bg-[#64ffda]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#64ffda]" />
              </div>
              <h3 className="text-lg font-semibold text-[#ccd6f6] mb-1">
                {feature.titleEn}
              </h3>
              <p className="text-sm text-[#8892b0]/70 mb-3">{feature.titleZh}</p>
              <p className="text-[#8892b0] text-sm leading-relaxed">
                {feature.descriptionEn}
              </p>
            </motion.div>
          ))}

          {/* Bottom row cards */}
          {features.slice(2).map((feature, index) => (
            <motion.div
              key={feature.titleEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(100, 255, 218, 0.3)" }}
              className="relative p-6 lg:p-8 rounded-2xl border border-[#233554] bg-[#112240]/80 backdrop-blur-sm group transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#64ffda]/10 flex items-center justify-center mb-5 group-hover:bg-[#64ffda]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#64ffda]" />
              </div>
              <h3 className="text-lg font-semibold text-[#ccd6f6] mb-1">
                {feature.titleEn}
              </h3>
              <p className="text-sm text-[#8892b0]/70 mb-3">{feature.titleZh}</p>
              <p className="text-[#8892b0] text-sm leading-relaxed">
                {feature.descriptionEn}
              </p>
            </motion.div>
          ))}

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative p-6 lg:p-8 rounded-2xl border border-[#64ffda]/20 bg-gradient-to-br from-[#64ffda]/10 to-[#112240] backdrop-blur-sm"
          >
            <div className="text-center">
              <div className="text-5xl font-bold text-[#64ffda] mb-2">TMG</div>
              <p className="text-sm text-[#ccd6f6] font-medium">Intelligence Hub</p>
              <p className="text-xs text-[#8892b0] mt-1">情報中心</p>
              <div className="mt-6 pt-6 border-t border-[#233554]">
                <div className="text-2xl font-bold text-[#ccd6f6]">10K+</div>
                <p className="text-xs text-[#8892b0]">Data Points Monthly</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
