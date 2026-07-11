import { FadeIn, SectionTitle } from './AnimatedSection'
import { motion } from 'framer-motion'

const companies = [
  {
    name: 'Samsara',
    logo: '/logo-samsara.png',
    invertLogo: true,
    url: 'https://www.samsara.com/',
    role: 'Account Executive, Mid-Market (Feb 2023 to Present)',
    takeaway:
      '118% avg attainment against a $900K quota across FY24 and FY25, currently pacing 103% in FY26. Grew average deal size to $84K through multi-product attach and executive-aligned business cases. $4 to $5M in qualified pipeline annually, ~55% self-sourced. $250K competitive displacement. Two-time President\u2019s Club, top 10% of the Mid-Market sales org.',
  },
  {
    name: 'Applied Systems',
    logo: '/logo-applied.png',
    url: 'https://www1.appliedsystems.com/en-us/',
    role: 'Account Executive, Mid-Market (Jun 2021 to Feb 2023)',
    takeaway:
      '105% against an $800K annual quota, Top 3 on a team of 8 in a year where ~50% hit number. Closed 18 net-new AMS replacement deals on 3.5\u00d7 pipeline coverage by leading full-cycle discovery, stakeholder mapping, and ROI business cases across agency principals and ops leaders.',
  },
  {
    name: 'EZLynx',
    logo: '/logo-ezlynx.png',
    url: 'https://www.ezlynx.com/',
    role: 'BDR to SMB AE (Nov 2017 to Jun 2021)',
    takeaway:
      'Built outbound discipline from the ground up. As BDR: $400K+ qualified pipeline in a single quarter, ~25% connect-to-meeting lift, ~20% lead-to-opp lift after rolling out a lead scoring framework. Promoted to SMB AE and closed the largest full-suite AMS replacement on the SMB team that year ($42K).',
  },
]

export default function WorkHistory() {
  return (
    <section id="experience" className="py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="EXPERIENCE" title="Where I've Sold" />
        </FadeIn>

        {/* Timeline connector line (desktop only) */}
        <div className="hidden md:block relative mb-8">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border" />
          <div className="flex justify-between relative z-10">
            {companies.map((c) => (
              <div key={c.name} className="w-2 h-2 rounded-full bg-accent" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {companies.map((company, i) => (
            <FadeIn key={company.name} delay={i * 0.1}>
              <motion.div
                className="bg-surface-1 border border-border rounded-xl p-5 flex flex-col h-full"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Logo linked to company website */}
                <div className="h-10 mb-4 flex items-center">
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${company.name} website (opens in a new tab)`}
                    className="group inline-flex items-center rounded-sm transition-opacity duration-200 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-surface-1"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-8 max-w-[140px] object-contain transition-transform duration-200 group-hover:scale-[1.03]"
                      style={company.invertLogo ? { filter: 'brightness(0) invert(1)' } : undefined}
                    />
                  </a>
                </div>

                {/* Role */}
                <h3 className="font-heading text-[15px] font-semibold text-text-primary tracking-[-0.01em] mb-4">
                  {company.role}
                </h3>

                {/* Takeaway */}
                <div className="mt-auto pt-4 border-t border-border-light">
                  <p className="text-[13px] italic text-text-tertiary leading-[1.65]">
                    "{company.takeaway}"
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
