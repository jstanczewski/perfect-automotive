"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import Image from "next/image";

const nav = [
  { label: "Start", href: "#start" },
  { label: "Usługi", href: "#uslugi" },
  { label: "O nas", href: "#onas" },
  { label: "Flota", href: "#flota" },
  { label: "Kontakt", href: "#kontakt" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Facebook", href: "https://facebook.com/" },
];

function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M17.5 6.5h.01"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  // Facebook
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v3H7v3h3v5h3v-5h3l1-3h-4v-3c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/70 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <Link href="#start" className="flex items-center gap-3">
          <div className="relative h-15 w-15 overflow-hidden rounded-2xl">
            <Image
              src="/images/logo.png"
              alt="Perfect Automotive"
              fill
              priority
              className="object-contain"
            />
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
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border bg-white text-brand-muted hover:text-brand-black"
              >
                <SocialIcon label={s.label} />
              </a>
            ))}
          </div>

          <a
            href="tel:+48123456789"
            className="rounded-xl border border-brand-border bg-white px-3 py-2 text-sm font-semibold text-brand-black"
          >
            +48 123 456 789
          </a>

          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-xl bg-brand-blue px-5 py-3 text-sm font-bold text-white transition hover:shadow-[0_0_0_3px_rgba(1,162,208,0.20)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50"
          >
            Zapytaj o wycenę
          </a>
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
                <a
                  href="#kontakt"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-brand-blue px-5 py-3 text-sm font-bold text-white transition hover:shadow-[0_0_0_3px_rgba(1,162,208,0.20)]"
                  onClick={() => setOpen(false)}
                >
                  Zapytaj o wycenę
                </a>

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
