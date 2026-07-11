import { motion } from 'framer-motion'
import ConstellationCanvas from './ConstellationCanvas'
import ElectricText from './ElectricText'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ConstellationCanvas />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(91,141,239,0.3) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="block text-[11px] uppercase tracking-[0.2em] font-medium text-accent mb-6"
        >
          Mid-Market AE · Consolidation Sales · Distributed Ops
        </motion.span>

        <ElectricText text="Dave Alexander" className="flex justify-center mb-6" />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-text-secondary text-[14.5px] leading-[1.75] max-w-[620px] mx-auto"
        >
          Mid-market AE with 8+ years in B2B SaaS. Currently at Samsara, running the sales motion
          behind two consecutive President's Club years. 118% average quota attainment against a $900K number.
          $84K average ACV, $250K largest win. I sell into buyers replacing fragmented tooling,
          manual workflows, and vendor sprawl with a single platform. The real sale is reframing
          the cost of doing it the old way into a business case the operator lives every day and
          the CFO can sign off on.
        </motion.p>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #111318)',
        }}
      />
    </section>
  )
}
