import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Section } from "@/components/section";
import {
  achievements,
  education,
  environment,
  freelance,
  germany,
  goals,
  gtsArchitectureNotes,
  jobs,
  languages,
  personal,
  profile,
  projects,
  skillGroups,
  strengths,
  summaries,
  unknowns,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/archive")({ component: ArchivePage });

function ArchivePage() {
  return (
    <SiteShell>
      <Section eyebrow="Complete record" title="Every professional detail in one place.">
        <p className="max-w-2xl text-muted">
          Full identity from all conversations — career, SaaS, GTS, Germany, education, personal
          projects, and notes that still need confirmation. Nothing dropped.
        </p>
      </Section>

      <Section eyebrow="Personal">
        <dl className="glass grid gap-4 rounded-lg p-6 text-sm md:grid-cols-2">
          <Item k="Legal name" v={profile.legalName} />
          <Item k="Name" v={profile.name} />
          <Item k="Role" v={profile.role} />
          <Item k="Aliases" v={profile.aliases.join(" · ")} />
          <Item k="Location" v={profile.locations.join(" · ")} />
          <Item k="Age note" v={profile.ageNote} />
          <Item k="Availability" v={profile.availability} />
          <Item k="Emails" v={profile.emails.join(" · ")} />
          <Item k="Phone" v={`${profile.phoneDisplay} / ${profile.phoneLocal}`} />
          <Item k="LinkedIn" v={profile.linkedin} />
          <Item k="Website" v={profile.website} />
          <Item k="Freelance brand" v={profile.freelanceBrand} />
          <Item k="Professional start" v={profile.startedProfessional} />
          <Item k="Experience" v={profile.years} />
          <Item k="Learning" v={profile.learning.join(", ")} />
          <Item k="Direction" v={profile.interest} />
          <Item k="CV headline" v={profile.cvHeadline} />
        </dl>
      </Section>

      <Section eyebrow="Summaries">
        <div className="glass space-y-4 rounded-lg p-6 text-sm leading-relaxed text-muted">
          {summaries.map((s) => (
            <p key={s.slice(0, 24)}>{s}</p>
          ))}
        </div>
      </Section>

      <Section eyebrow="Education">
        <ul className="glass space-y-3 rounded-lg p-6 text-sm text-muted">
          {education.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Achievements">
        <ul className="glass space-y-3 rounded-lg p-6 text-sm text-muted">
          {achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Skills">
        <div className="glass rounded-lg p-6">
          {skillGroups.map((g) => (
            <div key={g.title} className="mb-6">
              <h3 className="mb-2 text-sm font-medium text-fg">{g.title}</h3>
              <p className="text-sm text-muted">{g.items.join(" · ")}</p>
            </div>
          ))}
          <p className="text-sm text-muted">
            Languages: {languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
          </p>
        </div>
      </Section>

      <Section eyebrow="Work history">
        {jobs.map((j) => (
          <div key={j.company} className="glass mb-4 rounded-lg p-6">
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
          <article key={p.slug} className="glass mb-6 rounded-lg p-6">
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

      <Section eyebrow="Germany plan">
        <div className="glass rounded-lg p-6 text-sm text-muted">
          <p>{germany.destination}</p>
          <p className="mt-3">{germany.roles.join(" · ")}</p>
          <ul className="mt-4 space-y-2">
            {germany.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section eyebrow="Freelance">
        <div className="glass rounded-lg p-6 text-sm text-muted">
          <p className="text-fg">{freelance.brand}</p>
          <ul className="mt-3 space-y-2">
            {freelance.fiverr.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section eyebrow="Environment">
        <dl className="glass grid gap-3 rounded-lg p-6 text-sm md:grid-cols-2">
          {environment.map((e) => (
            <Item key={e.item} k={e.item} v={e.detail} />
          ))}
        </dl>
      </Section>

      <Section eyebrow="Goals">
        <ul className="glass space-y-2 rounded-lg p-6 text-sm text-muted">
          {goals.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Personal / creative">
        <ul className="glass space-y-2 rounded-lg p-6 text-sm text-muted">
          {personal.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Engineering strengths">
        <div className="glass space-y-3 rounded-lg p-6 text-sm text-muted">
          <p>{strengths.backend}</p>
          <p>{strengths.frontend}</p>
          <p>{strengths.database}</p>
          <p>{strengths.production}</p>
          <p>{strengths.product}</p>
        </div>
      </Section>

      <Section eyebrow="GTS architecture notes">
        <ul className="glass space-y-2 rounded-lg p-6 text-sm text-muted">
          {gtsArchitectureNotes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Still to confirm">
        <ul className="glass space-y-2 rounded-lg p-6 text-sm text-muted">
          {unknowns.map((n) => (
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
