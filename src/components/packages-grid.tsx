"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, BookOpen, Workflow } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Pkg = {
  name: string;
  tagline: string;
  description: string;
  install: string;
  icon: ReactNode;
  href: string;
  docsHref?: string;
  accent: "emerald" | "cyan";
  features: string[];
};

const packages: Pkg[] = [
  {
    name: "Visualizations",
    tagline: "DataGrids & Charts as PHP classes",
    description:
      "A Laravel package for building data visualizations. Define DataGrids and Charts as PHP classes — the package handles query generation, filtering, sorting, pagination, and schema generation for your front end.",
    install: "composer require settleup/visualizations",
    icon: <BarChart3 className="h-5 w-5" />,
    href: "https://github.com/trysettleup/visualizations",
    docsHref: "https://visualizations.trysettleup.com",
    accent: "emerald",
    features: [
      "Query-backed DataGrids",
      "Composable Chart definitions",
      "Auto filtering, sorting, pagination",
      "Front-end schema generation",
    ],
  },
  {
    name: "Workflowable",
    tagline: "Event-driven workflow engine",
    description:
      "A flexible, event-driven workflow engine for Laravel. Build complex business processes with conditional branching, retry policies, and a complete audit trail powered by event sourcing.",
    install: "composer require workflowable/workflowable",
    icon: <Workflow className="h-5 w-5" />,
    href: "https://github.com/workflowable/workflowable",
    docsHref: "https://workflowable.io",
    accent: "cyan",
    features: [
      "JSON-defined workflows",
      "Retry policies + async queues",
      "CRON + event triggers",
      "Full audit trail via event sourcing",
    ],
  },
];

export function PackagesGrid() {
  return (
    <section id="packages" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Packages, in the open.
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Install from Packagist. Read the source on GitHub. Fork, patch, and
            ship on your own terms.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({ pkg, index }: { pkg: Pkg; index: number }) {
  const accentChip =
    pkg.accent === "emerald"
      ? "text-[var(--accent-secondary)] bg-[color-mix(in_oklab,var(--accent-secondary)_12%,transparent)] border-[var(--accent-secondary)]/30"
      : "text-[var(--accent-primary)] bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)] border-[var(--accent-primary)]/30";

  const hoverGlow =
    pkg.accent === "emerald"
      ? "group-hover:shadow-[0_0_0_1px_var(--accent-secondary)_inset,0_24px_60px_-24px_rgba(16,185,129,0.35)]"
      : "group-hover:shadow-[0_0_0_1px_var(--accent-primary)_inset,0_24px_60px_-24px_rgba(14,165,233,0.35)]";

  const bulletColor =
    pkg.accent === "emerald"
      ? "bg-[var(--accent-secondary)]"
      : "bg-[var(--accent-primary)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative"
    >
      <div
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--bg-surface)] bg-[var(--bg-elevated)] p-8 transition-all duration-300",
          hoverGlow,
        )}
      >
        <div className="flex items-center justify-between">
          <div
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-lg border",
              accentChip,
            )}
          >
            {pkg.icon}
          </div>
          <ArrowUpRight className="h-5 w-5 text-[var(--text-muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--text-primary)]" />
        </div>

        <h3 className="mt-6 text-2xl font-bold tracking-tight text-[var(--text-primary)]">
          {pkg.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-[var(--text-muted)]">
          {pkg.tagline}
        </p>
        <p className="mt-4 text-[var(--text-secondary)]">{pkg.description}</p>

        <ul className="mt-6 grid gap-2 text-sm text-[var(--text-secondary)] sm:grid-cols-2">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span
                className={cn("mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full", bulletColor)}
              />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-lg border border-[var(--bg-surface)] bg-[var(--bg-deep)] p-3 font-mono text-xs text-[var(--text-secondary)]">
          <span className="text-[var(--text-muted)] select-none">$ </span>
          {pkg.install}
        </div>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={pkg.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-md border border-[var(--bg-surface)] bg-[var(--bg-base)] px-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-secondary)]"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            {pkg.docsHref ? (
              <a
                href={pkg.docsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center gap-2 rounded-md border border-[var(--bg-surface)] bg-[var(--bg-base)] px-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-secondary)]"
              >
                <BookOpen className="h-4 w-4" />
                Docs
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
