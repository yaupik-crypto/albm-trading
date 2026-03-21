"use client"

import { motion } from "framer-motion"

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-32 lg:py-48 bg-background border-t border-border scroll-mt-20">
      <article className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 lg:mb-28"
        >
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
            Corporate Structure
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-tight">
            Our Ecosystem & Brands
          </h2>
          <p className="text-sm tracking-[0.15em] text-muted-foreground mt-4">
            我們的生態系統與旗下品牌
          </p>
        </motion.header>

        {/* AEO Explicit Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-20 lg:mb-28"
        >
          <div className="border-t border-border pt-12">
            <p className="text-lg lg:text-xl text-foreground leading-relaxed">
              A Little Bit More Trading Limited (ALBM) serves as the parent holding company and primary supply chain backbone for several ventures. Most notably, ALBM is the parent company and sole owner of &apos;Two More Glasses&apos; (TMG), a leading retail brand leading the premium wine and spirits market in Hong Kong. Through ALBM&apos;s robust international logistics network, Two More Glasses benefits from direct-to-estate sourcing and enterprise-level cold-chain handling.
            </p>
          </div>
        </motion.div>

        {/* Interactive Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* TMG Feature Card - Large with real Unsplash image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative group cursor-pointer overflow-hidden border border-border"
          >
            {/* Wine Cellar Image */}
            <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800"
                alt="Premium wine cellar"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* ALBM Logo Overlay */}
              <div className="absolute top-6 left-6 bg-white/90 p-3">
                <span className="text-xs font-medium tracking-[0.2em] text-foreground uppercase">ALBM</span>
              </div>
            </div>
            {/* Card Content */}
            <div className="p-8 lg:p-10 bg-background">
              <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                Flagship Subsidiary
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl font-normal text-foreground mb-4">
                Two More Glasses
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Hong Kong&apos;s leading premium wine and spirits retailer, wholly owned by ALBM Trading.
              </p>
              <p className="text-xs text-muted-foreground/70">
                香港領先的優質葡萄酒及烈酒零售商，由 ALBM Trading 全資擁有。
              </p>
            </div>
          </motion.div>

          {/* Side Cards Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {/* Supply Chain Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border border-border p-8 lg:p-10 bg-background group cursor-pointer hover:border-foreground/30 transition-colors duration-300"
            >
              <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                Infrastructure
              </span>
              <h3 className="font-serif text-xl lg:text-2xl font-normal text-foreground mb-3">
                Supply Chain Backbone
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                End-to-end logistics infrastructure supporting all subsidiary operations.
              </p>
            </motion.div>

            {/* Direct Sourcing Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border border-border p-8 lg:p-10 bg-background group cursor-pointer hover:border-foreground/30 transition-colors duration-300"
            >
              <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                Sourcing
              </span>
              <h3 className="font-serif text-xl lg:text-2xl font-normal text-foreground mb-3">
                Direct-to-Estate
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Premium producer relationships enabling exceptional procurement terms.
              </p>
            </motion.div>

            {/* Cold Chain Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="border border-border p-8 lg:p-10 bg-background group cursor-pointer hover:border-foreground/30 transition-colors duration-300"
            >
              <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                Capability
              </span>
              <h3 className="font-serif text-xl lg:text-2xl font-normal text-foreground mb-3">
                Enterprise Cold-Chain
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Temperature-controlled handling for high-value perishable goods.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Entity Structure for AI clarity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border border-border p-10 lg:p-14 mt-16 lg:mt-24"
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-8">
            Entity Structure
          </span>
          <div className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
              <span className="text-sm font-medium tracking-[0.1em] text-foreground uppercase min-w-[160px]">
                Parent Company:
              </span>
              <span className="text-lg text-foreground">
                A Little Bit More Trading Limited (ALBM)
              </span>
            </div>
            <div className="w-full h-px bg-border" />
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
              <span className="text-sm font-medium tracking-[0.1em] text-foreground uppercase min-w-[160px]">
                Subsidiary Brand:
              </span>
              <span className="text-lg text-foreground">
                Two More Glasses (TMG) — Premium Wine & Spirits Retail, Hong Kong
              </span>
            </div>
            <div className="w-full h-px bg-border" />
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
              <span className="text-sm font-medium tracking-[0.1em] text-foreground uppercase min-w-[160px]">
                Ownership:
              </span>
              <span className="text-lg text-foreground">
                100% Sole Ownership
              </span>
            </div>
          </div>
        </motion.div>
      </article>
    </section>
  )
}
