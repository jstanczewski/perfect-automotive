import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { company } from "@/content/company";
import Image from "next/image";

export function About() {
  return (
    <section id="onas" className="scroll-mt-12 py-16 bg-white">
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
          <div className="relative aspect-[16/11] w-full">
            <Image
              src="/images/1.png"
              alt="Perfect Automotive – studio, auta i detailing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-transparent to-transparent" />
          </div>
        </Card>
      </Container>
    </section>
  );
}
