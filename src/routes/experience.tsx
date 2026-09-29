import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Section } from "@/components/section";
import { jobs } from "@/lib/portfolio-data";

export const Route = createFileRoute("/experience")({ component: ExperiencePage });

function ExperiencePage() {
  return (
    <SiteShell>
      <Section eyebrow="Experience" title="Work history, intern to lead.">
        <div className="space-y-12">
          {jobs.map((job) => (
            <article key={job.company} className="rounded-lg border border-border bg-surface p-6 md:p-8">
              <p className="text-xs uppercase tracking-widest text-primary">{job.period}</p>
              <h2 className="mt-2 font-display text-2xl">{job.company}</h2>
              <p className="mt-1 text-muted">{job.title}</p>
              <ul className="mt-6 space-y-3">
                {job.points.map((p) => (
                  <li key={p} className="border-l border-border pl-4 text-sm leading-relaxed text-muted">
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
