"use client"

import { useState } from "react"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"

interface Project {
  headline: string
  title: string
  description: string
  tools: string[]
  category: string
  details: string[]
  github?: string
  demo?: string
}

const projects: (Project & { badgeColor: string; barColor: string })[] = [
  {
    headline: "7M+ Records · 150K+ Businesses · 5 Cities",
    title: "Customer Behavior Analysis & Data Pipeline (Yelp)",
    description: "Normalized 5 Yelp JSON files into a SQL schema deployed on Azure SQL Server with indexing. Built SQL queries and Tableau dashboards to analyze restaurant and customer trends across 5 U.S. cities, with automated data prep via KNIME workflows.",
    tools: ["SQL", "Azure SQL", "Tableau", "KNIME", "ETL"],
    category: "Data Engineering · BI",
    badgeColor: "bg-blue-100 text-blue-700",
    barColor: "bg-blue-500",
    details: [
      "Normalized ~7M records and 150K+ businesses from JSON into a relational SQL schema.",
      "Deployed to Azure SQL Server with indexing for performant querying.",
      "Built Tableau dashboards analyzing restaurant and customer trends across 5 cities.",
      "Created KPI-ready outputs using KNIME workflows to automate repeatable data prep.",
    ],
  },
  {
    headline: "15–20% Improved Brand Appeal",
    title: "Customer Segmentation & Repositioning Strategy (Infiniti G20)",
    description: "Conducted PCA and regression on 15 brand attributes to evaluate positioning across 3 customer segments. Recommended a repositioning strategy targeting value-conscious performance seekers, with an executive summary linking model results to actionable messaging.",
    tools: ["PCA", "Regression", "Python", "Segmentation"],
    category: "Analytics · Strategy",
    badgeColor: "bg-orange-100 text-orange-700",
    barColor: "bg-orange-500",
    details: [
      "PCA and regression analysis on 15 brand attributes across 3 customer segments.",
      "Identified 'value-conscious performance seekers' as the target repositioning segment.",
      "Recommended strategy projected to improve brand appeal by 15–20%.",
      "Delivered executive-style summary linking model results to positioning and messaging actions.",
    ],
  },
  {
    headline: "30+ KPIs · 20+ Years of Data",
    title: "Sports Performance KPI Dashboard",
    description: "Built an interactive Tableau dashboard benchmarking players across 30+ KPIs including goals, assists, key passes, and minutes. Analyzed 20+ years of performance data to surface peaks, consistency trends, and venue differences.",
    tools: ["Tableau", "SQL", "Data Visualization", "KPI Analysis"],
    category: "BI · Visualization",
    badgeColor: "bg-green-100 text-green-700",
    barColor: "bg-green-500",
    details: [
      "Interactive Tableau dashboard benchmarking players across 30+ KPIs.",
      "Analyzed 20+ years of data to surface peaks and consistency trends.",
      "Season and competition drill-downs for fast comparisons and insight-driven storytelling.",
    ],
    demo: "https://public.tableau.com/app/profile/abdullah.khan",
  },
]

export function ProjectsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground">
            Data Science & Analytics<span className="text-muted-foreground"> Work.</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => {
            const isExpanded = expandedIndex === idx

            return (
              <div
                key={project.title}
                className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-foreground/10"
              >
                {/* Headline badge */}
                <div className="px-5 pt-5">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${project.badgeColor}`}>
                    {project.headline}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 pt-3">
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expand button and links */}
                <div className={`px-5 py-3 flex items-center justify-between ${project.barColor}`}>
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    View Details →
                  </button>
                  <span className="text-xs font-medium text-white/80">{project.category}</span>
                </div>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="border-t border-border bg-secondary/30 p-5 animate-in fade-in-0 duration-200">
                    <ul className="space-y-2">
                      {project.details.map((detail, i) => (
                        <li
                          key={i}
                          className="relative pl-4 text-sm text-muted-foreground before:absolute before:left-0 before:top-[0.55rem] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/40"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {(project.github || project.demo) && (
                      <div className="mt-4 flex items-center gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Github className="h-4 w-4" />
                            GitHub
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
