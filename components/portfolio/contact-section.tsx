"use client"

import { Mail, Linkedin, Github, Phone, MapPin, ExternalLink } from "lucide-react"

const links = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:abdullahkhan011199@gmail.com",
    display: "abdullahkhan011199@gmail.com",
    iconBg: "bg-green-100 text-green-600",
  },
  {
    icon: Phone,
    label: "Phone",
    href: "tel:+14479025573",
    display: "(447) 902-5573",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: MapPin,
    label: "Location",
    href: "#",
    display: "New York, NY, USA",
    iconBg: "bg-rose-100 text-rose-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdullahkhan1199/",
    display: "linkedin.com/in/abdullahkhan1199",
    iconBg: "bg-purple-100 text-purple-600",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#0f172a] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr,1fr] lg:gap-16 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-slate-400">
              Contact
            </p>
            <h2 className="mt-2 text-4xl font-bold text-white">
              Let&apos;s<br /><span className="text-slate-500">Connect.</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Actively looking for full-time opportunities in Data Analytics, Business Intelligence, 
              and reporting-focused roles. Let&apos;s talk about how I can bring value to your team.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://www.linkedin.com/in/abdullahkhan1199/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/abdullahkhan1199" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:abdullahkhan011199@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between rounded-xl border border-slate-700/50 bg-slate-800/50 p-4 transition-all hover:border-slate-600"
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${link.iconBg}`}>
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">{link.label}</p>
                    <p className="text-sm font-medium text-white">{link.display}</p>
                  </div>
                </div>
                {link.href !== "#" && (
                  <ExternalLink className="h-4 w-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
