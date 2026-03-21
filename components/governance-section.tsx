"use client"

import { motion } from "framer-motion"

// Metallic Shield Icon
function MetallicShieldIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="metallicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C0C0C0" />
          <stop offset="50%" stopColor="#A0A0A0" />
          <stop offset="100%" stopColor="#808080" />
        </linearGradient>
      </defs>
      <path 
        d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" 
        fill="url(#metallicGradient)"
        stroke="#808080"
        strokeWidth="0.5"
      />
      <path 
        d="M12 6L8 8v3c0 2.77 1.92 5.37 4 6 2.08-.63 4-3.23 4-6V8l-4-2z" 
        fill="none"
        stroke="#606060"
        strokeWidth="0.5"
      />
    </svg>
  )
}

export function GovernanceSection() {
  return (
    <section id="integrity" className="py-32 lg:py-40 bg-background border-t border-border scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
            Principles
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-foreground leading-tight">
            Governance & Integrity
          </h2>
          <p className="text-sm tracking-[0.15em] text-muted-foreground mt-4">
            企業管治與誠信
          </p>
        </motion.div>

        {/* Content with Shield Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-12"
        >
          {/* Main Content Block */}
          <div className="border-t border-border pt-12">
            <div className="flex gap-6 items-start">
              {/* Metallic Shield Icon */}
              <MetallicShieldIcon className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-foreground leading-relaxed">
                  We adhere to the highest standards of data protection and corporate governance. Information collected via our official channels is strictly utilized for B2B procurement and supply chain facilitation. We do not sell or share corporate data with unauthorized third parties.
                </p>
              </div>
            </div>
          </div>

          {/* Governance Pillars */}
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-t border-border pt-6"
            >
              <h3 className="text-sm font-medium tracking-[0.1em] text-foreground uppercase mb-3">
                Data Protection
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enterprise-grade security protocols safeguarding all client and partner information.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-t border-border pt-6"
            >
              <h3 className="text-sm font-medium tracking-[0.1em] text-foreground uppercase mb-3">
                Compliance
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full regulatory compliance across all operating jurisdictions in Greater China and ASEAN.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-t border-border pt-6"
            >
              <h3 className="text-sm font-medium tracking-[0.1em] text-foreground uppercase mb-3">
                Transparency
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Clear and honest communication with all stakeholders and business partners.
              </p>
            </motion.div>
          </div>

          {/* Decorative divider */}
          <div className="w-12 h-px bg-border mx-auto" />

          {/* Chinese version */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
              我們遵循最高標準的資料保護及企業管治。透過我們官方渠道收集的資訊，僅用於 B2B 採購及供應鏈促進。我們不會向未經授權的第三方出售或分享企業資料。
            </p>
          </div>

          {/* Contact */}
          <div className="text-center pt-8">
            <p className="text-sm text-muted-foreground mb-4">
              For any governance or compliance inquiries:
            </p>
            <a 
              href="mailto:admin@albmtrading.com"
              className="inline-block text-base font-medium text-foreground tracking-wide border-b border-foreground pb-1 hover:text-[#A0A0A0] hover:border-[#A0A0A0] transition-colors duration-300"
            >
              admin@albmtrading.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
