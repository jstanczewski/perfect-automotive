export type FleetItem = {
  id: string;
  title: string;
  tag: string;
  // docelowo podmienisz na realne pliki w public/images/...
  image?: string;
};

export const fleet = [
  {
    id: "f1",
    title: "Detailing — korekta lakieru i ceramika",
    tag: "Realizacja",
    image: "/images/2.png",
  },
  {
    id: "f2",
    title: "Auto przygotowane do sprzedaży",
    tag: "Dealer",
    image: "/images/3.png",
  },
  {
    id: "f3",
    title: "Transport pojazdu autolawetą",
    tag: "Autolaweta",
    image: "/images/4.png",
  },
];
