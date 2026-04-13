import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/nav";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex flex-col bg-white md:hidden">
      {/* Top row — mirrors the header height */}
      <div className="flex h-[72px] shrink-0 items-center justify-between px-6">
        <Link href="/" onClick={onClose}>
          <Image
            src="/assets/shared/logo.svg"
            alt="Photosnap"
            width={170}
            height={16}
            className="h-4 w-auto"
          />
        </Link>

        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
        >
          <Image
            src="/assets/shared/close.svg"
            alt=""
            width={20}
            height={20}
            className="h-4 w-5"
          />
        </button>
      </div>

      {/* Nav links — vertically centred in remaining space */}
      <nav className="flex flex-1 flex-col items-center justify-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-[15px] font-bold uppercase tracking-[2.5px] text-black transition hover:opacity-60"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Divider + CTA */}
      <div className="shrink-0 px-8 pb-10">
        <div className="h-px bg-black/25" />
        <Link
          href="#"
          onClick={onClose}
          className="mt-6 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-[12px] font-bold uppercase tracking-[2px] text-white transition hover:bg-black/85"
        >
          Get an invite
        </Link>
      </div>
    </div>
  );
}
