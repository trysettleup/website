"use client";

import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute inset-0 hero-glow" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-secondary)]/30 bg-[color-mix(in_oklab,var(--accent-secondary)_12%,transparent)] px-3 py-1 text-xs font-medium text-[var(--accent-secondary)]">
            <Package className="h-3.5 w-3.5" />
            Open source Laravel packages
          </span>
          <h1 className="mt-6 text-balance text-5xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-6xl md:text-7xl">
            Build better{" "}
            <span className="bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] bg-clip-text text-transparent">
              open source
            </span>{" "}
            infrastructure for Laravel.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
            Settle Up ships batteries-included Laravel packages that handle the
            hard parts so you can focus on your product. Every line of source is
            public, MIT-licensed, and built in the open.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#packages"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-[var(--accent-secondary)] px-6 text-sm font-semibold text-white shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_rgba(16,185,129,0.6)] transition-transform hover:scale-[1.02]"
            >
              Explore packages
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://github.com/trysettleup"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[var(--bg-surface)] bg-[var(--bg-elevated)] px-6 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent-secondary)]"
            >
              <GithubIcon className="h-4 w-4" />
              Star on GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]"
        >
          <span>Built on Laravel</span>
          <span className="h-1 w-1 rounded-full bg-[var(--bg-surface)]" />
          <span>MIT licensed</span>
          <span className="h-1 w-1 rounded-full bg-[var(--bg-surface)]" />
          <span>Packagist distributed</span>
          <span className="h-1 w-1 rounded-full bg-[var(--bg-surface)]" />
          <span>Zero vendor lock-in</span>
        </motion.div>
      </div>
    </section>
  );
}
