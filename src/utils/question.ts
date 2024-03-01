export interface IQuestion {
  title: string;
  description: string;
  options: {
    label: string;
    value?: number;
  }[];
}

export const Question: IQuestion[] = [
  {
    title: "Welke ruimte wil je inrichten?",
    description: "Selecteer de ruimte die je wilt inrichten",
    options: [
      { label: "Woonkamer", value: 1000 },
      { label: "Slaapkamer(s)", value: 2000 },
      { label: "Alle ruimte(n)", value: 3000 },
      { label: "Anders", value: 1000 },
    ],
  },

  {
    title: "Type vloer:",
    description: "Selecteer het type vloer dat je wilt",
    options: [
      { label: "PVC rechte plank" },
      { label: "PVC visgraat" },
      { label: "PVC hongaarse punt" },
      { label: "Laminaat" },
      { label: "Hout rechte plank" },
      { label: "Hout visgraat" },
      { label: "Vinyl" },
      { label: "Marmoleum" },
      { label: "Plavuizen/tegels" },
      { label: "Anders" },
    ],
  },

  {
    title: "Raamdecoratie:",
    description: "Selecteer de raamdecoratie die je wilt",
    options: [
      { label: "Gordijnen" },
      { label: "Inbetween gordijnen" },
      { label: "Rails" },
      { label: "Roede" },
      { label: "Horizontale aluminium jaloezieën" },
      { label: "Horizontale houten jaloezieën" },
      { label: "Duettes" },
      { label: "Plisse" },
      { label: "Rolgordijnen" },
      { label: "Shutters" },
      { label: "Anders" },
    ],
  },

  {
    title: "Wand Decoratie:",
    description: "Selecteer de wanddecoratie die je wilt",
    options: [
      { label: "Behang" },
      { label: "Krijtverf" },
      { label: "Kalkverf" },
      { label: "Anders" },
    ],
  },

  {
    title: "Meubelen:",
    description: "Selecteer de meubelen die je wilt",
    options: [
      { label: "Bank" },
      { label: "Recht model" },
      { label: "Hoekbank" },
      { label: "Rondzit" },
      { label: "Salontafel" },
      { label: "Fauteuil" },
      { label: "Eettafel" },
      { label: "Stoelen" },
      { label: "Dressoir" },
      { label: "Kast" },
      { label: "Anders" },
    ],
  },
];
