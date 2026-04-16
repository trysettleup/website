"use client";

import Link from "next/link";
import { GithubIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--bg-surface)]/60 bg-[var(--bg-deep)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center" aria-label="Settle Up home">
          <Logo height={22} />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#packages"
            className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            Packages
          </a>
          <a
            href="#principles"
            className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            Principles
          </a>
          <a
            href="https://github.com/trysettleup"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            GitHub
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/trysettleup"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--bg-surface)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] hover:border-[var(--accent-secondary)]"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
