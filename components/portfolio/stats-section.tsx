"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "10M+", label: "Customer Records Analyzed", sublabel: "Campaign and retail analytics scale" },
  { value: "80%", label: "Manual Effort Reduced", sublabel: "RFQ workflow automation impact" },
  { value: "7K+", label: "Contracts Tracked", sublabel: "Postgres-backed RFQ system" },
  { value: "30%", label: "Reporting Time Saved", sublabel: "Automation and executive reporting efficiency" },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="border-t border-border bg-card/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            By the Numbers
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground">Impact at scale.</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl font-bold text-foreground lg:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
