"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
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
            className="inline-block text-sm tracking-[0.15em] text-primary-foreground border-b border-primary-foreground pb-1 hover:text-primary-foreground/70 hover:border-primary-foreground/70 transition-colors duration-300 uppercase"
          >
            info@albmtrading.com
          </a>
        </div>
      </motion.div>

      {/* Main Footer Content - Business Card Layout */}
      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <Link href="/" className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 border border-primary-foreground flex items-center justify-center">
                  <span className="text-primary-foreground font-serif text-xl font-medium">
                    A
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium tracking-[0.2em] text-primary-foreground uppercase">
                    ALBM
                  </span>
                  <span className="text-[10px] tracking-[0.1em] text-primary-foreground/60 uppercase">
                    A Little Bit More Trading Limited
                  </span>
                </div>
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

            {/* Navigation Column */}
            <div className="lg:col-span-3">
              <span className="text-xs tracking-[0.2em] text-primary-foreground/50 uppercase block mb-6">
                Navigation
              </span>
              <nav className="space-y-4">
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
                  href="#privacy"
                  className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="#contact"
                  className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/10" />

      {/* Bottom Bar */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-primary-foreground/50 tracking-wide">
              &copy; {new Date().getFullYear()} A Little Bit More Trading Limited. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/40 tracking-wide">
              Hong Kong SAR
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
