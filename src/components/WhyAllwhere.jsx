import { FadeIn, SectionTitle } from './AnimatedSection'

const reasons = [
  {
    title: 'A Problem With Real Operational Weight',
    body: 'allwhere sits at the intersection of the work I’ve done best: operational complexity, connected hardware, fragmented workflows, and a business case that matters to both the operator and the CFO. It combines software, procurement, logistics, device data, and lifecycle services to replace work still spread across vendors, shipping portals, spreadsheets, and manual handoffs.',
  },
  {
    title: 'Credibility Without a Finished Playbook',
    body: 'DESCOvery backing, recognizable customers, and integrations with Jamf and Iru create market credibility. The company is still early enough for an AE to help sharpen the vertical motion, expansion strategy, and the way value is quantified — more compelling to me than inheriting a completely mature playbook.',
  },
  {
    title: 'A Role Built for Commercial Judgment',
    body: 'The mix of sourcing net-new business, expanding an existing book, partnering with Customer Success and Operations, and developing thought leadership is the kind of builder role I want. It rewards finding the signal, building the committee, and creating a credible reason to change — not simply executing someone else’s script.',
  },
]

export default function WhyAllwhere() {
  return (
    <section id="why-allwhere" className="bg-surface-1 border-b border-border py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="WHY ALLWHERE" title="What Piqued My Interest With allwhere" />
        </FadeIn>
        <div className="flex flex-col gap-4">
          {reasons.map((reason, index) => (
            <FadeIn key={reason.title} delay={index * 0.07}>
              <article className="bg-surface-2 border border-border rounded-xl p-5">
                <h3 className="font-heading font-medium text-text-primary mb-2">{reason.title}</h3>
                <p className="text-[14.5px] leading-[1.75] text-text-secondary">{reason.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.25}>
          <div className="relative bg-surface-2 border border-border rounded-xl p-6 mt-4 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent" />
            <p className="font-heading text-[17px] md:text-[19px] leading-[1.55] text-text-primary">
              “I see a chance to bring my experience selling operational SaaS and connected hardware into a company where I can carry a number and help shape how the market is won.”
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
