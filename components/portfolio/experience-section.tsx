"use client"

import Image from "next/image"

const experiences = [
  {
    number: "01",
    role: "Business Practicum Consultant",
    company: "International Filter Manufacturing",
    logo: "/images/ifm-logo.svg",
    period: "May 2025 - Aug 2025",
    location: "Litchfield, Illinois",
    badges: ["80% Effort Reduced", "7K+ Contracts", "100% Adoption"],
    bullets: [
      "Automated RFQ tracking by integrating SAM.gov API with a custom Flask web app, reducing manual effort by 80% and improving bid response time.",
      "Designed a Postgres-backed system with NAICS/PSC/SIC filters, reducing search time by 5+ hours/week across 7,000+ contracts.",
      "Deployed a live multi-user dashboard with authentication, export features, and daily data updates, enabling real-time contract visibility.",
      "Collaborated with cross-functional teams to align the tool with IFM's sourcing process; achieved 100% adoption post-client testing.",
    ],
    companyDesc: "Leading manufacturer of industrial filters and filtration systems serving automotive, aerospace, and manufacturing sectors.",
    clients: [],
  },
  {
    number: "02",
    role: "Business Analyst",
    company: "Tredence Inc",
    logo: "/images/tredence-logo.svg",
    period: "Jul 2022 - Jul 2024",
    location: "Bengaluru, India",
    badges: ["10M+ Customers", "30% Time Saved", "Fortune 500"],
    bullets: [
      "Supported analytics initiatives for Fortune 500 retail and pharmacy clients across campaign measurement, KPI reporting, and audience segmentation.",
      "Built a measurement framework to evaluate campaign effectiveness and visualize KPIs via Tableau dashboards, analyzing behavior of 10M+ customers for a leading U.S. pharmacy retailer.",
      "Designed match panel logic using K-Means clustering to generate statistically sound test vs. control groups for marketing experiments.",
      "Streamlined SQL workflows using Python (Pandas), reducing manual reporting time by 15% across campaign analytics processes.",
      "Automated PowerPoint reporting with Python-pptx, saving 30% time on recurring deck creation and enhancing stakeholder visibility.",
      "Partnered with strategy and analytics leads to translate analysis into recommendations, decision memos, and executive dashboards.",
    ],
    companyDesc: "Global data science and AI solutions company serving Fortune 500 clients in retail, CPG, healthcare, and financial services.",
    clients: [],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Experience
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground">
            Where I've Built<span className="text-muted-foreground"> Real Impact.</span>
          </h2>
        </div>

        {/* Experience cards */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-foreground/10"
            >
              {/* Header */}
              <div className="p-6 pb-0">
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                    <Image src={exp.logo} alt={exp.company} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-muted-foreground">
                      {exp.company} <span className="text-muted-foreground/50">·</span> {exp.period} <span className="text-muted-foreground/50">·</span> {exp.location}
                    </p>
                  </div>
                </div>

                {/* Badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bullets */}
              <div className="p-6 pt-4">
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-muted-foreground/40"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clients */}
              {exp.clients.length > 0 && (
                <div className="border-t border-border px-6 py-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                    Clients Served
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    {exp.clients.map((client) => (
                      <div key={client.name} className="flex items-center gap-3 rounded-xl border border-border bg-secondary/50 px-4 py-2.5">
                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                          <Image src={client.logo} alt={client.name} fill className="object-cover" />
                        </div>
                        <span className="text-sm font-semibold text-foreground">{client.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Company description */}
              <div className="border-t border-border bg-secondary/30 px-6 py-4">
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{exp.company}</span> — {exp.companyDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Experience */}
        <div className="mt-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
            Additional Experience
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-blue-100">
                  <Image src="/images/gies-logo.png" alt="Gies College of Business" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Course Assistant</h3>
                  <p className="text-xs text-muted-foreground">Gies College of Business, UIUC</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Supported graduate-level business courses through grading, rubric-based evaluation, and course operations with a focus on consistency, accuracy, and timely coordination.
              </p>
              <p className="mt-3 text-xs text-muted-foreground/70">Mar 2026 – Present</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-teal-100">
                  <Image src="/images/saayam-logo.png" alt="Saayam For All" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Data Analyst & Project Lead</h3>
                  <p className="text-xs text-muted-foreground">Saayam For All</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                <li className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55rem] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/40">
                  Leading analytics for an early-stage social impact platform serving 2,000+ users across the US.
                </li>
                <li className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55rem] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/40">
                  Built dashboards tracking request fulfillment KPIs (response time, completion rate, geographic coverage).
                </li>
                <li className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55rem] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/40">
                  Analyzed demand-supply patterns to improve volunteer-to-request matching.
                </li>
                <li className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55rem] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/40">
                  Standardized data pipelines across user, volunteer, and NGO sources to ensure reporting accuracy.
                </li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground">Tableau</span>
                <span className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground">Python</span>
                <span className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground">KPI Dashboards</span>
                <span className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground">Data Cleaning</span>
                <span className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground">Jira</span>
              </div>
              <p className="mt-3 text-xs text-muted-foreground/70">Oct 2025 – Present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
