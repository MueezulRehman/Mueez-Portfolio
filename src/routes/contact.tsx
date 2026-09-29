import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Section } from "@/components/section";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <SiteShell>
      <Section eyebrow="Contact" title="Let’s talk about production Laravel work.">
        <p className="max-w-xl text-muted">
          Based in {profile.location}. {profile.availability}.
        </p>
        <dl className="mt-10 max-w-xl space-y-6">
          <div>
            <dt className="text-xs uppercase tracking-widest text-primary">Email</dt>
            <dd className="mt-2 space-y-1">
              {profile.emails.map((e) => (
                <a key={e} href={`mailto:${e}`} className="block min-h-11 text-lg underline-offset-4 hover:underline">
                  {e}
                </a>
              ))}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-primary">Phone</dt>
            <dd className="mt-2">
              <a href={`tel:${profile.phoneDisplay.replace(/\s/g, "")}`} className="text-lg">
                {profile.phoneDisplay}
              </a>
              <p className="mt-1 text-sm text-muted">Local: {profile.phoneLocal}</p>
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-primary">LinkedIn</dt>
            <dd className="mt-2 text-lg">{profile.linkedin}</dd>
          </div>
        </dl>
      </Section>
    </SiteShell>
  );
}
