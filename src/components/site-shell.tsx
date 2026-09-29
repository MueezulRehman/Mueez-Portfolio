import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { nav, profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-bg text-fg">
      <div className="orb -left-24 top-[-6rem] h-72 w-72 bg-primary/40" />
      <div className="orb right-[-5rem] top-40 h-80 w-80 bg-hair" />
      <div className="orb bottom-20 left-1/3 h-64 w-64 bg-primary/20" />

      <header className="sticky top-0 z-40">
        <div className="glass-strong mx-auto mt-3 max-w-6xl rounded-lg px-4 py-2.5 md:px-5">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="min-h-11 font-display text-lg tracking-tight">
              Mueez
              <span className="text-primary">.</span>
            </Link>
            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg",
                    pathname === item.href && "bg-fg/10 text-fg",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-glass-edge md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {open ? (
            <nav className="mt-2 border-t border-glass-edge pt-2 md:hidden">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block min-h-11 py-2 text-sm text-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
      </header>
      <main className="relative z-10">{children}</main>
      <footer className="relative z-10 mt-20">
        <div className="glass mx-auto mb-6 max-w-6xl rounded-lg px-5 py-8 text-sm text-muted md:flex md:items-center md:justify-between md:px-8">
          <p>
            {profile.legalName} · {profile.location}
          </p>
          <p>
            {profile.freelanceBrand} · Open to Germany · Laravel / PHP / SaaS
          </p>
        </div>
      </footer>
    </div>
  );
}
