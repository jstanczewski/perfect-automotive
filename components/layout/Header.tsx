"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const nav = [
  { label: "Start", href: "#start" },
  { label: "Usługi", href: "#uslugi" },
  { label: "O nas", href: "#onas" },
  { label: "Flota", href: "#flota" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/70 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <Link href="#start" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-blue/10">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-widest text-brand-black">
              PERFECT
            </div>
            <div className="-mt-1 text-xs font-semibold tracking-[0.2em] text-brand-muted">
              AUTOMOTIVE
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-brand-muted hover:text-brand-black"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+48123456789"
            className="rounded-xl border border-brand-border bg-white px-3 py-2 text-sm font-semibold text-brand-black"
          >
            +48 123 456 789
          </a>
          <Button href="#kontakt">Zapytaj o wycenę</Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-xl border border-brand-border bg-white p-2 md:hidden"
          aria-label="Otwórz menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="#010204"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </Container>

      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <div className="border-t border-brand-border/70 bg-white">
          <Container className="py-3">
            <div className="grid gap-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-brand-muted hover:bg-black/5 hover:text-brand-black"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-2 grid gap-2">
                <Button href="#kontakt" className="w-full">
                  Zapytaj o wycenę
                </Button>
                <Button href="tel:+48123456789" variant="secondary" className="w-full">
                  Zadzwoń
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
