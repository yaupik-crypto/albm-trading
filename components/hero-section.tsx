"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Hong Kong Container Port */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2940&auto=format&fit=crop"
          alt="Hong Kong container port at sunset"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/95 via-[#0a192f]/80 to-[#0a192f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/90 via-transparent to-[#0a192f]/90" />
      </div>

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#64ffda" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 mb-10 rounded-full border border-[#233554] bg-[#112240]/80 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#64ffda] animate-pulse" />
            <span className="text-sm font-medium text-[#8892b0]">
              A Little Bit More Trading Limited
            </span>
          </motion.div>

          {/* Main Headlines - Bilingual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#ccd6f6] leading-[1.1] mb-4">
              Global Trade, Redefined through
              <br />
              <span className="text-[#64ffda]">Precision and Integrity</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-[#8892b0] tracking-wide">
              寰宇貿易，定義新章：精準、誠信、卓越
            </p>
          </motion.div>

          {/* Subheadline - Bilingual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-lg text-[#8892b0] leading-relaxed mb-3">
              We are not merely facilitators of transactions. We build resilient corridors 
              for premium goods to flow across borders.
            </p>
            <p className="text-base text-[#8892b0]/80 leading-relaxed">
              我們不只是促進交易，我們為優質貨物建立具備韌性的跨境流動通道。
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/90 px-8 h-14 text-base font-semibold rounded-lg group"
            >
              Explore Services | 探索服務
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#233554] text-[#ccd6f6] hover:bg-[#112240] hover:border-[#64ffda]/50 px-8 h-14 text-base font-medium rounded-lg bg-transparent"
            >
              Our Philosophy | 營運哲學
            </Button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 pt-12 border-t border-[#233554]/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "15+", labelEn: "Years Experience", labelZh: "年經驗" },
              { value: "50+", labelEn: "Global Partners", labelZh: "全球夥伴" },
              { value: "12", labelEn: "Markets Served", labelZh: "服務市場" },
              { value: "TMG", labelEn: "Flagship Brand", labelZh: "旗艦品牌" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.labelEn} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#8892b0]">{stat.labelEn}</div>
                <div className="text-xs text-[#8892b0]/60">{stat.labelZh}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-[#8892b0]/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#64ffda]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
