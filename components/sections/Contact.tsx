"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { contact } from "@/content/contact";

type FormState = {
  name: string;
  phone: string;
  message: string;
};

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setError(data?.error ?? "Nie udało się wysłać wiadomości.");
        return;
      }

      setStatus("success");
      setForm({ name: "", phone: "", message: "" });
    } catch {
      setStatus("error");
      setError("Błąd połączenia. Spróbuj ponownie.");
    }
  };

  return (
    <section id="kontakt" className="py-16 bg-white">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-black">
              Kontakt
            </h2>
            <p className="mt-2 max-w-2xl text-brand-muted">
              Masz pytania? Napisz lub zadzwoń — odpowiemy i przygotujemy wycenę.
            </p>
          </div>

          <Button
            href={`tel:${contact.phoneHref}`}
            variant="secondary"
            className="w-full md:w-auto"
          >
            Zadzwoń teraz
          </Button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Left: Contact data */}
          <Card className="p-6">
            <h3 className="text-lg font-extrabold text-brand-black">Dane kontaktowe</h3>

            <div className="mt-5 space-y-4 text-sm">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                  Telefon
                </div>
                <a
                  className="mt-1 inline-flex font-extrabold text-brand-blue"
                  href={`tel:${contact.phoneHref}`}
                >
                  {contact.phoneDisplay}
                </a>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                  Email
                </div>
                <a
                  className="mt-1 inline-flex font-extrabold text-brand-blue"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                  Adres
                </div>
                <div className="mt-1 font-semibold text-brand-text">
                  {contact.addressLines.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                  Godziny
                </div>
                <div className="mt-1 space-y-1">
                  {contact.hours.map((h) => (
                    <div
                      key={h.label}
                      className="flex items-center justify-between gap-3 text-brand-text"
                    >
                      <span className="font-semibold">{h.label}</span>
                      <span className="font-semibold text-brand-muted">{h.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-brand-border bg-brand-bg p-4 text-xs text-brand-muted">
              Tip: później możemy dodać mapę Google jako embed (bez spowalniania strony).
            </div>
          </Card>

          {/* Right: Form */}
          <Card className="p-6">
            <h3 className="text-lg font-extrabold text-brand-black">Napisz do nas</h3>
            <p className="mt-2 text-sm text-brand-muted">
              Zostaw kontakt — odezwiemy się najszybciej jak to możliwe.
            </p>

            <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                  Imię
                </span>
                <input
                  className="h-11 rounded-xl border border-brand-border bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-brand-blue/30"
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Np. Jan"
                  autoComplete="given-name"
                  required
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                  Telefon
                </span>
                <input
                  className="h-11 rounded-xl border border-brand-border bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-brand-blue/30"
                  value={form.phone}
                  onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                  placeholder="Np. 123 456 789"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                  Wiadomość
                </span>
                <textarea
                  className="min-h-[120px] rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-blue/30"
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Czego dotyczy zapytanie? (detailing / auto / transport)"
                  required
                />
              </label>

              <Button type="submit" className="w-full">
                {status === "loading" ? "Wysyłanie..." : "Wyślij"}
              </Button>
              {status === "success" && (
                <p className="text-sm font-semibold text-brand-black">
                  Dzięki! Wiadomość została wysłana.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm font-semibold text-red-600">{error}</p>
              )}

              <p className="text-xs text-brand-muted">
                Klikając „Wyślij” akceptujesz kontakt w sprawie zapytania. (Dodamy
                politykę prywatności w stopce.)
              </p>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
