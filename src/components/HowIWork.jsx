import { FadeIn, SectionTitle } from './AnimatedSection'

const items = [
  {
    title: 'Trigger-Based Prospecting',
    body: 'I tier a book of 150\u2013250 accounts down to a focused weekly call block driven by active signals: new Head of People / IT / Finance hires, funding rounds, headcount ramps, new international offices, acquisitions, RIFs and reorgs (offboarding waves), any operational event that changes what the buyer wakes up thinking about. I lead with the business change, not a product pitch. ~55% of pipeline self-sourced.',
  },
  {
    title: 'Multi-Stakeholder Threading',
    body: 'I run simultaneous top-down (CFO, COO) and bottom-up (IT Director, Head of People Ops, Finance / procurement) threads. One champion is a single point of failure. I build committees around a shared business case anchored in operational pain the day-to-day owner already feels and a dollar impact the CFO can sign off on \u2014 hours back, dollars recovered, vendor spend consolidated.',
  },
  {
    title: 'MEDDPICC Discipline',
    body: 'I prioritize "no" over "maybe." Hard-stop qualification on metrics, economic buyer, decision criteria, paper process, identified pain, and the competition. Contract buyouts, security review timelines, and procurement blockers surface early. Resources only go against deals with a real path to close.',
  },
  {
    title: 'Segment Playbooks',
    body: 'I don\u2019t run a horizontal pitch into a specialized buyer. At Samsara I built net-new segment playbooks that grew my average deal size to $84K through multi-product attach and executive-aligned business cases. The same discipline works for any platform buyer whose problem is fragmented tooling, un-owned workflows, and vendor sprawl \u2014 build the segment motion, quantify the CFO business case, close on the cost of not solving it.',
  },
]

export default function HowIWork() {
  return (
    <section id="how-i-sell" className="py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="APPROACH" title="How I Sell" />
        </FadeIn>

        <div className="space-y-6">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="pl-4 border-l border-border-light max-w-[680px]">
                <h3 className="font-heading text-[15px] font-semibold text-text-primary tracking-[-0.01em] mb-2">
                  {item.title}
                </h3>
                <p className="text-[14.5px] leading-[1.75] text-text-secondary">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
