import Link from "next/link";
import { buttonClass } from "@/components/button";
import { Accent, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-4 text-5xl font-medium tracking-tight">
        This page wandered <Accent>off</Accent>
      </h1>
      <Link href="/" className={`${buttonClass("ink")} mt-10`}>
        Back home
      </Link>
    </Container>
  );
}
