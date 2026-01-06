import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { company } from "@/content/company";

export function About() {
  return (
    <section id="onas" className="py-16 bg-white">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-black">
            O <span className="text-brand-blue">firmie</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            {company.description}
          </p>

          <ul className="mt-6 space-y-3">
            {company.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-brand-blue" />
                <span className="text-sm font-semibold text-brand-text">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image / media */}
        <Card className="overflow-hidden">
          <div className="aspect-[16/11] w-full bg-gradient-to-br from-brand-bg via-white to-brand-bg">
            <div className="flex h-full items-center justify-center p-6">
              <div className="w-full rounded-3xl border border-brand-border bg-white p-6">
                <div className="h-40 w-full rounded-2xl bg-brand-bg" />
                <p className="mt-4 text-xs text-brand-muted">
                  Tutaj wstawimy zdjęcie garażu, auta lub lawety.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
