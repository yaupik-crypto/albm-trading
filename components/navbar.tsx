"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", labelEn: "About", labelZh: "關於我們" },
  { href: "#ecosystem", labelEn: "Ecosystem", labelZh: "生態系統" },
  { href: "#competencies", labelEn: "Competencies", labelZh: "核心能力" },
  { href: "#standards", labelEn: "Standards", labelZh: "標準" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/90 backdrop-blur-xl border-b border-[#233554]/50"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-[#ccd6f6] rounded-lg flex items-center justify-center">
                <span className="text-[#0a192f] font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold tracking-tight text-[#ccd6f6]">
                  ALBM Trading
                </span>
                <span className="text-[10px] text-[#8892b0] tracking-wider">
                  再進一步
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className="group relative text-sm font-medium text-[#8892b0] hover:text-[#ccd6f6] transition-colors"
                >
                  <span>{link.labelEn}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#64ffda] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              className="bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 px-6 rounded-lg font-medium"
              asChild
            >
              <Link href="#contact">
                Contact | 聯絡
              </Link>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 text-[#ccd6f6]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-6 border-t border-[#233554]/50">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between text-[#8892b0] hover:text-[#ccd6f6] transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-medium">{link.labelEn}</span>
                      <span className="text-sm">{link.labelZh}</span>
                    </Link>
                  </motion.div>
                ))}
                <Button 
                  className="bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 w-full mt-4 rounded-lg"
                  asChild
                >
                  <Link href="#contact" onClick={() => setIsOpen(false)}>
                    Contact | 聯絡
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
