import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { fleet } from "@/content/fleet";
import Image from "next/image";

export function Fleet() {
  return (
    <section id="flota" className="scroll-mt-12 py-14">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-black">
              Nasza <span className="text-brand-blue">Flota</span> i realizacje
            </h2>
            <p className="mt-2 max-w-2xl text-brand-muted">
              Kilka przykładowych realizacji i elementów oferty. Docelowo podmienimy na
              Twoje zdjęcia.
            </p>
          </div>

          <Button href="#kontakt" variant="secondary" className="w-full md:w-auto">
            Zapytaj o dostępność
          </Button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/65 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-extrabold text-brand-blue">
                  {item.tag}
                </div>
                <h3 className="mt-3 text-base font-extrabold text-brand-black">
                  {item.title}
                </h3>

                <a
                  href="#kontakt"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-brand-blue"
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
