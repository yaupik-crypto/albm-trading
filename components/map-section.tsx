"use client"

import { motion } from "framer-motion"

const tradeNodes = [
  { code: "HK", name: "Hong Kong", nameZh: "香港", status: "HQ Base Operations", isHQ: true },
  { code: "MO", name: "Macau", nameZh: "澳門", status: "Active Trading Node", isHQ: false },
  { code: "TW", name: "Taiwan", nameZh: "台灣", status: "Active Trading Node", isHQ: false },
  { code: "SZ", name: "Shenzhen", nameZh: "深圳", status: "Active Trading Node", isHQ: false },
  { code: "SG", name: "Singapore", nameZh: "新加坡", status: "Active Trading Node", isHQ: false },
  { code: "TH", name: "Thailand", nameZh: "泰國", status: "Active Trading Node", isHQ: false },
]

export function MapSection() {
  return (
    <section id="network" className="py-32 lg:py-40 bg-background border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
            Network
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-foreground leading-tight">
            Active Trade Nodes
          </h2>
          <p className="text-sm tracking-[0.15em] text-muted-foreground mt-4">
            活躍貿易節點
          </p>
        </motion.div>

        {/* Network Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl mx-auto text-center mb-20 lg:mb-24"
        >
          <p className="text-lg text-foreground leading-relaxed">
            We maintain an agile, borderless distribution network without the overhead of traditional corporate offices.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            我們維持靈活的無邊界分銷網絡，無需傳統企業辦公室的開銷。
          </p>
        </motion.div>

        {/* Trade Nodes Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {tradeNodes.map((node, index) => (
              <motion.div
                key={node.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                className={`p-8 lg:p-10 text-center border-border ${
                  index < tradeNodes.length - 1 ? "border-r" : ""
                } ${index < 2 || (index >= 2 && index < 4) ? "border-b lg:border-b-0" : ""} ${
                  index < 3 ? "md:border-b lg:border-b-0" : ""
                } ${node.isHQ ? "bg-neutral-50" : "bg-background"}`}
              >
                {/* Code */}
                <span className={`text-2xl lg:text-3xl font-serif tracking-tight ${
                  node.isHQ ? "text-foreground" : "text-foreground"
                }`}>
                  {node.code}
                </span>
                
                {/* Name */}
                <p className="text-sm text-foreground mt-4 mb-1">
                  {node.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {node.nameZh}
                </p>
                
                {/* Status */}
                <p className={`text-[10px] tracking-[0.1em] uppercase mt-4 ${
                  node.isHQ ? "text-foreground font-medium" : "text-muted-foreground"
                }`}>
                  {node.status}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-xs text-muted-foreground max-w-2xl mx-auto mt-12"
        >
          Our network ensures efficient sourcing and distribution across these active trade nodes without explicit physical offices.
        </motion.p>
      </div>
    </section>
  )
}
