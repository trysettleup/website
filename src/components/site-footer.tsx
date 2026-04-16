import { GithubIcon } from "@/components/icons";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--bg-surface)]/60 bg-[var(--bg-base)]">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-6 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-start gap-4 text-left">
          <Logo height={28} />
          <p className="max-w-sm text-sm text-[var(--text-secondary)]">
            Open source Laravel infrastructure. Built in public, released under
            MIT.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Settle Up. MIT licensed.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--text-secondary)]">
          <a
            href="https://github.com/trysettleup/visualizations"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-primary)]"
          >
            Visualizations
          </a>
          <a
            href="https://github.com/workflowable/workflowable"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-primary)]"
          >
            Workflowable
          </a>
          <a
            href="https://github.com/trysettleup"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[var(--text-primary)]"
          >
            <GithubIcon className="h-3.5 w-3.5" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
