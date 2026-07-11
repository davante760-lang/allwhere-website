import { FadeIn, SectionTitle } from './AnimatedSection'

const rows = [
  ['FY23', 'ramp', '65%', '85%', '118%', '136%', '101%'],
  ['FY24', 'year 2', '100%', '108%', '122%', '134%', '116%'],
  ['FY25', 'year 3', '105%', '110%', '118%', '147%', '120%'],
  ['FY26', 'in progress', '108%', '98%', '103% fcst', '103% fcst', '103% pace'],
]

export default function QuarterlyAttainment() {
  return (
    <section id="attainment" className="py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="PERFORMANCE DETAIL" title="Quarterly Attainment by FY" />
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="text-[14.5px] leading-[1.75] text-text-secondary max-w-[720px] mb-7">
            Recruiters ask “walk me through your years quarter by quarter” to test whether the résumé
            math holds. FY23 finished at 101% while ramping; FY24 at 116%; FY25 at 120% — a 118%
            two-year average. FY26 is currently pacing at 103%.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="overflow-x-auto rounded-xl border border-border bg-surface-1" tabIndex="0">
            <table className="w-full min-w-[700px] border-collapse text-[13px]">
              <caption className="sr-only">Quarterly quota attainment from fiscal year 2023 through fiscal year 2026</caption>
              <thead>
                <tr className="bg-surface-3 text-text-primary">
                  {['FY', 'Q1', 'Q2', 'Q3', 'Q4', 'Full year'].map((heading, index) => (
                    <th key={heading} scope="col" className={`px-4 py-3.5 font-medium border-b border-border ${index === 0 ? 'text-left' : 'text-center'}`}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row[0]} className="border-b border-border-light last:border-b-0 even:bg-surface-2/40">
                    <th scope="row" className="px-4 py-3.5 text-left font-medium text-text-primary whitespace-nowrap">
                      {row[0]} <span className="text-text-tertiary font-normal">({row[1]})</span>
                    </th>
                    {row.slice(2, 6).map((value, index) => <td key={`${row[0]}-${index}`} className="px-4 py-3.5 text-center text-text-secondary whitespace-nowrap">{value}</td>)}
                    <td className="px-4 py-3.5 text-center font-semibold text-teal whitespace-nowrap">{row[6]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
