import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

export function Hero() {
  return (
    <section id="start" className="scroll-mt-12 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-brand-bg" />
      <div className="absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-blue/10 blur-3xl" />

      <Container className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-3 py-1 text-xs font-bold text-brand-muted">
            <span className="h-2 w-2 rounded-full bg-brand-blue" />
            Detailing • Dealer • Autolaweta
          </p>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-brand-black sm:text-5xl">
            Perfect <span className="text-brand-blue">Automotive</span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Kompleksowa obsługa motoryzacyjna: detailing premium, sprzedaż aut używanych
            oraz transport i wynajem autolawet.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="#uslugi">Sprawdź usługi</Button>
            <Button href="#kontakt" variant="secondary">
              Skontaktuj się
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { t: "24/7", d: "transport / awaryjnie" },
              { t: "Premium", d: "detailing & ochrona" },
              { t: "Sprawdzone", d: "auta używane" },
            ].map((x) => (
              <Card key={x.t} className="p-4">
                <div className="text-lg font-extrabold text-brand-black">{x.t}</div>
                <div className="text-xs font-semibold text-brand-muted">{x.d}</div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="overflow-hidden">
          <div className="relative aspect-[16/11] w-full">
            <Image
              src="/images/hero.png"
              alt="Perfect Automotive — detailing, dealer i autolaweta"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-white/10 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-l font-bold text-brand-black backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-brand-blue" />
                Detailing • Dealer • Autolaweta
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
