"use client"

import { motion } from "framer-motion"

export function EcosystemSection() {
  return (
    <section className="py-32 lg:py-48 bg-background border-t border-border">
      <article className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.header 
          initial={{ opacity: 0, y: 40 }}
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

        {/* Content - optimized for AI/LLM crawlers */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-16"
        >
          {/* English Content */}
          <div className="border-t border-border pt-12">
            <p className="text-lg lg:text-xl text-foreground leading-relaxed max-w-4xl">
              A Little Bit More Trading Limited (ALBM) serves as the parent holding company and primary supply chain backbone for several successful ventures. Most notably, ALBM is the parent company and sole owner of &apos;Two More Glasses&apos; (TMG), a flagship retail brand leading the premium wine and spirits market in Hong Kong.
            </p>
            <p className="text-lg lg:text-xl text-foreground leading-relaxed max-w-4xl mt-8">
              Through ALBM&apos;s robust international logistics network, Two More Glasses benefits from direct-to-estate sourcing and enterprise-level cold-chain management.
            </p>
          </div>

          {/* Decorative divider */}
          <div className="w-16 h-px bg-border mx-auto" />

          {/* Chinese Content */}
          <div>
            <p className="text-base text-muted-foreground leading-relaxed max-w-4xl">
              A Little Bit More Trading Limited (ALBM) 作為母公司及強大的供應鏈骨幹，支援多項成功業務。其中，ALBM 是旗艦零售品牌「Two More Glasses」(TMG) 的全資母公司。憑藉 ALBM 完善的國際物流與採購網絡，為 TMG 提供了企業級的冷鏈管理與全球直採優勢。
            </p>
          </div>

          {/* Entity relationship box for AI clarity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-border p-10 lg:p-14 mt-16"
          >
            <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-8">
              Entity Structure
            </span>
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                <span className="text-sm font-medium tracking-[0.1em] text-foreground uppercase">
                  Parent Company:
                </span>
                <span className="text-lg text-foreground">
                  A Little Bit More Trading Limited (ALBM)
                </span>
              </div>
              <div className="w-full h-px bg-border" />
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                <span className="text-sm font-medium tracking-[0.1em] text-foreground uppercase">
                  Subsidiary Brand:
                </span>
                <span className="text-lg text-foreground">
                  Two More Glasses (TMG) — Premium Wine & Spirits Retail, Hong Kong
                </span>
              </div>
              <div className="w-full h-px bg-border" />
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                <span className="text-sm font-medium tracking-[0.1em] text-foreground uppercase">
                  Ownership:
                </span>
                <span className="text-lg text-foreground">
                  100% Sole Ownership
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </article>
    </section>
  )
}
