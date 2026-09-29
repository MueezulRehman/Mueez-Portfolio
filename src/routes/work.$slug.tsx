import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { gtsArchitectureNotes, projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/work/$slug")({
  component: ProjectPage,
});

function ProjectPage() {
  const { slug } = Route.useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    throw notFound();
  }

  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <Link to="/work" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted">
          <ArrowLeft size={16} /> All work
        </Link>
        <div className="glass mt-8 rounded-lg p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-primary">{project.tag}</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">{project.name}</h1>
          <p className="mt-4 text-sm text-muted">
            {project.role} · {project.period}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="rounded-md border border-glass-edge px-2 py-1 text-xs">
                {s}
              </span>
            ))}
          </div>
          <p className="mt-8 text-lg leading-relaxed text-muted">{project.summary}</p>
          <div className="mt-10 space-y-5 text-[0.95rem] leading-relaxed text-muted">
            {project.body.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
          <h2 className="mt-12 font-display text-2xl">Scope in detail</h2>
          <ul className="mt-5 space-y-3">
            {project.bullets.map((b) => (
              <li key={b} className="border-l border-primary/40 pl-4 text-sm leading-relaxed text-muted">
                {b}
              </li>
            ))}
          </ul>
          {project.slug === "gts" ? (
            <>
              <h2 className="mt-12 font-display text-2xl">Architecture rules from the live system</h2>
              <ul className="mt-5 space-y-3">
                {gtsArchitectureNotes.map((n) => (
                  <li key={n} className="text-sm leading-relaxed text-muted">
                    {n}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </article>
    </SiteShell>
  );
}
