"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Mail, MapPin } from "lucide-react"

const footerLinks = {
  company: [
    { labelEn: "About Us", labelZh: "關於我們", href: "#about" },
    { labelEn: "Ecosystem", labelZh: "生態系統", href: "#ecosystem" },
    { labelEn: "Competencies", labelZh: "核心能力", href: "#competencies" },
    { labelEn: "Standards", labelZh: "標準", href: "#standards" },
  ],
  services: [
    { labelEn: "Multi-Vertical Sourcing", labelZh: "多維度採購", href: "#competencies" },
    { labelEn: "Cold-Chain Logistics", labelZh: "冷鏈物流", href: "#competencies" },
    { labelEn: "Market Entry", labelZh: "市場進入", href: "#competencies" },
    { labelEn: "Trade Consulting", labelZh: "貿易諮詢", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-[#112240] border-t border-[#233554]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 lg:py-24 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ccd6f6] mb-4">
            Ready to Redefine Trade?
          </h2>
          <p className="text-xl text-[#8892b0] mb-2">準備好重新定義貿易了嗎？</p>
          <p className="text-lg text-[#8892b0]/70 max-w-2xl mx-auto mb-10">
            Connect with our team to explore how ALBM Trading can support your 
            cross-border commerce objectives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/90 px-8 h-14 text-base font-semibold rounded-lg group"
              asChild
            >
              <a href="mailto:info@albmtrading.com">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us | 聯絡我們
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>

        <Separator className="bg-[#233554]" />

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#ccd6f6] rounded-lg flex items-center justify-center">
                  <span className="text-[#0a192f] font-bold text-lg">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-semibold text-[#ccd6f6]">
                    ALBM Trading
                  </span>
                  <span className="text-[10px] text-[#8892b0]">
                    A Little Bit More Trading Limited
                  </span>
                </div>
              </Link>
              <p className="text-[#8892b0] text-sm leading-relaxed mb-6">
                Your trusted partner for global trade solutions across Greater China and ASEAN markets.
              </p>
              <p className="text-[#8892b0]/60 text-sm leading-relaxed mb-6">
                您在大中華及東盟市場的可靠全球貿易夥伴。
              </p>
              <div className="flex items-start gap-3 text-sm text-[#8892b0]">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#64ffda]" />
                <div>
                  <p>Hong Kong SAR</p>
                  <p className="text-[#8892b0]/60">香港特別行政區</p>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-[#ccd6f6] mb-6">
                Company <span className="text-[#8892b0]/60 normal-case">| 公司</span>
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.labelEn}>
                    <Link 
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-[#8892b0] hover:text-[#64ffda] transition-colors"
                    >
                      <span>{link.labelEn}</span>
                      <span className="text-[#8892b0]/40 group-hover:text-[#64ffda]/60">{link.labelZh}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-[#ccd6f6] mb-6">
                Services <span className="text-[#8892b0]/60 normal-case">| 服務</span>
              </h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.labelEn}>
                    <Link 
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-[#8892b0] hover:text-[#64ffda] transition-colors"
                    >
                      <span>{link.labelEn}</span>
                      <span className="text-[#8892b0]/40 group-hover:text-[#64ffda]/60">{link.labelZh}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Card */}
            <div>
              <div className="p-6 rounded-2xl border border-[#233554] bg-[#0a192f]/50">
                <h4 className="font-semibold text-[#ccd6f6] mb-2">Get in Touch</h4>
                <p className="text-sm text-[#8892b0]/60 mb-4">聯絡我們</p>
                <a 
                  href="mailto:info@albmtrading.com"
                  className="flex items-center gap-2 text-[#64ffda] hover:text-[#64ffda]/80 transition-colors text-sm font-medium"
                >
                  <Mail className="w-4 h-4" />
                  info@albmtrading.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-[#233554]" />

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#8892b0]/60">
            &copy; {new Date().getFullYear()} A Little Bit More Trading Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link 
              href="#" 
              className="text-sm text-[#8892b0]/60 hover:text-[#64ffda] transition-colors"
            >
              Privacy Policy | 私隱政策
            </Link>
            <Link 
              href="#" 
              className="text-sm text-[#8892b0]/60 hover:text-[#64ffda] transition-colors"
            >
              Terms | 條款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
