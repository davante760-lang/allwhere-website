import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './AnimatedSection'

const cards = [
  {
    title: 'Sat in the Buyer\u2019s Chair',
    body: 'Built and sold an independent insurance agency on the side. Ran a small P&L, chased premium payments, made hiring and software decisions on my own dime. I know what it feels like to be the operator deciding whether a new platform is worth the switch \u2014 not just the rep pitching it.',
  },
  {
    title: 'AI Practitioner',
    body: 'Active early-adopter of LLM and agentic AI tools. I build my own workflows to automate prospecting research, account scoring, and pre-discovery briefs. Translates into a measurable edge in speed-to-lead and discovery depth.',
  },
  {
    title: 'Two-Time President\u2019s Club',
    body: 'FY24 and FY25 at Samsara. Top 10% of the Mid-Market sales org both years. Consistent over-attainment against a $900K quota in a year where most of the team came in under number.',
  },
  {
    title: 'Commercial Judgment',
    body: 'I work best where the vertical motion is still being built and leadership values commercial judgment over raw activity volume. I want to help shape how the org sells in a vertical, not just execute someone else\u2019s script.',
  },
]

export default function FounderSignal() {
  return (
    <section id="founder-signal" className="bg-surface-1 border-b border-border py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="SIGNAL" title="Founder-Level Signal" />
        </FadeIn>

        <div className="flex flex-col gap-4">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-2 border border-border rounded-xl p-5"
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
