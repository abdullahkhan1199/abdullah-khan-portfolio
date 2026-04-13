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
            Analytical Work<span className="text-muted-foreground"> Beyond Industry Projects.</span>
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
                  Synergistic Enhancement of Biogas Production Using a Combination of Solar Energy with Organic and Inorganic Additives
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Bioresource Technology Reports (Elsevier) <span className="text-muted-foreground/50">·</span> 2026
                </p>
              </div>
            </div>

            {/* Highlight chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                Elsevier Publication
              </span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                3× Yield Improvement
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Co-authored a published Elsevier research paper on optimizing biogas production using solar-assisted systems, 
              co-digestion, and process optimization. Contributed to data analysis and result interpretation, with findings 
              demonstrating up to 3× improvement in biogas yield and enhanced process stability.
            </p>

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
