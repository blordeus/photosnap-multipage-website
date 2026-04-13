import Container from "@/app/components/ui/container";
import Link from "next/link";
import Button from "@/app/components/ui/button";
import { navLinks } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="bg-black py-14 text-white">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-6">
            <Link href="/" className="text-lg font-bold uppercase tracking-[3px]">
              Photosnap
            </Link>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-[2px] hover:text-zinc-400"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <Button variant="light">Get an invite</Button>
        </div>

        <p className="text-sm text-zinc-400">Copyright 2026. All Rights Reserved</p>
      </Container>
    </footer>
  );
}