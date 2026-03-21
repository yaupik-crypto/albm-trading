"use client"

import { motion } from "framer-motion"

// Hub locations (approximate positions on a simplified world map)
const hubs = [
  { id: "hk", name: "Hong Kong", nameZh: "香港", label: "HQ", x: 78, y: 52 },
  { id: "sh", name: "Shanghai", nameZh: "上海", label: "SH", x: 80, y: 45 },
  { id: "sz", name: "Shenzhen", nameZh: "深圳", label: "SZ", x: 77, y: 53 },
  { id: "sg", name: "Singapore", nameZh: "新加坡", label: "SG", x: 75, y: 62 },
]

// Pulse animation
const pulseVariants = {
  initial: { scale: 1, opacity: 0.6 },
  animate: {
    scale: [1, 1.8, 1],
    opacity: [0.6, 0, 0.6],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export function MapSection() {
  return (
    <section className="py-24 lg:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
            Network
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-foreground leading-tight">
            Regional Presence
          </h2>
          <p className="text-sm tracking-[0.15em] text-muted-foreground mt-4">
            區域業務據點
          </p>
        </motion.div>

        {/* Minimalist SVG World Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <svg
            viewBox="0 0 100 60"
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
              d="M60 15 L85 12 L90 20 L92 35 L88 45 L82 48 L75 52 L70 55 L65 53 L60 48 L55 45 L50 40 L48 30 L50 20 L55 15 Z"
              fill="url(#mapGradient)"
              stroke="#E5E5E5"
              strokeWidth="0.3"
              opacity="0.7"
            />
            
            {/* Southeast Asia */}
            <path
              d="M68 50 L72 52 L75 58 L78 60 L72 60 L68 56 Z"
              fill="url(#mapGradient)"
              stroke="#E5E5E5"
              strokeWidth="0.3"
              opacity="0.6"
            />

            {/* Connection lines between hubs */}
            <g stroke="#D4C4A8" strokeWidth="0.2" strokeDasharray="1,1" opacity="0.4">
              <line x1="78" y1="52" x2="80" y2="45" /> {/* HK to SH */}
              <line x1="78" y1="52" x2="77" y2="53" /> {/* HK to SZ */}
              <line x1="78" y1="52" x2="75" y2="62" /> {/* HK to SG */}
            </g>

            {/* Hub markers with pulse effect */}
            {hubs.map((hub, index) => (
              <g key={hub.id}>
                {/* Pulse ring */}
                <motion.circle
                  cx={hub.x}
                  cy={hub.y}
                  r="2"
                  fill="none"
                  stroke={hub.id === "hk" ? "#D4C4A8" : "#A0A0A0"}
                  strokeWidth="0.3"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
                {/* Static dot */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={hub.id === "hk" ? "1.2" : "0.8"}
                  fill={hub.id === "hk" ? "#D4C4A8" : "#A0A0A0"}
                />
                {/* Label */}
                <text
                  x={hub.x}
                  y={hub.y - 3}
                  textAnchor="middle"
                  className="text-[2.5px] fill-current text-muted-foreground"
                  style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.5px' }}
                >
                  {hub.label}
                </text>
              </g>
            ))}
          </svg>

          {/* Hub Legend */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {hubs.map((hub, index) => (
              <motion.div
                key={hub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div 
                    className={`w-2 h-2 rounded-full ${hub.id === "hk" ? "bg-[#D4C4A8]" : "bg-[#A0A0A0]"}`} 
                  />
                  <span className="text-xs font-medium tracking-[0.1em] text-foreground uppercase">
                    {hub.label}
                  </span>
                </div>
                <p className="text-sm text-foreground">{hub.name}</p>
                <p className="text-xs text-muted-foreground">{hub.nameZh}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
