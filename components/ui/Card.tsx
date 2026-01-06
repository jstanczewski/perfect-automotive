import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: Props) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-brand-border bg-brand-card shadow-[0_10px_30px_rgba(2,6,23,0.06)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
