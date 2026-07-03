import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--secondary) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--primary-glow) 0, transparent 50%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <span className="reveal inline-flex items-center rounded-full border border-secondary/40 bg-secondary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
          {eyebrow}
        </span>
        <h1 className="reveal reveal-delay-1 mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="reveal reveal-delay-2 mt-5 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
