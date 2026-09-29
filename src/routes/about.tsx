import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Section } from "@/components/section";
import {
  education,
  germany,
  languages,
  profile,
  strengths,
  summaries,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SiteShell>
      <Section eyebrow="About" title={profile.legalName}>
        <div className="glass rounded-lg p-6 md:p-8">
          <p className="max-w-2xl text-lg text-muted">{profile.role}</p>
          <p className="mt-2 text-sm text-muted">{profile.aliases.join(" · ")}</p>
          <p className="mt-3 text-sm text-muted">
            {profile.location} · {profile.ageNote} · {profile.availability}
          </p>
          <div className="mt-8 max-w-3xl space-y-5 text-muted">
            {summaries.map((s) => (
              <p key={s.slice(0, 32)}>{s}</p>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Currently learning {profile.learning.join(", ")}. {profile.interest}
          </p>
        </div>
      </Section>
      <Section eyebrow="Strengths" title="How the work actually looks.">
        <dl className="grid gap-4 md:grid-cols-2">
          {(
            [
              ["Backend", strengths.backend],
              ["Frontend", strengths.frontend],
              ["Database", strengths.database],
              ["Deployment / production", strengths.production],
              ["Product thinking", strengths.product],
            ] as const
          ).map(([k, v]) => (
            <div key={k} className="glass rounded-lg p-6">
              <dt className="text-xs uppercase tracking-widest text-primary">{k}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>
      <Section eyebrow="Germany" title="Where this is going.">
        <div className="glass rounded-lg p-6">
          <p className="text-muted">{germany.destination}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {germany.roles.map((r) => (
              <li key={r} className="rounded-md border border-glass-edge px-3 py-1 text-xs">
                {r}
              </li>
            ))}
          </ul>
          <ul className="mt-5 space-y-2 text-sm text-muted">
            {germany.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </Section>
      <Section eyebrow="Education">
        <ul className="glass space-y-3 rounded-lg p-6 text-sm text-muted">
          {education.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </Section>
      <Section eyebrow="Languages">
        <ul className="flex flex-wrap gap-3">
          {languages.map((l) => (
            <li key={l.name} className="glass rounded-md px-4 py-2 text-sm">
              {l.name} — {l.level}
            </li>
          ))}
        </ul>
      </Section>
    </SiteShell>
  );
}
