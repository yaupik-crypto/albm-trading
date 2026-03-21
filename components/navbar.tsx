"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#sourcing", label: "Sourcing" },
  { href: "#logistics", label: "Logistics" },
  { href: "#gateway", label: "Gateway" },
  { href: "#integrity", label: "Integrity" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo - Geometric ALBM Shield */}
          <Link href="/" className="flex items-center gap-4 group">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4"
            >
              {/* Shield Monogram */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Shield shape */}
                  <path 
                    d="M24 4L8 12v12c0 11 16 18 16 18s16-7 16-18V12L24 4z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1"
                    className="text-foreground group-hover:text-[#A0A0A0] transition-colors duration-300"
                  />
                  {/* A letter */}
                  <text 
                    x="24" 
                    y="30" 
                    textAnchor="middle" 
                    className="font-serif text-xl fill-current text-foreground group-hover:text-[#A0A0A0] transition-colors duration-300"
                    style={{ fontSize: '18px' }}
                  >
                    A
                  </text>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium tracking-[0.2em] text-foreground uppercase group-hover:text-[#A0A0A0] transition-colors duration-300">
                  ALBM Trading
                </span>
                <span className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                  A Little Bit More
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
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className="group relative text-xs font-medium tracking-[0.15em] text-muted-foreground hover:text-[#A0A0A0] transition-colors duration-300 uppercase"
                >
                  <span>{link.label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#A0A0A0] group-hover:w-full transition-all duration-500" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button - Minimal border style */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              href="#contact"
              className="text-xs font-medium tracking-[0.15em] text-foreground hover:text-[#A0A0A0] hover:border-[#A0A0A0] transition-colors duration-300 uppercase border border-foreground px-6 py-3"
            >
              Inquire
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
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
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-6 py-8 border-t border-border">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm font-medium tracking-[0.15em] text-muted-foreground hover:text-[#A0A0A0] transition-colors uppercase"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 border-t border-border"
                >
                  <Link 
                    href="#contact" 
                    onClick={() => setIsOpen(false)}
                    className="inline-block text-sm font-medium tracking-[0.15em] text-foreground border border-foreground px-6 py-3 uppercase"
                  >
                    Inquire
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
