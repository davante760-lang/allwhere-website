import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './AnimatedSection'

const deals = [
  {
    name: 'JDE Concrete',
    industry: 'Concrete & construction operations',
    value: '$250K',
    cycle: '6-month sales cycle',
    logo: '/jde-concrete.png',
    logoClass: 'max-h-[82px] max-w-[210px]',
    url: 'https://jde-concrete.com/',
  },
  {
    name: 'Excelsior Ambulance Service',
    industry: 'Emergency medical services',
    value: '$117K',
    cycle: '4-month sales cycle',
    logo: '/excelsior-ambulance.webp',
    logoClass: 'max-h-[76px] max-w-[240px]',
    url: 'https://www.excelsioramb.com/',
  },
  {
    name: 'Dietz & Watson',
    industry: 'Food manufacturing & distribution',
    value: '$91K',
    cycle: '65-day sales cycle',
    logo: '/dietz-watson.png',
    logoClass: 'max-h-[98px] max-w-[210px]',
    url: 'https://www.dietzandwatson.com/',
  },
]

export default function MarqueeDeals() {
  return (
    <section id="marquee-deals" className="py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="MARQUEE DEALS" title="Selected Operational Wins" />
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-[14.5px] leading-[1.75] text-text-secondary max-w-[680px] mb-8">
            Representative wins across operationally intensive industries. Each required a tailored
            business case, multi-stakeholder alignment, and a credible reason to change. I’m happy to
            walk through the deal mechanics live.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {deals.map((deal, index) => (
            <FadeIn key={deal.name} delay={0.1 + index * 0.08}>
              <motion.article
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-1 border border-border rounded-xl p-5 h-full flex flex-col"
              >
                <a
                  href={deal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${deal.name} website (opens in a new tab)`}
                  className="group h-[126px] rounded-lg bg-surface-2 border border-border-light flex items-center justify-center px-4 mb-5 overflow-hidden transition-all duration-200 hover:border-accent/40 hover:bg-surface-2/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1"
                >
                  <img
                    src={deal.logo}
                    alt={`${deal.name} logo`}
                    className={`w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03] ${deal.logoClass}`}
                    loading="lazy"
                  />
                </a>
                <h3 className="font-heading text-[15px] font-semibold text-text-primary tracking-[-0.01em] mb-1.5">
                  {deal.name}
                </h3>
                <p className="text-[12.5px] leading-[1.6] text-text-tertiary mb-4">{deal.industry}</p>
                <div className="mt-auto pt-4 border-t border-border-light flex items-center justify-between gap-3">
                  <span className="font-heading text-[21px] font-semibold tracking-[-0.03em] text-accent">{deal.value}</span>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="text-[10px] text-text-tertiary">{deal.cycle}</span>
                    <span className="text-[9px] uppercase tracking-[0.14em] font-medium text-teal bg-teal-dim rounded-full px-2.5 py-1.5">
                      Self-sourced
                    </span>
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
