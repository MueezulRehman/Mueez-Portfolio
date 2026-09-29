import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { nav, profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
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
                  pathname === item.href && "text-fg",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open ? (
          <nav className="border-t border-border px-5 py-3 md:hidden">
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
      </header>
      <main>{children}</main>
      <footer className="mt-20 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            {profile.legalName} · {profile.location}
          </p>
          <p>Open to remote & relocation · Laravel / PHP / MySQL</p>
        </div>
      </footer>
    </div>
  );
}
