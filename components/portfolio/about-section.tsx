"use client"

import Image from "next/image"
import { GraduationCap, Briefcase, Wrench, Target, Github, Linkedin } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    label: "Currently Studying",
    value: "MS in Technology Management",
    sub: "UIUC · GPA 3.81/4.0",
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    icon: Briefcase,
    label: "Recent Experience",
    value: "Business Practicum Consultant",
    sub: "International Filter Manufacturing · Illinois",
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    icon: Wrench,
    label: "Core Skills",
    value: "SQL · Python · Tableau · Power BI",
    sub: "Excel · Flask · PostgreSQL · A/B Testing",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    icon: Target,
    label: "Looking For",
    value: "Full-time roles in Data Analytics",
    sub: "Business Intelligence · Data Science starting 2025",
    iconBg: "bg-rose-100 text-rose-600",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            About Me
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground">
            Who I Am.<span className="text-muted-foreground"> Learn About Me.</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left - Photo and bio */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              I completed my <span className="text-foreground font-medium">Master of Science in Technology Management</span> at 
              the University of Illinois Urbana-Champaign, where I strengthened my foundation in analytics, data storytelling, 
              and business strategy. My background combines technical execution with business problem-solving, allowing me to 
              translate raw data into decisions that stakeholders can act on.
            </p>

            <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Most recently, I worked as a <span className="text-foreground font-medium">Business Practicum Consultant</span> with 
              International Filter Manufacturing, where I helped automate RFQ tracking by integrating the SAM.gov API into a 
              custom Flask application, reducing manual effort and improving visibility across 7,000+ contracts.
            </p>

            <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Before that, at <span className="text-foreground font-medium">Tredence</span>, I supported Fortune 500 retail and 
              healthcare clients through KPI reporting, campaign measurement, audience segmentation, and executive-facing dashboards. 
              My work focused on helping teams make faster, better business decisions using SQL, Python, Tableau, Excel, and automation tools.
            </p>

            <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              I'm currently seeking full-time opportunities in <span className="text-foreground font-medium">data analytics, 
              business analytics, business intelligence, and reporting-focused roles</span>.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/abdullahkhan1199/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/abdullahkhan1199"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right - Highlight cards */}
          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-[#faf8f5] p-5 transition-all hover:border-foreground/10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.iconBg}`}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {item.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground/70">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
