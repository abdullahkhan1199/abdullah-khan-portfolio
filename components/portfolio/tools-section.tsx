"use client"

import { Code, BarChart3, Database, Cloud, Settings, Users, Sparkles } from "lucide-react"

const skillCategories = [
  {
    icon: Code,
    title: "Programming & Data Analysis",
    iconBg: "bg-blue-100 text-blue-600",
    tools: ["Python", "SQL", "Pandas", "NumPy", "PySpark"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Reporting",
    iconBg: "bg-green-100 text-green-600",
    tools: ["Tableau", "Power BI", "Excel", "Power Query", "DAX"],
  },
  {
    icon: Database,
    title: "Analytics & Business Impact",
    iconBg: "bg-orange-100 text-orange-600",
    tools: ["KPI Reporting", "Variance Analysis", "A/B Testing", "Customer Segmentation", "Campaign Measurement", "Forecasting"],
  },
  {
    icon: Cloud,
    title: "Operations & Commercial Analytics",
    iconBg: "bg-teal-100 text-teal-600",
    tools: ["Performance Analytics", "Revenue Analysis", "Operational Dashboards", "Root Cause Analysis"],
  },
  {
    icon: Settings,
    title: "Databases & Data Engineering",
    iconBg: "bg-cyan-100 text-cyan-600",
    tools: ["PostgreSQL", "SQL Server", "Azure SQL", "Snowflake", "Databricks", "ETL Pipelines", "API Integration"],
  },
  {
    icon: Users,
    title: "Collaboration & Delivery",
    iconBg: "bg-rose-100 text-rose-600",
    tools: ["Data Storytelling", "Executive Reporting", "Stakeholder Communication", "Git", "Jira", "Confluence"],
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    iconBg: "bg-violet-100 text-violet-600",
    tools: ["Generative AI", "AI-Assisted Analytics", "LLMs", "Python Automation", "Prompt Engineering"],
  },
]

const statsData = [
  { value: "2+", label: "Years Experience", bg: "bg-green-100 text-green-800" },
  { value: "10M+", label: "Records Analyzed", bg: "bg-orange-100 text-orange-800" },
  { value: "30+", label: "KPI Metrics Reported", bg: "bg-yellow-100 text-yellow-800" },
]

export function ToolsSection() {
  return (
    <section id="skills" className="bg-[#faf8f5] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-start">
          {/* Section header */}
          <div className="mb-2">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Skills
            </p>
            <h2 className="mt-2 text-3xl font-bold text-foreground">
              Technical<br />Skills.
            </h2>
            <p className="mt-2 text-muted-foreground">
              Full-stack data analytics capabilities across programming, visualization, cloud, and AI.
            </p>
          </div>

          {/* Stats badges */}
          <div className="flex flex-wrap items-center gap-4">
            {statsData.map((stat) => (
              <div key={stat.label} className={`rounded-xl px-6 py-3 text-center ${stat.bg}`}>
                <span className="text-2xl font-bold block">{stat.value}</span>
                <span className="text-xs font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-white p-6 transition-all hover:border-foreground/10 hover:shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${category.iconBg}`}>
                  <category.icon className="h-4 w-4" />
                </div>
                <h3 className="font-semibold uppercase text-sm tracking-wide text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border bg-white px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
