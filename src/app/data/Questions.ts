interface Question {
  title: string;
  description: string;
  options: Option[];
}

interface Option {
  label: string;
  checked: boolean;
}

export const Questions: Question[] = [
  {
    title: "Welke ruimte wil je inrichten?",
    description: "Selecteer de ruimte die je wilt inrichten",
    options: [
      { label: "Woonkamer", checked: false },
      { label: "Slaapkamer(s)", checked: false },
      { label: "Alle ruimte(n)", checked: false },
      { label: "Anders", checked: false },
    ],
  },
  {
    title: "Type vloer",
    description: "Selecteer het type vloer dat je wilt",
    options: [
      { label: "PVC rechte plank", checked: false },
      { label: "PVC visgraat", checked: false },
      { label: "PVC hongaarse punt", checked: false },
      { label: "Laminaat", checked: false },
      { label: "Hout rechte plank", checked: false },
      { label: "Hout visgraat", checked: false },
      { label: "Vinyl", checked: false },
      { label: "Marmoleum", checked: false },
      { label: "Plavuizen/tegels", checked: false },
      { label: "Anders", checked: false },
    ],
  },
  {
    title: "Raamdecoratie",
    description: "Selecteer de raamdecoratie die je wilt",
    options: [
      { label: "Gordijnen", checked: false },
      { label: "Inbetween gordijnen", checked: false },
      { label: "Rails", checked: false },
      { label: "Roede", checked: false },
      { label: "Horizontale aluminium jaloezieën", checked: false },
      { label: "Horizontale houten jaloezieën", checked: false },
      { label: "Duettes", checked: false },
      { label: "Plisse", checked: false },
      { label: "Rolgordijnen", checked: false },
      { label: "Shutters", checked: false },
      { label: "Anders", checked: false },
    ],
  },
  {
    title: "Wand Decoratie",
    description: "Selecteer de wanddecoratie die je wilt",
    options: [
      { label: "Behang", checked: false },
      { label: "Krijtverf", checked: false },
      { label: "Kalkverf", checked: false },
      { label: "Anders", checked: false },
    ],
  },
  {
    title: "Meubelen",
    description: "Selecteer de meubelen die je wilt",
    options: [
      { label: "Bank", checked: false },
      { label: "Recht model", checked: false },
      { label: "Hoekbank", checked: false },
      { label: "Rondzit", checked: false },
      { label: "Salontafel", checked: false },
      { label: "Fauteuil", checked: false },
      { label: "Eettafel", checked: false },
      { label: "Stoelen", checked: false },
      { label: "Dressoir", checked: false },
      { label: "Kast", checked: false },
      { label: "Anders", checked: false },
    ],
  },
];
