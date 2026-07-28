import { MapPin } from "lucide-react";
import Hero from "@/components/hero";
import { About, Skills, Projects, Extras, Contact } from "@/components/sections";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Extras />
      <Contact />
      <footer className="border-t border-[var(--line)] px-5 py-8">
        <div className="container flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-[var(--muted)]">
          <p>© {new Date().getFullYear()} Yosef Mekonnen.</p>
          <p className="flex items-center gap-2">
            <MapPin size={15} aria-hidden="true" />
            Charlottetown, PE, Canada
          </p>
          <p>
            Designed and built with Next.js, TypeScript, Tailwind CSS, and
            Motion.
          </p>
        </div>
      </footer>
    </main>
  );
}
