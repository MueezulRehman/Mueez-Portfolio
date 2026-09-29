import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Section } from "@/components/section";
import {
  achievements,
  gtsArchitectureNotes,
  jobs,
  languages,
  profile,
  projects,
  skillGroups,
  strengths,
  summaries,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/archive")({ component: ArchivePage });

function ArchivePage() {
  return (
    <SiteShell>
      <Section
        eyebrow="Complete record"
        title="Every professional detail in one place."
      >
        <p className="max-w-2xl text-muted">
          This page keeps the full profile — personal, skills, history, projects, GTS
          architecture notes — without dropping parts. Use it as a source document.
        </p>
      </Section>

      <Section eyebrow="Personal">
        <dl className="grid gap-4 text-sm md:grid-cols-2">
          <Item k="Legal name" v={profile.legalName} />
          <Item k="Name" v={profile.name} />
          <Item k="Role" v={profile.role} />
          <Item k="Location" v={profile.location} />
          <Item k="Availability" v={profile.availability} />
          <Item k="Emails" v={profile.emails.join(" · ")} />
          <Item k="Phone" v={`${profile.phoneDisplay} / ${profile.phoneLocal}`} />
          <Item k="LinkedIn" v={profile.linkedin} />
          <Item k="Professional start" v={profile.startedProfessional} />
          <Item k="Experience" v={profile.years} />
          <Item k="Learning" v={profile.learning.join(", ")} />
          <Item k="Direction" v={profile.interest} />
        </dl>
      </Section>

      <Section eyebrow="Summaries">
        <div className="space-y-4 text-sm leading-relaxed text-muted">
          {summaries.map((s) => (
            <p key={s.slice(0, 24)}>{s}</p>
          ))}
          <p>{profile.headline}</p>
          <p>{profile.positioning}</p>
        </div>
      </Section>

      <Section eyebrow="Achievements">
        <ul className="space-y-3 text-sm text-muted">
          {achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Skills">
        {skillGroups.map((g) => (
          <div key={g.title} className="mb-6">
            <h3 className="mb-2 text-sm font-medium text-fg">{g.title}</h3>
            <p className="text-sm text-muted">{g.items.join(" · ")}</p>
          </div>
        ))}
        <p className="text-sm text-muted">
          Languages: {languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
        </p>
      </Section>

      <Section eyebrow="Work history">
        {jobs.map((j) => (
          <div key={j.company} className="mb-8">
            <h3 className="font-display text-xl">{j.company}</h3>
            <p className="text-sm text-primary">
              {j.period} · {j.title}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {j.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section eyebrow="Projects">
        {projects.map((p) => (
          <article key={p.slug} className="mb-12 border-t border-border pt-8">
            <h3 className="font-display text-2xl">{p.name}</h3>
            <p className="text-sm text-primary">
              {p.tag} · {p.period} · {p.role}
            </p>
            <p className="mt-3 text-sm text-muted">{p.summary}</p>
            {p.body.map((para) => (
              <p key={para.slice(0, 28)} className="mt-3 text-sm leading-relaxed text-muted">
                {para}
              </p>
            ))}
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {p.bullets.map((b) => (
                <li key={b}>— {b}</li>
              ))}
            </ul>
          </article>
        ))}
      </Section>

      <Section eyebrow="Engineering strengths">
        <p className="mb-3 text-sm text-muted">{strengths.backend}</p>
        <p className="mb-3 text-sm text-muted">{strengths.frontend}</p>
        <p className="mb-3 text-sm text-muted">{strengths.database}</p>
        <p className="text-sm text-muted">{strengths.production}</p>
      </Section>

      <Section eyebrow="GTS architecture notes">
        <ul className="space-y-2 text-sm text-muted">
          {gtsArchitectureNotes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </Section>
    </SiteShell>
  );
}

function Item({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-primary">{k}</dt>
      <dd className="mt-1 text-muted">{v}</dd>
    </div>
  );
}
