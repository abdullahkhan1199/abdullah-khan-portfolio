"use client"

import { useEffect, useRef, useState } from "react"

const chapters = [
  {
    period: "2018 — 2022",
    label: "CHAPTER 1",
    title: "Engineering Foundations",
    subtitle: "B.Tech Chemical Engineering",
    company: "Manipal Institute of Technology · India",
    description:
      "Built analytical foundations through coursework in Linear Algebra, Calculus, Statistics, and Engineering Economics. Developed problem-solving mindset and quantitative skills that would later translate to data analytics.",
    badges: ["Statistics", "Linear Algebra", "Engineering Economics"],
  },
  {
    period: "2022 — 2024",
    label: "CHAPTER 2",
    title: "Analytics Consulting at Tredence",
    subtitle: "Business Analyst",
    company: "Tredence Inc · Bengaluru, India",
    description:
      "Supported Fortune 500 retail and healthcare clients through campaign measurement, KPI reporting, dashboarding, and executive analysis. Built measurement frameworks on large customer datasets, contributed to audience segmentation and A/B testing workflows, and automated recurring reporting processes.",
    badges: ["10M+ Customers", "30% Time Saved", "Fortune 500 Clients"],
  },
  {
    period: "2024 — 2025",
    label: "CHAPTER 3",
    title: "Graduate Studies at UIUC",
    subtitle: "Masters in Technology Management",
    company: "University of Illinois Urbana-Champaign",
    description:
      "Strengthened my foundation in database management, data storytelling, project management, and business strategy while developing a more business-facing approach to analytics and decision support.",
    badges: ["UIUC", "Database Analytics", "Data Storytelling"],
  },
  {
    period: "2025 — NOW",
    label: "CHAPTER 4",
    title: "Practicum Consulting & Automation",
    subtitle: "Business Practicum Consultant",
    company: "International Filter Manufacturing · Illinois",
    description:
      "Built an RFQ tracking solution by integrating the SAM.gov API with a Flask and PostgreSQL application. Reduced manual effort, improved contract visibility, and created a more scalable workflow for opportunity tracking and client adoption.",
    badges: ["80% Effort Reduced", "7K+ Contracts", "100% Adoption"],
  },
]

export function JourneySection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleItems])

  return (
    <section id="journey" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Journey
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground">
            Professional Journey. Built through analytics, strategy, and execution.
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-12">
            {chapters.map((chapter, i) => {
              const isLeft = i % 2 === 0
              const isVisible = visibleItems.includes(i)

              return (
                <div
                  key={chapter.period}
                  ref={(el) => { itemRefs.current[i] = el }}
                  data-index={i}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <div
                    className={`grid gap-8 md:grid-cols-2 md:gap-16 ${
                      isLeft ? "" : "md:direction-rtl"
                    }`}
                  >
                    {/* Content side */}
                    <div className={`${isLeft ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16"}`}>
                      <span className="inline-block rounded-full bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                        {chapter.label}
                      </span>
                      <p className="mt-3 text-sm font-semibold text-foreground">{chapter.period}</p>
                      <h3 className="mt-1 text-xl font-bold text-foreground">{chapter.title}</h3>
                      <p className="text-muted-foreground">{chapter.subtitle}</p>
                      <p className="mt-1 text-sm text-muted-foreground/70">{chapter.company}</p>
                      <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                        {chapter.description}
                      </p>
                      <div className={`mt-4 flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                        {chapter.badges.map((badge) => (
                          <span
                            key={badge}
                            className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 hidden h-3 w-3 rounded-full border-2 border-foreground bg-background md:left-1/2 md:block md:-translate-x-1/2" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
