import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
};

export default function Button({
  href = "#",
  children,
  className,
  variant = "dark",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[2px] transition",
        variant === "dark"
          ? "bg-black px-6 py-3 text-white hover:bg-zinc-700"
          : "bg-white px-6 py-3 text-black hover:bg-zinc-200",
        className
      )}
    >
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}