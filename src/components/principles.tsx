"use client";

import { motion } from "framer-motion";
import {
  BookOpenCheck,
  GitPullRequestArrow,
  ScrollText,
  Unlock,
} from "lucide-react";
import type { ReactNode } from "react";

type Principle = { icon: ReactNode; title: string; body: string };

const principles: Principle[] = [
  {
    icon: <Unlock className="h-5 w-5" />,
    title: "MIT, forever",
    body: "Every package ships under the MIT license. No relicensing, no open-core gotchas, no SaaS lock-in.",
  },
  {
    icon: <GitPullRequestArrow className="h-5 w-5" />,
    title: "Developed in public",
    body: "Every commit, issue, and design discussion happens on GitHub. Roadmaps aren't secret — they're pull requests away.",
  },
  {
    icon: <BookOpenCheck className="h-5 w-5" />,
    title: "Docs are first-class",
    body: "Each package has a dedicated docs site. If something isn't documented, that's a bug.",
  },
  {
    icon: <ScrollText className="h-5 w-5" />,
    title: "Semver, seriously",
    body: "Breaking changes cost you time. We guard the public API with tests, changelogs, and honest versioning.",
  },
];

export function Principles() {
  return (
    <section
      id="principles"
      className="relative border-y border-[var(--bg-surface)]/60 bg-[var(--bg-base)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-primary)]/30 bg-[color-mix(in_oklab,var(--accent-primary)_10%,transparent)] px-3 py-1 text-xs font-medium text-[var(--accent-primary)]">
            Our principles
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Open source isn&apos;t a marketing bullet.
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            It&apos;s how we build. It&apos;s how we&apos;ve always built. Here&apos;s
            what that means in practice.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-[var(--bg-surface)] bg-[var(--bg-elevated)] p-6"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--accent-secondary)]/30 bg-[color-mix(in_oklab,var(--accent-secondary)_10%,transparent)] text-[var(--accent-secondary)]">
                {p.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--text-primary)]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
