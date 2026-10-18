import Link from "next/link";
import type { ReactNode } from "react";
import type { Project } from "@/data/projects";
import Devices from "./Devices";
import CursorLabel from "./motion/CursorLabel";
import Reveal from "./motion/Reveal";
import ScrollTilt from "./motion/ScrollTilt";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 font-mono text-xs tracking-widest text-muted uppercase ${className}`}>
      <span className="h-px w-6 bg-accent" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}

// Serif italic accent words, used in headlines across the site.
export function Accent({ children }: { children: ReactNode }) {
  return <span className="font-serif font-normal text-accent italic">{children}</span>;
}

export function ProjectCard({ project, index, large = false }: { project: Project; index: number; large?: boolean }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <CursorLabel label="View case study">
        <div className="overflow-hidden rounded-2xl bg-[radial-gradient(120%_90%_at_50%_0%,#ffffff_0%,var(--color-paper-2)_70%)] px-[9%] pt-[9%] pb-[7%] ring-1 ring-line transition-shadow duration-700 group-hover:shadow-2xl group-hover:shadow-ink/10">
          <ScrollTilt>
            <Devices
              desktop={project.image}
              mobile={project.mobile}
              alt={project.name}
              sizes={large ? "(min-width: 1024px) 900px, 90vw" : "(min-width: 768px) 440px, 90vw"}
              hoverLift
            />
          </ScrollTilt>
        </div>
      </CursorLabel>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="font-mono text-xs tracking-widest text-muted uppercase">
            {String(index + 1).padStart(2, "0")} · {project.industry}
          </p>
          <h3 className="mt-2 text-xl font-medium tracking-tight sm:text-2xl">{project.name}</h3>
          <p className="mt-2 max-w-xl leading-relaxed text-muted">{project.summary}</p>
        </div>
        <span
          aria-hidden="true"
          className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
        >
          →
        </span>
      </div>
    </Link>
  );
}
