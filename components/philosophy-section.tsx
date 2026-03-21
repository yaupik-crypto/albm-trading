"use client"

import { motion } from "framer-motion"

export function PhilosophySection() {
  return (
    <section id="ecosystem" className="py-32 lg:py-48 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 lg:mb-28"
        >
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
            Our Philosophy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-tight text-balance">
            The Power of &lsquo;A Little Bit More&rsquo;
          </h2>
        </motion.div>

        {/* Philosophy Content - English */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-20 lg:mb-24"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl font-normal text-foreground leading-relaxed tracking-tight text-balance text-center">
              In global trade, excellence is found in the final 1%. Our name is our mission: we commit to the extra effort in sourcing, the extra mile in logistics, and the extra measure of integrity in every partnership. We safeguard the journey of every product we facilitate.
            </p>
          </div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-16 h-px bg-border mx-auto mb-20 lg:mb-24"
        />

        {/* Philosophy Content - Chinese */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg lg:text-xl font-normal text-muted-foreground leading-relaxed tracking-wide text-balance text-center">
              在貿易中，那 1% 的額外堅持，成就了 100% 的卓越。我們的名字就是我們的使命：我們致力於在採購、物流及每一次合作中再進一步、多想一點。我們不只是連接市場，我們更是為每一件經手的產品保駕護航。
            </p>
          </div>
        </motion.div>

        {/* Chinese Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground">
            「再進一步」的營運哲學
          </span>
        </motion.div>
      </div>
    </section>
  )
}
