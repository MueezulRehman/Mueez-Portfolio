import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Section } from "@/components/section";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/work")({ component: WorkLayout });

function WorkLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/work") {
    return <Outlet />;
  }

  return (
    <SiteShell>
      <Section eyebrow="Selected work" title="Projects ordered by depth, not a random list.">
        <p className="mb-10 max-w-2xl text-muted">
          Mueez is a Laravel/PHP developer who builds real business systems — logistics, SaaS,
          HRM, commerce, education.
        </p>
        <div className="grid gap-5">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="glass rounded-lg p-6 hover:border-primary/40"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl">{p.name}</h3>
                <span className="text-xs uppercase tracking-widest text-primary">{p.tag}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{p.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
