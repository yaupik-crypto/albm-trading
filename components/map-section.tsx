"use client"

import { motion } from "framer-motion"

// Updated Hub locations per spec: Thailand, Singapore, Macau, HK, Taiwan, Shenzhen
// Removed Shanghai, added Thailand and Taiwan
const hubs = [
  { id: "hk", name: "Hong Kong", nameZh: "香港", code: "HK", label: "HQ Operations Base", labelZh: "HQ 營運基地", x: 78, y: 52, isHQ: true },
  { id: "sz", name: "Shenzhen", nameZh: "深圳", code: "SZ", label: "Active Trading Node", labelZh: "活躍貿易節點", x: 77, y: 50, isHQ: false },
  { id: "tw", name: "Taiwan", nameZh: "台灣", code: "TW", label: "Active Trading Node", labelZh: "活躍貿易節點", x: 82, y: 46, isHQ: false },
  { id: "mo", name: "Macau", nameZh: "澳門", code: "MO", label: "Active Trading Node", labelZh: "活躍貿易節點", x: 76, y: 52, isHQ: false },
  { id: "th", name: "Thailand", nameZh: "泰國", code: "TH", label: "Active Trading Node", labelZh: "活躍貿易節點", x: 70, y: 55, isHQ: false },
  { id: "sg", name: "Singapore", nameZh: "新加坡", code: "SG", label: "Active Trading Node", labelZh: "活躍貿易節點", x: 73, y: 64, isHQ: false },
]

// Slow, smooth pulse animation
const pulseVariants = {
  initial: { scale: 1, opacity: 0.6 },
  animate: {
    scale: [1, 2, 1],
    opacity: [0.6, 0, 0.6],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export function MapSection() {
  return (
    <section className="py-32 lg:py-40 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
            Network
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-foreground leading-tight">
            Our Trading Footprint
          </h2>
          <p className="text-sm tracking-[0.15em] text-muted-foreground mt-4">
            Active Sourcing & Distribution Markets
          </p>
        </motion.div>

        {/* Minimalist SVG World Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <svg
            viewBox="0 0 100 75"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified Asia-Pacific region outline */}
            <defs>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E5E5E5" />
                <stop offset="100%" stopColor="#F5F5F5" />
              </linearGradient>
            </defs>
            
            {/* Abstract continental shapes - Asia focus */}
            <path
              d="M55 10 L90 8 L95 18 L94 32 L90 42 L85 48 L78 54 L72 58 L65 56 L58 50 L52 44 L48 35 L47 25 L50 15 Z"
              fill="url(#mapGradient)"
              stroke="#E5E5E5"
              strokeWidth="0.3"
              opacity="0.6"
            />
            
            {/* Southeast Asia / Malaysia / Indonesia */}
            <path
              d="M65 54 L72 56 L78 62 L82 68 L75 70 L68 65 L62 58 Z"
              fill="url(#mapGradient)"
              stroke="#E5E5E5"
              strokeWidth="0.3"
              opacity="0.5"
            />

            {/* Taiwan */}
            <ellipse cx="82" cy="46" rx="2" ry="3" fill="url(#mapGradient)" stroke="#E5E5E5" strokeWidth="0.2" opacity="0.7" />

            {/* Connection lines between hubs - all connect to HK */}
            <g stroke="#D4C4A8" strokeWidth="0.15" strokeDasharray="0.8,0.8" opacity="0.5">
              <line x1="78" y1="52" x2="77" y2="50" /> {/* HK to SZ */}
              <line x1="78" y1="52" x2="82" y2="46" /> {/* HK to TW */}
              <line x1="78" y1="52" x2="76" y2="52" /> {/* HK to MO */}
              <line x1="78" y1="52" x2="70" y2="55" /> {/* HK to TH */}
              <line x1="78" y1="52" x2="73" y2="64" /> {/* HK to SG */}
            </g>

            {/* Hub markers with slow pulse effect */}
            {hubs.map((hub, index) => (
              <g key={hub.id}>
                {/* Outer pulse ring */}
                <motion.circle
                  cx={hub.x}
                  cy={hub.y}
                  r={hub.isHQ ? "2.5" : "1.8"}
                  fill="none"
                  stroke={hub.isHQ ? "#D4C4A8" : "#A0A0A0"}
                  strokeWidth="0.2"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                  style={{ animationDelay: `${index * 0.4}s` }}
                />
                {/* Static dot */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={hub.isHQ ? "1.2" : "0.7"}
                  fill={hub.isHQ ? "#D4C4A8" : "#A0A0A0"}
                />
                {/* Label - only show for HK */}
                {hub.isHQ && (
                  <text
                    x={hub.x}
                    y={hub.y - 4}
                    textAnchor="middle"
                    className="fill-current text-[#D4C4A8]"
                    style={{ fontSize: '2.2px', fontFamily: 'Inter, sans-serif', letterSpacing: '0.3px', fontWeight: 500 }}
                  >
                    HQ
                  </text>
                )}
              </g>
            ))}
          </svg>

          {/* Network statement */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mt-12 leading-relaxed"
          >
            Our network ensures efficient sourcing and distribution across these active trade nodes without explicit physical offices.
          </motion.p>

          {/* Hub Legend - Listed below map */}
          <div className="mt-16 border-t border-border pt-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {hubs.map((hub, index) => (
                <motion.div
                  key={hub.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div 
                      className={`w-2 h-2 rounded-full ${hub.isHQ ? "bg-[#D4C4A8]" : "bg-[#A0A0A0]"}`} 
                    />
                    <span className={`text-xs font-medium tracking-[0.1em] uppercase ${hub.isHQ ? "text-[#D4C4A8]" : "text-foreground"}`}>
                      {hub.code}
                    </span>
                  </div>
                  <p className="text-sm text-foreground">{hub.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{hub.nameZh}</p>
                  <p className="text-[10px] text-muted-foreground/60 mt-2 tracking-wide">
                    {hub.isHQ ? "HQ Base Operations" : "Active Node"}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
