import Container from "@/app/components/ui/container";
import { navLinks } from "@/data/nav";
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/shared/logo.svg"
            alt="Photosnap"
            width={170}
            height={16}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm-bold hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button>Get an invite</Button>
        </div>

        <button className="md:hidden">Menu</button>
      </Container>
    </header>
  );
}