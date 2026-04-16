"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons";

export function Cta() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-[var(--bg-surface)] bg-[var(--bg-elevated)] p-10 sm:p-16"
        >
          <div
            className="pointer-events-none absolute -inset-px -z-10 opacity-70"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 100% 0%, var(--emerald-glow), transparent 60%), radial-gradient(ellipse 60% 80% at 0% 100%, var(--accent-glow), transparent 60%)",
            }}
            aria-hidden
          />
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="max-w-xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Ship with us.
              </h2>
              <p className="mt-3 text-[var(--text-secondary)]">
                Open an issue, file a PR, or just{" "}
                <span className="font-semibold text-[var(--text-primary)]">
                  composer require
                </span>{" "}
                your way into production. The repos are yours too.
              </p>
            </div>
            <a
              href="https://github.com/trysettleup"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[var(--accent-secondary)] px-6 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)] transition-transform hover:scale-[1.02]"
            >
              <GithubIcon className="h-4 w-4" />
              Browse the org on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
