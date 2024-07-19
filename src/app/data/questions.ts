import { IQuestionItem } from "../types/types";
export const questions: IQuestionItem[] = [
  {
    id: 1,
    text: "Which room do you like to decorate?",
    options: ["Livingroom", "Bathroom", "Bedroom"],
  },
  {
    id: 2,
    text: "What type of floor do you have in each room?",
    options: ["Hardwood", "Carpet", "Tile"],
  },
  {
    id: 3,
    text: "What is the average m² for each selected room?",
    options: [
      "Small (15 m² - 20 m²)",
      "Mid-sized (20 m² - 30 m²)",
      "Big (30 m² - 50 m²)",
    ],
  },
];
