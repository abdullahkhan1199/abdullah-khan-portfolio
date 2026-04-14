"use client"

import { ExternalLink, BookOpen } from "lucide-react"

export function PublicationsSection() {
  return (
    <section id="publications" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Research & Publications
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground">
            Peer-Reviewed Research<span className="text-muted-foreground"> Demonstrating Analytical Rigor Beyond Industry Work.</span>
          </h2>
        </div>

        {/* Publication card */}
        <div className="rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-foreground/10">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                <BookOpen className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground leading-snug">
                  Synergistic Enhancement of Biogas Production Using Solar-Thermal Energy and Supplemental Additives
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Energy Reports (Elsevier/ScienceDirect) · Published 2026 · Peer-Reviewed · Open Access
                </p>
              </div>
            </div>

            {/* Highlight chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                Peer-Reviewed
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                ScienceDirect Indexed
              </span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                3× Yield Improvement
              </span>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                Data Curation
              </span>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                Statistical Analysis
              </span>
            </div>

            <ul className="mt-4 space-y-2">
              <li className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-muted-foreground/40">
                Co-authored a peer-reviewed paper investigating a four-pronged optimization strategy for biogas production, combining solar-thermal heating, substrate dilution, and organic/inorganic additives.
              </li>
              <li className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-muted-foreground/40">
                Contributed to methodology design, experimental investigation, data curation, and conceptualization.
              </li>
              <li className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-muted-foreground/40">
                Applied statistical analysis across 12 biodigesters and 70+ days of experimental data to evaluate performance under varying temperature, dilution, and additive conditions.
              </li>
              <li className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-muted-foreground/40">
                Findings demonstrated up to 3× improvement in biogas yield (476 mL/g VS vs. 166 mL/g control), published in an Elsevier-indexed journal.
              </li>
            </ul>

            <div className="mt-5">
              <a
                href="https://www.sciencedirect.com/science/article/pii/S2352484726002301#fig0010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" />
                View Publication
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
