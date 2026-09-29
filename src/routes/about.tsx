import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Section } from "@/components/section";
import { languages, profile, strengths, summaries } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SiteShell>
      <Section eyebrow="About" title={profile.legalName}>
        <p className="max-w-2xl text-lg text-muted">{profile.role}</p>
        <p className="mt-3 text-sm text-muted">
          {profile.location} · {profile.availability}
        </p>
        <div className="mt-10 max-w-3xl space-y-5 text-muted">
          {summaries.map((s) => (
            <p key={s.slice(0, 32)}>{s}</p>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Currently learning {profile.learning.join(" and ")}. {profile.interest}
        </p>
      </Section>
      <Section eyebrow="Strengths" title="How the work actually looks.">
        <dl className="grid gap-8 md:grid-cols-2">
          {(
            [
              ["Backend", strengths.backend],
              ["Frontend", strengths.frontend],
              ["Database", strengths.database],
              ["Deployment / production", strengths.production],
            ] as const
          ).map(([k, v]) => (
            <div key={k} className="rounded-lg border border-border bg-surface p-6">
              <dt className="text-xs uppercase tracking-widest text-primary">{k}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>
      <Section eyebrow="Languages">
        <ul className="flex flex-wrap gap-3">
          {languages.map((l) => (
            <li key={l.name} className="rounded-md border border-border px-4 py-2 text-sm">
              {l.name} — {l.level}
            </li>
          ))}
        </ul>
      </Section>
    </SiteShell>
  );
}
