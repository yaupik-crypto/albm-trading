"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Lenis from "lenis"
import { Shield } from "lucide-react"

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8% 0px" },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
}

/** Premium B&W: grayscale at rest, full color on card / hero hover */
const imgInstitutional =
  "h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"

const cardBento =
  "border border-gray-100 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:p-10"

const IMG_TMG =
  "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80"

/** Prior URLs returned 404; these photo IDs are valid on images.unsplash.com */
const IMG_SOURCING =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"

const IMG_COLDCHAIN =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"

const IMG_GATEWAY =
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80"

const IMG_HERO =
  "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1600&q=80"

const globalNetworkNodes = [
  {
    id: "hk",
    name: "Hong Kong",
    role: "HQ Base Operations",
    description:
      "Our strategic nerve center and primary global gateway, leveraging world-class financial and cold-chain logistics infrastructure.",
  },
  {
    id: "macau",
    name: "Macau",
    role: null,
    description:
      "Focused distribution network catering directly to premium hospitality, integrated resorts, and elite entertainment sectors.",
  },
  {
    id: "taiwan",
    name: "Taiwan",
    role: null,
    description:
      "Specialized supply chain routes optimized for high-end consumer goods and sophisticated retail markets.",
  },
  {
    id: "shenzhen",
    name: "Shenzhen",
    role: null,
    description:
      "Our vital link to the Greater Bay Area, integrating tech-enabled warehousing and rapid cross-border transit.",
  },
  {
    id: "singapore",
    name: "Singapore",
    role: null,
    description:
      "The ASEAN regional hub, facilitating trade flows for premium F&B establishments and private clientele across Southeast Asia.",
  },
  {
    id: "thailand",
    name: "Thailand",
    role: null,
    description:
      "Agile distribution channels tapping into a rapidly emerging luxury market and thriving hospitality ecosystem.",
  },
] as const

const heroWords =
  "GLOBAL TRADE, REDEFINED THROUGH PRECISION AND INTEGRITY.".split(/\s+/)

function SmoothScrollInit() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
      smoothWheel: true,
      wheelMultiplier: 0.88,
      touchMultiplier: 1.15,
    })
    let raf = 0
    const tick = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute("href")
      if (!href || href === "#") return
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el, { offset: -88, duration: 1.25 })
    }
    document.addEventListener("click", onClick)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener("click", onClick)
      lenis.destroy()
    }
  }, [])
  return null
}

function AlbmShieldMonogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 48"
      className={className}
      aria-hidden
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2L36 10V26C36 36.5 28.8 44.2 20 46C11.2 44.2 4 36.5 4 26V10L20 2Z"
        className="stroke-black"
        strokeWidth="1.25"
      />
      <path
        d="M20 12L28 16V26C28 32 24.5 36.2 20 37.2C15.5 36.2 12 32 12 26V16L20 12Z"
        className="fill-neutral-200"
      />
      <text
        x="20"
        y="30"
        textAnchor="middle"
        style={{
          fill: "#000000",
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.18em",
        }}
      >
        A
      </text>
    </svg>
  )
}

function HeroInstitutionalReel() {
  return (
    <div
      className="group relative aspect-video w-full overflow-hidden rounded-sm border border-gray-100 bg-[#1A1A1A] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.35)]"
      style={{
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.45), 0 40px 100px -40px rgba(0,0,0,0.35)",
      }}
    >
      <img
        src={IMG_HERO}
        alt="International logistics and maritime trade"
        className={`absolute inset-0 ${imgInstitutional}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/25" />
      <div
        className="pointer-events-none absolute inset-0 animate-pulse opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 45%, rgba(148,163,184,0.2), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <p className="max-w-md text-[0.58rem] font-medium uppercase leading-relaxed tracking-[0.42em] text-white/95">
          PREMIUM SUPPLY CHAIN FACILITATION | INSTITUTIONAL REEL
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <SmoothScrollInit />
      <div className="min-h-screen bg-white text-black">
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 md:px-8">
            <a href="#hero" className="group flex items-center gap-3">
              <AlbmShieldMonogram className="h-10 w-10 shrink-0" />
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-sm font-medium tracking-[0.28em] text-black">
                  ALBM
                </span>
                <span className="hidden text-[0.55rem] uppercase tracking-[0.38em] text-gray-500 sm:block">
                  A Little Bit More Trading
                </span>
              </div>
            </a>
            <nav
              className="hidden items-center gap-8 text-[0.62rem] font-medium uppercase tracking-[0.32em] text-gray-500 lg:flex"
              aria-label="Primary"
            >
              <a className="transition-colors hover:text-black" href="#sourcing">
                Sourcing
              </a>
              <a className="transition-colors hover:text-black" href="#logistics">
                Logistics
              </a>
              <a className="transition-colors hover:text-black" href="#gateway">
                Gateway
              </a>
              <a className="transition-colors hover:text-black" href="#integrity">
                Integrity
              </a>
              <a className="transition-colors hover:text-black" href="#contact">
                Contact
              </a>
            </nav>
            <a
              href="mailto:info@albmtrading.com"
              className="shrink-0 border border-black px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.38em] text-black transition-all duration-500 hover:bg-neutral-100"
            >
              Inquire
            </a>
          </div>
        </header>

        <main>
          <section
            id="hero"
            className="relative overflow-hidden border-b border-gray-100"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(0,0,0,0.04),transparent_50%),radial-gradient(ellipse_at_80%_100%,rgba(0,0,0,0.03),transparent_55%)]" />
            <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-24 md:gap-20 md:px-8 md:py-32 lg:grid-cols-2 lg:items-center">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-8 text-[0.65rem] font-medium uppercase tracking-[0.5em] text-gray-500"
                >
                  A Little Bit More Trading Limited
                </motion.p>
                <h1 className="font-serif text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.12] tracking-[0.02em] text-black">
                  {heroWords.map((word, i) => (
                    <motion.span
                      key={`${word}-${i}`}
                      className="mr-[0.3em] inline-block"
                      initial={{ opacity: 0, y: "0.35em" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.06 + i * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-10 max-w-xl text-base leading-relaxed tracking-wide text-gray-500"
                >
                  A Little Bit More Trading Limited connects premium global
                  producers with dynamic markets across Greater China and ASEAN.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.85, duration: 0.7 }}
                  className="mt-12"
                >
                  <a
                    href="#sourcing"
                    className="inline-flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.4em] text-gray-500 transition-colors duration-500 hover:text-black"
                  >
                    <span className="h-px w-10 bg-gradient-to-r from-black/40 to-transparent" />
                    Scroll
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <HeroInstitutionalReel />
              </motion.div>
            </div>
          </section>

          <article
            id="sourcing"
            className="border-b border-gray-100 py-24 md:py-32"
          >
            <div className="mx-auto max-w-6xl px-6 md:px-8">
              <motion.header {...fadeUp} className="max-w-3xl">
                <h2 className="font-serif text-3xl tracking-tight text-black md:text-4xl">
                  Our Ecosystem &amp; Brands
                </h2>
                <p className="mt-5 text-sm uppercase tracking-[0.32em] text-gray-500">
                  Entity relations · institutional disclosure
                </p>
              </motion.header>

              <motion.div
                {...fadeUp}
                className="mt-14 border border-gray-100 bg-white p-8 md:p-14"
              >
                <p className="text-base leading-relaxed tracking-wide text-black">
                  A Little Bit More Trading Limited (ALBM) serves as the parent
                  holding company and primary supply chain backbone for several
                  ventures. Most notably, ALBM is the parent company and sole
                  owner of &apos;Two More Glasses&apos; (TMG), a leading retail
                  brand leading the premium wine and spirits market in Hong Kong.
                  Through ALBM&apos;s robust international logistics network, Two
                  More Glasses benefits from direct-to-estate sourcing and
                  enterprise-level cold-chain handling.
                </p>
              </motion.div>

              <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
                <motion.div
                  {...fadeUp}
                  className="group relative min-h-[360px] overflow-hidden border border-gray-100 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl lg:min-h-[400px]"
                >
                  <div className="absolute inset-0">
                    <img
                      src={IMG_TMG}
                      alt="Premium wine cellar"
                      className={imgInstitutional}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="pointer-events-none absolute left-6 top-6 rounded-sm border border-white/30 bg-black/40 px-3 py-2 backdrop-blur-sm">
                    <span className="text-[0.55rem] font-medium uppercase tracking-[0.45em] text-white/90">
                      ALBM
                    </span>
                  </div>
                  <div className="relative flex h-full min-h-[360px] flex-col justify-end p-8 text-white md:p-10">
                    <p className="text-[0.6rem] uppercase tracking-[0.45em] text-white/65">
                      Flagship retail
                    </p>
                    <h3 className="mt-3 font-serif text-2xl tracking-wide">
                      Two More Glasses (TMG)
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/88">
                      Estate-led allocation through ALBM&apos;s backbone—direct
                      sourcing, cold-chain discipline, and retail execution.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  className="flex flex-col justify-between border border-gray-100 bg-white p-8 md:p-12"
                >
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.4em] text-gray-500">
                      Backbone
                    </p>
                    <h3 className="mt-4 font-serif text-2xl text-black">
                      Supply chain architecture
                    </h3>
                    <p className="mt-5 text-sm leading-relaxed tracking-wide text-gray-500">
                      Enterprise-grade orchestration across bonded flows,
                      producer contracts, and cold integrity—structured for
                      institutions that require traceability at every node.
                    </p>
                  </div>
                  <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-100 pt-10 text-xs uppercase tracking-[0.22em] text-gray-500">
                    <div>
                      <p className="text-black">Direct sourcing</p>
                      <p className="mt-2 text-[0.65rem] leading-relaxed normal-case tracking-wide">
                        Estate relationships &amp; allocation discipline
                      </p>
                    </div>
                    <div>
                      <p className="text-black">Cold integrity</p>
                      <p className="mt-2 text-[0.65rem] leading-relaxed normal-case tracking-wide">
                        Monitoring, chain of custody, audit posture
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </article>

          <section
            id="logistics"
            className="border-b border-gray-100 py-24 md:py-32"
          >
            <div className="mx-auto max-w-6xl px-6 md:px-8">
              <motion.header {...fadeUp}>
                <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
                  Core Competencies
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed tracking-wide text-gray-500">
                  Infrastructure-first capabilities across sourcing, temperature
                  integrity, and market access.
                </p>
              </motion.header>

              <div className="mt-14 grid gap-8 md:grid-cols-3">
                {[
                  {
                    title: "Sourcing",
                    body: "Producer contracts, allocation governance, and cross-border documentation for premium categories—built for repeatability and auditability.",
                    src: IMG_SOURCING,
                    alt: "Gourmet perishables",
                  },
                  {
                    title: "Cold-Chain",
                    body: "Thermal integrity from bonded storage to monitored last-mile—telemetry, alarms, and chain-of-custody records aligned to enterprise cold-chain standards.",
                    src: IMG_COLDCHAIN,
                    alt: "Cold-chain logistics",
                  },
                  {
                    title: "Gateway",
                    body: "Greater China and ASEAN entry design: channel sequencing, compliance posture, and gateway logistics that scale with institutional demand.",
                    src: IMG_GATEWAY,
                    alt: "Global city network",
                  },
                ].map((item, i) => (
                  <motion.article
                    key={item.title}
                    {...fadeUp}
                    transition={{
                      ...fadeUp.transition,
                      delay: 0.06 * i,
                    }}
                    className={`group overflow-hidden border border-gray-100 bg-white ${cardBento}`}
                  >
                    <div className="relative -mx-8 -mt-8 mb-8 aspect-[5/3] md:-mx-10 md:-mt-10">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className={imgInstitutional}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    </div>
                    <h3 className="font-serif text-xl tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed tracking-wide text-gray-500">
                      {item.body}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="integrity"
            className="border-b border-gray-100 py-24 md:py-32"
          >
            <div className="mx-auto max-w-6xl px-6 md:px-8">
              <motion.div
                {...fadeUp}
                className="grid gap-12 border border-gray-100 bg-white p-10 md:grid-cols-[auto_1fr] md:items-start md:gap-16 md:p-14"
              >
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-gradient-to-br from-neutral-100 via-white to-neutral-300 shadow-inner"
                  aria-hidden
                >
                  <Shield
                    className="h-8 w-8 text-neutral-700"
                    strokeWidth={1.1}
                  />
                </div>
                <div>
                  <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
                    Governance &amp; Integrity
                  </h2>
                  <p className="mt-6 text-base leading-relaxed tracking-wide text-gray-500">
                    ALBM operates with board-level discipline: transparent
                    counterparties, documented custody, and proportionate
                    controls across data, logistics, and commercial decisions.
                    We align execution with institutional expectations—calm
                    operations, clear accountability, and integrity as a
                    default setting, not a marketing line.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          <section
            id="gateway"
            className="border-b border-gray-100 py-24 md:py-32"
          >
            <div className="mx-auto max-w-6xl px-6 md:px-8">
              <motion.header {...fadeUp} className="max-w-3xl">
                <h2 className="font-serif text-3xl tracking-tight text-black md:text-4xl">
                  Global Network
                </h2>
                <p className="mt-4 text-sm uppercase tracking-[0.28em] text-gray-500">
                  全球網絡 · Strategic版圖
                </p>
                <p className="mt-6 text-base leading-relaxed tracking-wide text-gray-500">
                  An agile, borderless distribution network.
                </p>
              </motion.header>

              <motion.div {...fadeUp} className="mt-14">
                <div className="grid gap-px border border-gray-100 bg-gray-100 sm:grid-cols-2 lg:grid-cols-3">
                  {globalNetworkNodes.map((node, i) => (
                    <motion.article
                      key={node.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-5% 0px" }}
                      transition={{
                        duration: 0.65,
                        delay: 0.05 * i,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`${cardBento} group`}
                    >
                      <div className="mb-6 flex items-center gap-3">
                        <span
                          className="inline-flex h-2 w-2 shrink-0 rounded-full bg-neutral-800 ring-4 ring-neutral-200/80 transition-transform duration-500 group-hover:scale-125"
                          aria-hidden
                        />
                        <h3 className="font-serif text-xl tracking-tight text-black">
                          {node.name}
                        </h3>
                      </div>
                      {node.role ? (
                        <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-gray-500">
                          {node.role}
                        </p>
                      ) : null}
                      <p className="mt-4 text-sm leading-relaxed tracking-wide text-gray-500">
                        {node.description}
                      </p>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <footer id="contact" className="py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-6 md:px-8">
              <div className="grid gap-14 border-t border-gray-100 pt-14 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
                <div>
                  <p className="font-serif text-xl tracking-tight text-black">
                    A Little Bit More Trading Limited
                  </p>
                  <address className="mt-8 not-italic text-sm leading-relaxed tracking-wide text-gray-500">
                    Headquarters
                    <br />
                    Unit 1001, World Interests Building
                    <br />
                    8 Tsun Yip Lane
                    <br />
                    Kwun Tong, Kowloon, Hong Kong
                  </address>
                  <a
                    href="mailto:info@albmtrading.com"
                    className="mt-8 inline-block text-sm tracking-wide text-black underline-offset-4 transition-colors hover:text-gray-600"
                  >
                    info@albmtrading.com
                  </a>
                </div>
                <div>
                  <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-gray-500">
                    Privacy &amp; Data Security
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed tracking-wide text-gray-500">
                    ALBM processes business contact and operational data strictly
                    for legitimate corporate purposes. We apply proportionate
                    technical and organizational measures to protect information
                    against unauthorized access, loss, or alteration, and we
                    retain data only as long as required for compliance and
                    service delivery.
                  </p>
                  <Link
                    href="/privacy"
                    className="mt-6 inline-block text-[0.62rem] font-medium uppercase tracking-[0.3em] text-black underline-offset-4 transition-colors hover:text-gray-500"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <p className="mt-16 text-center text-[0.6rem] uppercase tracking-[0.4em] text-gray-400">
                © {new Date().getFullYear()} A Little Bit More Trading Limited
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}
