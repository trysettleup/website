import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { PackagesGrid } from "@/components/packages-grid";
import { Principles } from "@/components/principles";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <PackagesGrid />
        <Principles />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
