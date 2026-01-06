import { Container } from "@/components/ui/Container";
import { contact } from "@/content/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-brand-bg">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-extrabold tracking-widest text-brand-black">
              PERFECT
            </div>
            <div className="-mt-1 text-xs font-semibold tracking-[0.2em] text-brand-muted">
              AUTOMOTIVE
            </div>
            <p className="mt-4 text-sm text-brand-muted">
              Detailing • Dealer aut używanych • Autolaweta
            </p>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Kontakt
            </div>
            <div className="mt-3 space-y-2 text-sm">
              <a
                className="block font-semibold text-brand-blue"
                href={`tel:${contact.phoneHref}`}
              >
                {contact.phoneDisplay}
              </a>
              <a
                className="block font-semibold text-brand-blue"
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </a>
              <div className="font-semibold text-brand-text">
                {contact.addressLines.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Linki
            </div>
            <div className="mt-3 space-y-2 text-sm">
              <a
                className="block font-semibold text-brand-muted hover:text-brand-black"
                href="#uslugi"
              >
                Usługi
              </a>
              <a
                className="block font-semibold text-brand-muted hover:text-brand-black"
                href="#onas"
              >
                O nas
              </a>
              <a
                className="block font-semibold text-brand-muted hover:text-brand-black"
                href="#flota"
              >
                Flota
              </a>
              <a
                className="block font-semibold text-brand-muted hover:text-brand-black"
                href="#kontakt"
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-brand-border pt-6 text-xs text-brand-muted md:flex-row md:items-center md:justify-between">
          <span>© {year} Perfect Automotive. Wszelkie prawa zastrzeżone.</span>
          <div className="flex gap-4">
            <a className="hover:text-brand-black" href="#">
              Polityka prywatności
            </a>
            <a className="hover:text-brand-black" href="#">
              Cookies
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
