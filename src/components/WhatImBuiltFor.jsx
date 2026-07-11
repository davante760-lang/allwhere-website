import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './AnimatedSection'

const cards = [
  {
    title: 'The Consolidation Play',
    body: 'My strongest deals at Samsara have come from buyers stitching together three, four, five vendors to run one workflow. Different tools, no single source of truth, manual handoffs between them. I win by closing on the compounding cost of the stitch and the operational risk of the seams, not the cost of switching. Same motion that wins an allwhere deal.',
  },
  {
    title: 'Cross-Functional Buying Committees',
    body: 'Every $130K+ deal I closed at Samsara moved through four to six stakeholders on four to six month cycles. Operator owns the day-to-day risk, IT owns security and integration, Finance owns spend, the CFO signs off. Different job titles at allwhere (IT Director, Head of People Ops, Finance, COO/CFO). Same motion. Multi-stakeholder buying committees are my home turf.',
  },
  {
    title: 'Companies Scaling Distributed Operations',
    body: 'The mid-market buyers I have closed at Samsara share a pattern with the ones allwhere serves. Headcount outpacing what internal teams can absorb manually. Data trapped in spreadsheets and disconnected tools. Assets going untracked. Asset recovery falling through the cracks. Different pain surface, same operational reality. That is why the muscle transfers.',
  },
  {
    title: 'Playbook-Builder Culture',
    body: 'Environments where the segment motion is still being built and leadership values commercial judgment over raw activity volume. I want to help shape how the org sells into a segment or geography, not execute a defined script. That\u2019s what earned me back-to-back President\u2019s Club at Samsara. I built the vertical playbooks. I didn\u2019t inherit them.',
  },
]

export default function WhatImBuiltFor() {
  return (
    <section id="built-for" className="bg-surface-1 border-b border-border py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="FIT" title="What I'm Built For" />
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-[14.5px] leading-[1.75] text-text-secondary max-w-[680px] mb-8">
            I thrive in organizations where the following three factors intersect:
          </p>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={0.1 + i * 0.06}>
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
