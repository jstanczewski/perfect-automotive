export type Service = {
  id: "detailing" | "dealer" | "autolaweta";
  title: string;
  subtitle: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "detailing",
    title: "Detailing",
    subtitle: "Mycie, korekta lakieru, ceramika, wnętrze",
    bullets: [
      "Mycie detailingowe i dekontaminacja",
      "Korekta lakieru (1–2 etapowa)",
      "Powłoki ceramiczne / woski",
    ],
  },
  {
    id: "dealer",
    title: "Dealer aut używanych",
    subtitle: "Sprawdzone samochody, gwarancja, finansowanie",
    bullets: [
      "Selekcja i weryfikacja stanu",
      "Przygotowanie auta „pod klucz”",
      "Pomoc w formalnościach",
    ],
  },
  {
    id: "autolaweta",
    title: "Autolaweta",
    subtitle: "Transport krajowy i międzynarodowy 24/7",
    bullets: [
      "Transport aut osobowych i dostawczych",
      "Bezpieczny załadunek i ubezpieczenie",
      "Dostępność 24/7 (po umówieniu)",
    ],
  },
];
