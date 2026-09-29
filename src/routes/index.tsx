import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Section } from "@/components/section";
import {
  achievements,
  jobs,
  metrics,
  profile,
  projects,
  skillGroups,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 md:px-8 md:pt-24">
        <div className="glass rounded-lg p-6 md:p-10">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Laravel · PHP · SaaS · Logistics
          </p>
          <h1 className="max-w-4xl font-display text-4xl leading-[1.12] md:text-6xl">
            {profile.legalName}
          </h1>
          <p className="mt-4 font-display text-xl text-muted md:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {profile.headline}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{profile.positioning}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              {profile.location}
            </span>
            <span className="h-1 w-1 rounded-full bg-hair" />
            <span>{profile.availability}</span>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-fg"
            >
              View work <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="glass inline-flex min-h-11 items-center rounded-md px-5 text-sm"
            >
              Contact
            </Link>
            <Link
              to="/archive"
              className="inline-flex min-h-11 items-center rounded-md px-5 text-sm text-muted"
            >
              Full profile
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="glass rounded-lg px-5 py-8">
              <p className="font-display text-2xl text-primary md:text-3xl">{m.value}</p>
              <p className="mt-2 text-sm text-muted">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Section eyebrow="Featured" title="Work that proves the profile.">
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group glass rounded-lg p-6 transition-colors hover:border-primary/40"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-primary">{p.tag}</p>
              <h3 className="mt-3 font-display text-2xl">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm text-fg">
                Case study <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Experience" title="From intern to independent SaaS.">
        <ol className="space-y-4">
          {jobs.map((job) => (
            <li key={job.company} className="glass rounded-lg p-5">
              <p className="text-xs uppercase tracking-widest text-primary">{job.period}</p>
              <h3 className="mt-1 font-display text-xl">{job.company}</h3>
              <p className="text-sm text-muted">{job.title}</p>
            </li>
          ))}
        </ol>
        <Link to="/experience" className="mt-8 inline-flex items-center gap-2 text-sm text-primary">
          Full timeline <ArrowRight size={14} />
        </Link>
      </Section>

      <Section eyebrow="Skills" title="A stack used on live business software.">
        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="glass rounded-lg p-5">
              <h3 className="mb-3 text-sm font-medium uppercase tracking-widest text-muted">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className="rounded-md border border-glass-edge px-2.5 py-1 text-xs text-fg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Results" title="Facts only — no inflated numbers.">
        <ul className="glass max-w-3xl space-y-4 rounded-lg p-6 text-muted">
          {achievements.map((a) => (
            <li key={a} className="border-l border-primary/50 pl-4">
              {a}
            </li>
          ))}
        </ul>
      </Section>
    </SiteShell>
  );
}
