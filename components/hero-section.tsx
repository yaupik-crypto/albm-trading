"use client"

import { motion } from "framer-motion"

// Split text animation variants
const titleWords = "GLOBAL TRADE, REDEFINED THROUGH PRECISION AND INTEGRITY.".split(" ")

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
}

const wordVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -90,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic B&W Video Placeholder - Abstract trade logistics */}
      <div className="absolute inset-0 z-0">
        {/* Video placeholder with grayscale filter */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
          poster="/hero-poster.jpg"
        >
          {/* Placeholder - would load actual video */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Fallback abstract pattern if no video */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#111_25%,transparent_25%),linear-gradient(-45deg,#111_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#111_75%),linear-gradient(-45deg,transparent_75%,#111_75%)] bg-[length:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Split Text Reveal Animation */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-white leading-[1.15] mb-12"
            style={{ perspective: "1000px" }}
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-[0.3em]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle fades in afterwards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
            className="mb-16"
          >
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              A Little Bit More Trading Limited connects premium global producers with dynamic markets across Greater China and ASEAN.
            </p>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 2.2, ease: "easeOut" }}
            className="w-32 h-px bg-white/40 mx-auto mb-12"
          />

          {/* Chinese tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <p className="text-sm md:text-base tracking-[0.2em] text-white/50">
              連接全球優質生產商與大中華及東盟市場
            </p>
          </motion.div>

          {/* Explore Ecosystem Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="mt-16"
          >
            <a 
              href="#ecosystem"
              className="inline-flex items-center gap-3 text-xs tracking-[0.2em] text-white/60 hover:text-[#D4C4A8] transition-colors duration-300 uppercase group"
            >
              <span>Explore Our Ecosystem</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
