import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './AnimatedSection'

const deals = [
  {
    name: 'JDE Concrete',
    industry: 'Concrete & construction operations',
    logo: '/jde-concrete.png',
    logoClass: 'max-h-[82px] max-w-[210px]',
  },
  {
    name: 'Excelsior Ambulance Service',
    industry: 'Emergency medical services',
    logo: '/excelsior-ambulance.webp',
    logoClass: 'max-h-[76px] max-w-[240px]',
  },
  {
    name: 'Dietz & Watson',
    industry: 'Food manufacturing & distribution',
    logo: '/dietz-watson.png',
    logoClass: 'max-h-[98px] max-w-[210px]',
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
                <div className="h-[126px] rounded-lg bg-surface-2 border border-border-light flex items-center justify-center px-4 mb-5 overflow-hidden">
                  <img
                    src={deal.logo}
                    alt={`${deal.name} logo`}
                    className={`w-auto object-contain ${deal.logoClass}`}
                    loading="lazy"
                  />
                </div>
                <h3 className="font-heading text-[15px] font-semibold text-text-primary tracking-[-0.01em] mb-1.5">
                  {deal.name}
                </h3>
                <p className="text-[12.5px] leading-[1.6] text-text-tertiary mt-auto">{deal.industry}</p>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
