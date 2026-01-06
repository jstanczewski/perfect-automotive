import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  type?: "button" | "submit";
};

const styles: Record<Variant, string> = {
  primary: "bg-brand-blue text-white hover:shadow-[0_0_0_3px_rgba(1,162,208,0.20)]",
  secondary:
    "bg-white border border-brand-border text-brand-black hover:shadow-[0_10px_30px_rgba(2,6,23,0.08)]",
  ghost: "bg-transparent text-brand-black hover:bg-black/5",
};

export function Button({
  href,
  onClick,
  children,
  className,
  variant = "primary",
  type = "button",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50";

  const cls = cn(base, styles[variant], className);

  if (href)
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    );

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
