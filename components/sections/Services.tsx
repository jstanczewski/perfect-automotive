import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

function Icon({ id }: { id: string }) {
  // Proste ikonki SVG — później możemy je podmienić na lucide lub własne.
  if (id === "detailing") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 14c2-2 8-2 10 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M8 10h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 3v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M5 20c1.5-3 3.5-5 7-5s5.5 2 7 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (id === "dealer") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 13l2-5h12l2 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 16.5h11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M7 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="currentColor" />
        <path d="M17 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="currentColor" />
      </svg>
    );
  }
  // autolaweta
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 16V8h10v8H3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M13 10h4l3 3v3h-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M6.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="currentColor" />
      <path d="M17.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="currentColor" />
      <path d="M3 14h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Services() {
  return (
    <section id="uslugi" className="py-14">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-black">
              Nasze <span className="text-brand-blue">Usługi</span>
            </h2>
            <p className="mt-2 max-w-2xl text-brand-muted">
              Wybierz obszar, który Cię interesuje — możemy też połączyć usługi w jedną,
              wygodną obsługę.
            </p>
          </div>

          <Button href="#kontakt" variant="secondary" className="w-full md:w-auto">
            Poproś o wycenę
          </Button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Card
              key={s.id}
              className="group p-6 transition hover:shadow-[0_14px_40px_rgba(2,6,23,0.10)]"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-blue/12 text-brand-blue">
                  <Icon id={s.id} />
                </div>
                <h3 className="text-lg font-extrabold text-brand-black">{s.title}</h3>
              </div>

              <p className="mt-4 text-sm text-brand-muted">{s.subtitle}</p>

              <ul className="mt-5 space-y-2 text-sm text-brand-muted">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-blue" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-blue"
                >
                  Zapytaj <span aria-hidden="true">→</span>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
