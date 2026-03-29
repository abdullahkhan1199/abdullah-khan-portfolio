"use client"

import Image from "next/image"

const education = [
  {
    school: "University of Illinois Urbana-Champaign",
    degree: "Master of Science in Technology Management",
    period: "Aug 2024 - Aug 2025",
    location: "IL, USA",
    gpa: "3.81 / 4.0",
    logo: "/images/uiuc-logo.png",
    logoBg: "bg-[#13294B]",
    coursework: [
      "Database Management & Analytics",
      "Data Storytelling",
      "Project Management",
      "Marketing Analytics",
      "Finance / Accounting",
    ],
  },
  {
    school: "Manipal Institute of Technology",
    degree: "Bachelor of Technology in Chemical Engineering",
    period: "Jun 2018 - Jul 2022",
    location: "Manipal, India",
    gpa: "3.5 / 4.0",
    logo: "/images/manipal-logo.png",
    logoBg: "bg-white",
    coursework: [
      "Statistics",
      "Linear Algebra",
      "Calculus",
      "Engineering Economics",
    ],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr,2fr] lg:gap-16">
          {/* Section header */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Education
            </p>
            <h2 className="mt-2 text-3xl font-bold text-foreground">
              Academic<br /><span className="text-muted-foreground">Foundation.</span>
            </h2>
            <p className="mt-2 text-base leading-7 text-muted-foreground">
              Academic background in technology, analytics, and business problem-solving.
            </p>
          </div>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={edu.school}
              className="rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-foreground/10 border-l-4 border-l-purple-400"
            >
              {/* Header */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg ${edu.logoBg} p-1.5`}>
                    <Image
                      src={edu.logo}
                      alt={edu.school}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <p className="mt-1 text-muted-foreground">{edu.school}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {edu.period} <span className="text-muted-foreground/50">·</span> {edu.location}
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1">
                  <span className="text-xs text-green-700">⭐ GPA:</span>
                  <span className="text-sm font-semibold text-green-800">{edu.gpa}</span>
                </div>
              </div>

              {/* Coursework */}
              <div className="border-t border-border p-6 pt-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                  Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>


            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
