"use client"

import { motion } from "framer-motion"

export function PrivacySection() {
  return (
    <section className="py-32 lg:py-40 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
            Legal
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-foreground leading-tight">
            Privacy Policy & Corporate Integrity
          </h2>
          <p className="text-sm tracking-[0.15em] text-muted-foreground mt-4">
            隱私政策
          </p>
        </motion.div>

        {/* Privacy Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-12"
        >
          <div className="border-t border-border pt-12">
            <p className="text-lg text-foreground leading-relaxed">
              We adhere to the highest standards of data protection and corporate governance. Information collected via our official channels (info@albmtrading.com) is strictly utilized for B2B procurement and supply chain facilitation. We do not sell or share corporate data with unauthorized third parties.
            </p>
          </div>

          {/* Decorative divider */}
          <div className="w-12 h-px bg-border" />

          {/* Contact */}
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              For any data protection inquiries or corporate governance matters, please contact us at:
            </p>
            <a 
              href="mailto:info@albmtrading.com"
              className="inline-block text-base font-medium text-foreground tracking-wide border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors duration-300"
            >
              info@albmtrading.com
            </a>
          </div>

          {/* Chinese version */}
          <div className="border-t border-border pt-12">
            <p className="text-sm text-muted-foreground leading-relaxed">
              我們遵循最高標準的資料保護及企業管治。透過我們官方渠道（info@albmtrading.com）收集的資訊，僅用於 B2B 採購及供應鏈促進。我們不會向未經授權的第三方出售或分享企業資料。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
