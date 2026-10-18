import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";

// Client logos drifting slowly sideways, faded at both edges and paused on
// hover. The list is rendered twice so the loop is seamless; the copy is
// hidden from screen readers. Static for reduced motion (see globals.css).
export default function LogoMarquee() {
  const row = (copy: boolean) => (
    <ul className="flex shrink-0 items-center gap-16 pr-16 sm:gap-24 sm:pr-24" aria-hidden={copy || undefined}>
      {PROJECTS.map((p) => (
        <li key={p.slug}>
          <Link
            href={`/work/${p.slug}`}
            className="group flex h-14 items-center"
            title={p.name}
            tabIndex={copy ? -1 : undefined}
          >
            <Image
              src={p.logo}
              alt={copy ? "" : p.name}
              width={180}
              height={56}
              className="max-h-12 w-auto object-contain opacity-55 mix-blend-multiply grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-14"
            />
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee group/marquee relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      {/* Solid background inside the masked group, so the logos' white
          backgrounds can multiply away against it. */}
      <div className="marquee-track flex bg-[#fbf9f6]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
