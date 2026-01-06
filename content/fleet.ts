export type FleetItem = {
  id: string;
  title: string;
  tag: string;
  // docelowo podmienisz na realne pliki w public/images/...
  image?: string;
};

export const fleet: FleetItem[] = [
  { id: "d1", title: "Detailing — korekta + ceramika", tag: "Realizacja", image: "" },
  {
    id: "d2",
    title: "Detailing wnętrza — pranie + zabezpieczenie",
    tag: "Realizacja",
    image: "",
  },
  {
    id: "c1",
    title: "Auto na sprzedaż — przygotowanie pod klucz",
    tag: "Dealer",
    image: "",
  },
  { id: "t1", title: "Transport auta — autolaweta", tag: "Autolaweta", image: "" },
  {
    id: "t2",
    title: "Transport międzynarodowy — bezpieczny przewóz",
    tag: "Autolaweta",
    image: "",
  },
  { id: "c2", title: "Odbiór auta i przygotowanie do wydania", tag: "Dealer", image: "" },
];
