"use client"

import { useEffect, useState } from "react"
import { ChevronDown, MapPin, Linkedin, Github, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [scrollOpacity, setScrollOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 400)
      setScrollOpacity(opacity)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pt-28 pb-20">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="flex-1 min-w-0">
            {/* Status badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-sm font-medium text-purple-600">Open to Full-Time Opportunities</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Abdullah Eanam Khan
            </h1>

            {/* Title */}
            <p className="mt-3 text-xl text-muted-foreground sm:text-2xl">
              Data Analyst | Business Analytics | BI & Reporting Automation | AI-Enabled Analytics
            </p>

            {/* Location */}
            <div className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>New York, NY</span>
              <span className="text-muted-foreground/50">·</span>
              <span>Open to relocation</span>
            </div>

            {/* Bio paragraph */}
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Data analyst specializing in business analytics, KPI reporting, dashboarding, and reporting 
              automation. I've supported Fortune 500 clients through campaign analytics, audience segmentation, 
              and executive-facing insights using SQL, Python, Tableau, Power BI, and Excel.
            </p>


            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/20"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/20"
              >
                Contact Me
              </a>
            </div>

            {/* Credibility line */}
            <p className="mt-6 text-sm text-muted-foreground/70 italic">
              UIUC Graduate · Published Elsevier Research Co-Author · Course Assistant at Gies College of Business
            </p>

            {/* Social links */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/abdullahkhan1199/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>abdullahkhan1199</span>
              </a>
              <a
                href="https://github.com/abdullahkhan1199"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>abdullahkhan1199</span>
              </a>
              <a
                href="mailto:abdullahkhan011199@gmail.com"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>abdullahkhan011199</span>
              </a>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="hidden lg:block shrink-0 mt-2">
            <div className="relative w-[280px] xl:w-[310px] aspect-[4/5] overflow-hidden rounded-2xl border-2 border-border bg-card shadow-xl">
              <Image
                src="/images/headshot.jpg"
                alt="Abdullah Eanam Khan"
                fill
                sizes="310px"
                className="object-cover object-[center_35%] scale-[1.15]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-300"
        style={{ opacity: scrollOpacity }}
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce text-muted-foreground" />
      </div>
    </section>
  )
}
