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
      "Supported analytics initiatives for enterprise clients including Walmart, Walgreens, and 7-Eleven across campaign measurement, KPI reporting, and audience segmentation.",
      "Built a measurement framework to evaluate campaign effectiveness and visualize KPIs via Tableau dashboards, analyzing behavior of 10M+ customers for Walgreens.",
      "Designed match panel logic using K-Means clustering to generate statistically sound test vs. control groups for marketing experiments.",
      "Streamlined SQL workflows using Python (Pandas), reducing manual reporting time by 15% across campaign analytics processes.",
      "Automated PowerPoint reporting with Python-pptx, saving 30% time on recurring deck creation and enhancing stakeholder visibility.",
      "Partnered with strategy and analytics leads to translate analysis into recommendations, decision memos, and executive dashboards.",
    ],
    companyDesc: "Global data science and AI solutions company serving Fortune 500 clients in retail, CPG, healthcare, and financial services.",
    clients: [
      { name: "Walmart", logo: "/images/walmart-logo.svg" },
      { name: "Walgreens", logo: "/images/walgreens-logo.svg" },
      { name: "7-Eleven", logo: "/images/7eleven-logo.svg" },
    ],
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
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
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
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Volunteer</h3>
                  <p className="text-xs text-muted-foreground">Saayam For All</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Contributed to a mission-driven platform connecting individuals in need with volunteers and organizations. Observed how structured data, request tracking, and categorization improve coordination and service delivery.
              </p>
              <p className="mt-3 text-xs text-muted-foreground/70">Oct 2025 – Present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
