const stats = [
  ['118%', 'two-year average attainment'],
  ['$4–5M', 'qualified pipeline annually'],
  ['55%+', 'pipeline self-sourced'],
  ['$250K', 'largest competitive win'],
]

const roles = [
  {
    company: 'Samsara',
    logo: '/logo-samsara.png',
    role: 'Account Executive, Mid-Market',
    date: '2023 — Current',
    meta: '$900K quota · 4–6 month cycle',
    result: '118% average attainment across FY24 and FY25. Two-time President’s Club, top 10% of the Mid-Market organization.',
    detail: 'Built vertical plays, generated $4–5M in annual pipeline, and compressed multi-stakeholder sales cycles by roughly 15% through earlier executive alignment and standardized mutual action plans.',
  },
  {
    company: 'Applied Systems',
    logo: '/logo-applied.png',
    role: 'Account Executive, Mid-Market',
    date: '2021 — 2023',
    meta: '$800K quota · 4–6 month cycle',
    result: 'Finished at 105%, ranked top three on an eight-person team, and closed 18 net-new AMS replacement deals.',
    detail: 'Maintained 3.5× pipeline coverage by targeting agencies facing legacy-platform, renewal, and contract triggers.',
  },
  {
    company: 'EZLynx',
    logo: '/logo-ezlynx.png',
    role: 'Account Executive, SMB → BDR',
    date: '2017 — 2021',
    meta: '$350K AE quota · 60–90 day cycle',
    result: 'Closed the largest full-suite AMS replacement on the SMB team that year and generated $400K+ in qualified pipeline in one BDR quarter.',
    detail: 'Improved connect-to-meeting conversion by roughly 25% and helped lift lead-to-opportunity conversion by roughly 20% with a new scoring framework.',
  },
]

const plays = [
  {
    number: '01',
    title: 'Find the business change',
    body: 'Leadership moves, incidents, expansion, M&A, renewals, and operational friction determine where I spend time. The first message starts with what changed—not what the product does.',
  },
  {
    number: '02',
    title: 'Build both sides of the room',
    body: 'I thread operators and executives in parallel: the people who feel the workflow problem and the economic buyer who needs a defensible business case.',
  },
  {
    number: '03',
    title: 'Make inaction measurable',
    body: 'The hardest competitor is usually “good enough.” I translate fragmented data, manual work, and operational risk into a cost the customer can defend internally.',
  },
  {
    number: '04',
    title: 'Qualify without happy ears',
    body: 'Metrics, economic buyer, decision process, pain, competition, and paper process surface early. A fast no protects the territory better than a comfortable maybe.',
  },
]

const deals = [
  {
    kicker: 'Competitive displacement',
    value: '$250K',
    title: 'Turned a technology decision into an executive risk decision.',
    body: 'Reframed the cost of inaction for an operational fleet, secured CFO alignment early, and unseated an entrenched incumbent with a multi-product business case.',
    proof: 'CFO alignment · incumbent displacement · cost-of-inaction case',
  },
  {
    kicker: 'Net-new replacement motion',
    value: '18',
    title: 'Closed 18 legacy AMS replacement deals in one role.',
    body: 'Led discovery, stakeholder mapping, workflow analysis, and ROI cases across agency principals and operations leaders while maintaining 3.5× coverage.',
    proof: '105% attainment · top 3 of 8 · 3.5× coverage',
  },
  {
    kicker: 'Pipeline creation',
    value: '55%+',
    title: 'Built the majority of pipeline instead of waiting for it.',
    body: 'Used account signals and persona-specific messaging to create $4–5M in qualified annual pipeline and rank top five regionally in pipeline generation.',
    proof: 'targeted outbound · executive discovery · vertical plays',
  },
]

const capabilities = [
  'MEDDPICC',
  'Command of the Message',
  'Consultative discovery',
  'C-suite alignment',
  'Business case / ROI',
  'Multi-threading',
  'SaaS & cloud',
  'IoT connectivity',
  'Workflow automation',
  'Salesforce',
  'Gong',
  'LinkedIn Sales Navigator',
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Dave Alexander, home">
          <span className="wordmark-mark">DA</span>
          <span>Dave Alexander</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#approach">Approach</a>
          <a href="#deals">Deal stories</a>
        </nav>
        <a className="button button-small" href="/DaveAlexanderResume.pdf" download>
          Résumé <span aria-hidden="true">↓</span>
        </a>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Mid-market SaaS sales · Dallas–Fort Worth</p>
            <h1>I make the cost of <em>standing still</em> impossible to ignore.</h1>
            <p className="hero-summary">
              Account Executive with 8+ years selling complex SaaS into operationally intensive industries.
              I build executive-backed business cases, displace legacy systems, and create more than half of my own pipeline.
            </p>
            <div className="hero-actions">
              <a className="button" href="#deals">See the deal stories <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="https://linkedin.com/in/davealexander760" target="_blank" rel="noreferrer">
                LinkedIn <Arrow />
              </a>
            </div>
          </div>

          <aside className="hero-brief" aria-label="Career snapshot">
            <div className="brief-label">Current brief</div>
            <div className="brief-role">
              <span>Account Executive</span>
              <strong>Mid-Market</strong>
            </div>
            <dl>
              <div><dt>Current</dt><dd>Samsara</dd></div>
              <div><dt>Specialty</dt><dd>Legacy replacement</dd></div>
              <div><dt>Deal motion</dt><dd>Multi-stakeholder</dd></div>
              <div><dt>Verticals</dt><dd>Physical operations</dd></div>
            </dl>
            <p>Two-time President’s Club · FY24 & FY25</p>
          </aside>
        </section>

        <section className="stats" aria-label="Performance highlights">
          {stats.map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </section>

        <section className="section-wrap section-block" id="experience">
          <header className="section-heading">
            <div><p className="eyebrow">Selected experience</p><h2>A career built around replacement motions.</h2></div>
            <p>From insurance technology to connected operations, the common thread is helping buyers move off systems that still work—just not well enough.</p>
          </header>

          <div className="timeline">
            {roles.map((job) => (
              <article className="role" key={`${job.company}-${job.role}`}>
                <div className="role-company">
                  <img src={job.logo} alt={`${job.company} logo`} />
                  <span>{job.date}</span>
                </div>
                <div className="role-content">
                  <p className="role-title">{job.role}</p>
                  <p className="role-meta">{job.meta}</p>
                  <h3>{job.result}</h3>
                  <p>{job.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="approach" id="approach">
          <div className="section-wrap">
            <header className="section-heading section-heading-light">
              <div><p className="eyebrow">Operating system</p><h2>How I move a complex deal.</h2></div>
              <p>Disciplined enough to forecast. Flexible enough to follow the customer’s actual buying process.</p>
            </header>
            <div className="play-grid">
              {plays.map((play) => (
                <article key={play.number}>
                  <span>{play.number}</span>
                  <h3>{play.title}</h3>
                  <p>{play.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="deals">
          <header className="section-heading">
            <div><p className="eyebrow">Proof in the work</p><h2>Three stories worth asking me about.</h2></div>
            <p>The headline is here. The discovery, politics, qualification decisions, and deal mechanics are better discussed live.</p>
          </header>

          <div className="deal-list">
            {deals.map((deal) => (
              <article className="deal" key={deal.kicker}>
                <div className="deal-value"><span>{deal.kicker}</span><strong>{deal.value}</strong></div>
                <div className="deal-copy"><h3>{deal.title}</h3><p>{deal.body}</p><small>{deal.proof}</small></div>
                <span className="deal-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="interview section-wrap">
          <div className="interview-intro">
            <p className="eyebrow">Why I’m exploring</p>
            <h2>A strong run—and a deliberate next step.</h2>
          </div>
          <div className="interview-copy">
            <p>I’m proud of what I’ve built at Samsara. I’m exploring roles where the product solves an urgent operating problem, the buyer values a rigorous business case, and there is still room to shape the vertical playbook.</p>
            <p>I’m at my best when commercial judgment matters as much as activity volume: finding the signal, building the committee, and creating a credible reason to change.</p>
          </div>
        </section>

        <section className="section-wrap capability-block">
          <p className="eyebrow">Capabilities & tools</p>
          <div className="capabilities">
            {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="about-photo"><img src="/family.jpg" alt="Dave Alexander with his family" loading="lazy" /></div>
          <div className="about-copy">
            <p className="eyebrow">Beyond the number</p>
            <h2>Operator empathy is personal.</h2>
            <p>I built and sold an independent insurance agency alongside my SaaS career. I’ve made software, hiring, and operating decisions with my own money on the line—experience that changed how I sell to owners and operators.</p>
            <p>Based in North Richland Hills, Texas. Outside work: family, WWII military history, aviation, and an unreasonable number of AI workflow experiments.</p>
          </div>
        </section>

        <section className="contact">
          <div className="section-wrap contact-inner">
            <div><p className="eyebrow">Let’s compare notes</p><h2>Looking for a builder who can carry a number?</h2></div>
            <div className="contact-actions">
              <a className="button button-inverse" href="mailto:alexanderdave619@gmail.com">Start a conversation <Arrow /></a>
              <a href="/DaveAlexanderResume.pdf" download>Download résumé <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <span>Dave Alexander · Mid-Market SaaS AE</span>
        <span>North Richland Hills, TX · 2026</span>
      </footer>
    </div>
  )
}
