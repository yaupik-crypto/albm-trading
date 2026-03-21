"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Clean white background - no image for ultra-minimalist look */}
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mb-10"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-foreground leading-[1.1] text-balance">
              Global Sourcing & Supply Chain Excellence.
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="mb-20"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A Little Bit More Trading Limited connects premium global producers with the Greater China and ASEAN markets.
            </p>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="w-24 h-px bg-foreground mx-auto mb-20"
          />

          {/* Chinese tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-sm md:text-base tracking-[0.15em] text-muted-foreground">
              連接全球優質生產商與大中華及東盟市場
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
