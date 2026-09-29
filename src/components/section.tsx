import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      ) : null}
      {title ? <h2 className="mb-10 max-w-3xl font-display text-3xl md:text-4xl">{title}</h2> : null}
      {children}
    </section>
  );
}
