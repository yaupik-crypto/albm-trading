"use client"

import { motion } from "framer-motion"

export function PrivacySection() {
  return (
    <section className="py-32 lg:py-40 bg-secondary/30 border-t border-border">
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
            Privacy Policy
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-foreground leading-tight">
            Data Protection & Privacy
          </h2>
          <p className="text-xs tracking-[0.2em] text-muted-foreground mt-4">
            隱私政策
          </p>
        </motion.div>

        {/* Privacy Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-8"
        >
          <div className="border border-border p-8 lg:p-12 bg-background">
            <div className="space-y-8">
              {/* English Content */}
              <div className="space-y-6">
                <p className="text-base text-foreground leading-relaxed">
                  At A Little Bit More Trading Limited, we are committed to protecting the privacy and security of your personal information. We collect only minimal information necessary for business purposes, primarily through email inquiries and direct correspondence.
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal data to third parties. All information provided is used solely for the purpose of conducting legitimate business communications and fulfilling service inquiries.
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  For any data protection inquiries or requests regarding your personal information, please contact us at:
                </p>
                <p className="text-base font-medium text-foreground tracking-wide">
                  info@albmtrading.com
                </p>
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-border" />

              {/* Chinese Content */}
              <div className="space-y-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  在 A Little Bit More Trading Limited，我們致力於保護您個人資料的隱私和安全。我們僅收集業務所需的最少資訊，主要通過電郵查詢和直接通訊收集。
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  我們不會向第三方出售、交易或以其他方式轉讓您的個人資料。所提供的所有資訊僅用於進行合法商業通訊和處理服務查詢。
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  如有任何數據保護查詢或有關您個人資料的請求，請聯繫：
                  <span className="text-foreground ml-2">info@albmtrading.com</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
