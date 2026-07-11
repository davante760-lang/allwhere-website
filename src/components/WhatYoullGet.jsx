import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './AnimatedSection'

const cards = [
  {
    title: 'Self-Sourced Pipeline',
    body: 'I don\u2019t wait for inbound. ~55% of my pipeline is self-sourced through targeted outbound. Top 5 regionally in pipeline generation at Samsara. Same muscle, applied against allwhere\u2019s ICP \u2014 growth-stage and mid-market companies scaling distributed teams faster than IT and People Ops can absorb.',
  },
  {
    title: 'Platform-Buyer Fluency',
    body: 'Deep understanding of how ops-heavy buyers evaluate a platform purchase. IT Directors, Heads of People Ops, Finance and procurement, and the COO or CFO who signs off. Teams running on manual workflows, fragmented tooling, and vendor sprawl that "technically still works" \u2014 which is exactly what allwhere replaces.',
  },
  {
    title: 'Executive Business Cases',
    body: 'The ability to move beyond a technical or operator champion, reach the economic buyer, and build the business case that holds up in the CFO\u2019s office. Hours back for IT, dollars recovered on offboarding, spend consolidated across procurement contracts \u2014 quantified outcomes, not feature lists.',
  },
  {
    title: 'Forecast Discipline',
    body: 'A clean CRM and an honest forecast based on MEDDPICC. No happy ears. The deals I commit are deals that close.',
  },
]

export default function WhatYoullGet() {
  return (
    <section id="what-you-get" className="bg-surface-1 border-b border-border py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="VALUE" title="What You Get" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-2 border border-border rounded-xl p-5 h-full"
              >
                <h3 className="font-heading font-medium text-text-primary mb-2">{card.title}</h3>
                <p className="text-[14.5px] leading-[1.75] text-text-secondary">{card.body}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
