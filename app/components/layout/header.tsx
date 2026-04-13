import Container from "@/components/ui/container";
import { navLinks } from "@/data/nav";
import Link from "next/link";
import Button from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b border-zinc-200">
      <Container className="flex h-18 items-center justify-between">
        <Link href="/" className="text-lg font-bold uppercase tracking-[3px]">
          Photosnap
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[2px] hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button>Get an invite</Button>
        </div>

        <button
          type="button"
          className="text-sm font-medium md:hidden"
          aria-label="Open menu"
        >
          Menu
        </button>
      </Container>
    </header>
  );
}