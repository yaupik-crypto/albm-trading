"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 lg:py-32 text-center border-b border-primary-foreground/10"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <span className="text-xs tracking-[0.3em] text-primary-foreground/60 uppercase mb-8 block">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-primary-foreground mb-6 leading-tight text-balance">
            Connect With Us
          </h2>
          <p className="text-sm tracking-[0.15em] text-primary-foreground/60 mb-4">
            聯繫我們
          </p>
          <p className="text-base text-primary-foreground/80 max-w-xl mx-auto mb-12 leading-relaxed">
            Connect with our team to explore how ALBM Trading can support your cross-border commerce objectives.
          </p>
          <a 
            href="mailto:info@albmtrading.com"
            className="inline-block text-sm tracking-[0.15em] text-primary-foreground border border-primary-foreground px-8 py-4 hover:bg-primary-foreground hover:text-foreground transition-colors duration-300 uppercase"
          >
            Inquire Now
          </a>
        </div>
      </motion.div>

      {/* Main Footer Content - Business Card Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column - CSS Typographic Logo */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-4 mb-8">
                {/* Metallic serif ALBM */}
                <span 
                  className="font-serif text-2xl font-normal tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #A0A0A0 0%, #606060 50%, #808080 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  ALBM
                </span>
                {/* Tiny sans-serif descriptor */}
                <span className="text-[9px] tracking-[0.15em] text-primary-foreground/50 uppercase">
                  A Little Bit More Trading
                </span>
              </Link>
              <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
                Your trusted partner for global trade solutions across Greater China and ASEAN markets.
              </p>
              <p className="text-xs text-primary-foreground/50 leading-relaxed mt-3">
                您在大中華及東盟市場的可靠全球貿易夥伴。
              </p>
            </div>

            {/* Address Column - Business Card Style */}
            <div className="lg:col-span-4">
              <div className="border border-primary-foreground/20 p-8">
                <span className="text-xs tracking-[0.2em] text-primary-foreground/50 uppercase block mb-6">
                  Headquarters
                </span>
                <address className="not-italic space-y-1">
                  <p className="text-sm text-primary-foreground">Unit 1001, World Interests Building</p>
                  <p className="text-sm text-primary-foreground">8 Tsun Yip Lane</p>
                  <p className="text-sm text-primary-foreground">Kwun Tong, Hong Kong</p>
                </address>
                <p className="text-xs text-primary-foreground/50 mt-6">
                  香港觀塘駿業里8號世興工業大廈1001室
                </p>
              </div>
            </div>

            {/* Contact & Navigation Column */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-8">
                {/* Emails */}
                <div>
                  <span className="text-xs tracking-[0.2em] text-primary-foreground/50 uppercase block mb-6">
                    Contact
                  </span>
                  <div className="space-y-3">
                    <a 
                      href="mailto:info@albmtrading.com"
                      className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                    >
                      info@albmtrading.com
                    </a>
                    <a 
                      href="mailto:logistics@albmtrading.com"
                      className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                    >
                      logistics@albmtrading.com
                    </a>
                    <a 
                      href="mailto:admin@albmtrading.com"
                      className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                    >
                      admin@albmtrading.com
                    </a>
                  </div>
                </div>
                {/* Navigation */}
                <div>
                  <span className="text-xs tracking-[0.2em] text-primary-foreground/50 uppercase block mb-6">
                    Navigation
                  </span>
                  <nav className="space-y-3">
                    <Link 
                      href="#ecosystem"
                      className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                    >
                      Ecosystem
                    </Link>
                    <Link 
                      href="#competencies"
                      className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                    >
                      Competencies
                    </Link>
                    <Link 
                      href="#integrity"
                      className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                    >
                      Integrity
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <Separator className="bg-primary-foreground/10" />

      {/* Bottom Bar with ESG Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-8"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <p className="text-xs text-primary-foreground/50 tracking-wide">
                &copy; {new Date().getFullYear()} A Little Bit More Trading Limited. All rights reserved.
              </p>
              <span className="hidden sm:block text-primary-foreground/20">|</span>
              <p className="text-xs text-primary-foreground/40 tracking-wide">
                Hong Kong SAR
              </p>
            </div>
            {/* ESG Statement */}
            <p className="text-xs text-primary-foreground/40 tracking-wide text-center lg:text-right max-w-md">
              Committed to sustainable supply chain practices and responsible corporate governance.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
