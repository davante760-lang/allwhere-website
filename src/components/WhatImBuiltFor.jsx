import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './AnimatedSection'

const cards = [
  {
    title: 'The Consolidation Play',
    body: 'Selling into buyers stitching together three, four, five vendors to run one workflow \u2014 procurement here, MDM there, shipping in a spreadsheet, retrieval in Slack DMs, invoicing across four contracts. I close on the compounding cost of the stitch and the operational risk of the seams, not the cost of switching.',
  },
  {
    title: 'Cross-Functional Buying Committees',
    body: 'Platform buys that don\u2019t sit with one team. IT owns security and control, People Ops owns employee experience, Finance owns spend and vendor consolidation, the COO or CFO owns the flywheel. Multi-stakeholder deals across four to six stakeholders on four to six month cycles \u2014 the exact motion I\u2019ve run for the last three years.',
  },
  {
    title: 'Companies Scaling Distributed Operations',
    body: 'Growth-stage and mid-market companies where headcount is outpacing what IT and People Ops can absorb manually. Onboarding taking weeks instead of days, assets going untracked, offboarding recovery falling through the cracks. The universal operational pain of running a company across time zones and geographies \u2014 which is exactly the pain allwhere solves.',
  },
  {
    title: 'Playbook-Builder Culture',
    body: 'Environments where the segment motion is still being built and leadership values commercial judgment over raw activity volume. I want to help shape how the org sells into a segment or geography, not execute a defined script. That\u2019s what earned me back-to-back President\u2019s Club at Samsara \u2014 I built the vertical playbooks, I didn\u2019t inherit them.',
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
