import { IQuestionItem } from "../types/types";
export const questions: IQuestionItem[] = [
  {
    id: 0,
    text: "Which room do you like to decorate?",
    options: ["Livingroom", "Bathroom", "Bedroom"],
  },
  {
    id: 1,
    text: "What type of floor do you have in each room?",
    options: ["Hardwood", "Carpet", "Tile"],
  },
  {
    id: 2,
    text: "What is the average m² for each selected room?",
    options: [
      "Small (15 m² - 20 m²)",
      "Mid-sized (20 m² - 30 m²)",
      "Big (30 m² - 50 m²)",
    ],
  },
  {
    id: 3,
    text: "Which window decoration would you like choose?",
    options: [
      "Curtains",
      "Wooden Blinds",
      "Aluminum Blinds",
      "Duet Curtains",
      "Pleated Curtains",
      // "Roller Blinds",
      "Inbetweens",
      "No window decoration needed",
    ],
  },
  {
    id: 4,
    text: "Which type of quality inbetweens?",
    options: ["Essential", "Comfort", "Premium"],
    dependsOn: { questionId: 3, value: "Inbetweens" },
  },
  {
    id: 5,
    text: "Which size aluminum blinds would you like?",
    options: ["25mm", "50mm"],
    dependsOn: { questionId: 3, value: "Aluminum Blinds" },
  },
  {
    id: 6,
    text: "Which size wooden blinds would you like?",
    options: ["50mm", "60mm"],
    dependsOn: { questionId: 3, value: "Wooden Blinds" },
  },
  {
    id: 7,
    text: "Which type of quality curtains?",
    options: ["Essential", "Comfort", "Premium"],
    dependsOn: { questionId: 3, value: "Curtains" },
  },
  {
    id: 8,
    text: "Which size Duet Curtains would you like?",
    options: ["25mm", "32mm"],
    dependsOn: { questionId: 3, value: "Duet Curtains" },
  },
  {
    id: 9,
    text: "Which size pleated curtains would you like?",
    options: ["20mm", "32mm"],
    dependsOn: { questionId: 3, value: "Pleated Curtains" },
  },
  {
    id: 10,
    text: "How many windows do you like to decorate?",
    options: ["1 - 3", "4 - 6", "7 - 10"],
  },
];
