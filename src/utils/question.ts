export interface IQuestion {
  id: number;
  title: string;
  description: string;
  options: IOptions[];
}

export interface IOptions {
  label: string;
  value?: number;
}

export const Question: IQuestion[] = [
  {
    id: 1,
    title: "Welke ruimte wil je inrichten?",
    description: "Selecteer de ruimte die je wilt inrichten",
    options: [
      { label: "Woonkamer", value: 1000 },
      { label: "Slaapkamer(s)", value: 2000 },
      { label: "Alle ruimte(n)", value: 3000 },
      { label: "Anders" },
    ],
  },

  {
    id: 2,
    title: "Type vloer:",
    description: "Selecteer het type vloer dat je wilt",
    options: [
      { label: "PVC rechte plank", value: 1000 },
      { label: "PVC visgraat", value: 2000 },
      { label: "PVC hongaarse punt", value: 3000 },
      { label: "Laminaat", value: 1000 },
      { label: "Hout rechte plank", value: 2000 },
      { label: "Hout visgraat", value: 3000 },
      { label: "Vinyl", value: 1000 },
      { label: "Marmoleum", value: 2000 },
      { label: "Plavuizen/tegels", value: 3000 },
      { label: "Anders" },
    ],
  },

  {
    id: 3,
    title: "Raamdecoratie:",
    description: "Selecteer de raamdecoratie die je wilt",
    options: [
      { label: "Gordijnen", value: 1000 },
      { label: "Inbetween gordijnen", value: 2000 },
      { label: "Rails", value: 3000 },
      { label: "Roede", value: 1000 },
      { label: "Horizontale aluminium jaloezieën", value: 2000 },
      { label: "Horizontale houten jaloezieën", value: 3000 },
      { label: "Duettes", value: 1000 },
      { label: "Plisse", value: 2000 },
      { label: "Rolgordijnen", value: 3000 },
      { label: "Shutters", value: 1000 },
      { label: "Anders" },
    ],
  },

  {
    id: 4,
    title: "Wand Decoratie:",
    description: "Selecteer de wanddecoratie die je wilt",
    options: [
      { label: "Behang", value: 1000 },
      { label: "Krijtverf", value: 2000 },
      { label: "Kalkverf", value: 3000 },
      { label: "Anders" },
    ],
  },

  {
    id: 5,
    title: "Meubelen:",
    description: "Selecteer de meubelen die je wilt",
    options: [
      { label: "Bank", value: 1000 },
      { label: "Recht model", value: 2000 },
      { label: "Hoekbank", value: 3000 },
      { label: "Rondzit", value: 1000 },
      { label: "Salontafel", value: 2000 },
      { label: "Fauteuil", value: 3000 },
      { label: "Eettafel", value: 1000 },
      { label: "Stoelen", value: 2000 },
      { label: "Dressoir", value: 3000 },
      { label: "Kast", value: 1000 },
      { label: "Anders" },
    ],
  },
];
