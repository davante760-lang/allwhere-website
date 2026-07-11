import { FadeIn, SectionTitle } from './AnimatedSection'

const items = [
  {
    title: 'Trigger-Based Prospecting',
    body: 'At Samsara I tier a book of 150 to 250 accounts down to a focused weekly call block driven by active buying signals: new Operations, Fleet, or Safety leadership hires, recent incidents or insurance premium spikes, fleet or facility expansions, M&A, DOT and compliance events. I lead with the business change, not a product pitch. ~55% of pipeline self-sourced. Same discipline, applied against any ICP.',
  },
  {
    title: 'Multi-Stakeholder Threading',
    body: 'Every complex deal I have closed at Samsara ran on simultaneous top-down (CFO, COO) and bottom-up (operator, IT, Finance) threads. One champion is a single point of failure. I build committees around a shared business case anchored in operational pain the day-to-day owner already feels and a dollar impact the CFO can sign off on. At allwhere the value drivers translate cleanly: hours back for IT, dollars recovered on retrieval, vendor spend consolidated across procurement.',
  },
  {
    title: 'MEDDPICC Discipline',
    body: 'I prioritize "no" over "maybe." Hard-stop qualification on metrics, economic buyer, decision criteria, paper process, identified pain, and the competition. Contract buyouts, security review timelines, and procurement blockers surface early. Resources only go against deals with a real path to close.',
  },
  {
    title: 'Segment Playbooks',
    body: 'I don\u2019t run a horizontal pitch into a specialized buyer. At Samsara I built net-new segment playbooks that grew my average deal size to $84K through multi-product attach and executive-aligned business cases. The same discipline works for any platform buyer whose problem is fragmented tooling, un-owned workflows, and vendor sprawl. Build the segment motion, quantify the CFO business case, close on the cost of not solving it.',
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
