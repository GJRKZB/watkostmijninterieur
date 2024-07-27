import { IQuestionItem } from "../types/types";
export const Questions: IQuestionItem[] = [
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
      "Roller Blinds",
      "Inbetweens",
      "No window decoration needed",
    ],
  },
  {
    id: 4,
    text: "Which type of quality inbetweens?",
    options: ["Essential", "Comfort", "Premium"],
    dependsOn: { questionId: 3, value: ["Inbetweens"] },
  },
  {
    id: 5,
    text: "Which size aluminum blinds would you like?",
    options: ["25mm", "50mm"],
    dependsOn: { questionId: 3, value: ["Aluminum Blinds"] },
  },
  {
    id: 6,
    text: "Which size wooden blinds would you like?",
    options: ["50mm", "60mm"],
    dependsOn: { questionId: 3, value: ["Wooden Blinds"] },
  },
  {
    id: 7,
    text: "Which type of quality curtains?",
    options: ["Essential", "Comfort", "Premium"],
    dependsOn: { questionId: 3, value: ["Curtains"] },
  },
  {
    id: 8,
    text: "Which size Duet Curtains would you like?",
    options: ["25mm", "32mm"],
    dependsOn: { questionId: 3, value: ["Duet Curtains"] },
  },
  {
    id: 9,
    text: "Which size pleated curtains would you like?",
    options: ["20mm", "32mm"],
    dependsOn: { questionId: 3, value: ["Pleated Curtains"] },
  },
  {
    id: 10,
    text: "How many windows do you like to decorate?",
    options: ["1 - 3", "4 - 6", "7 - 10"],
  },
  {
    id: 11,
    text: "Select one of the most common window sizes",
    closestValueText:
      "Take the option with the closest average values, if your window sizes deviates",
    options: [
      "100cm B x 200cm HG",
      "200cm B x 150cm HG",
      "150cm B x 100cm HG",
      "70cm B x 250cm HG",
      "250cm B x 200cm HG",
    ],
    dependsOn: {
      questionId: 3,
      value: [
        "Wooden Blinds",
        "Aluminum Blinds",
        "Duet Curtains",
        "Pleated Curtains",
        "Roller Blinds",
      ],
    },
  },
  {
    id: 12,
    text: "Select one of the most common curtain or inbetween width",
    closestValueText:
      "Take the option with the closest average values, if your window sizes deviates",
    options: ["550cm B", "400cm B", "250cm B", "150cm B", "80cm B"],
    dependsOn: {
      questionId: 3,
      value: ["Curtains", "Inbetweens"],
    },
  },
  {
    id: 13,
    text: "Which furniture would you like choose?",
    options: [
      "Couch",
      "Armchair",
      "Coffee table",
      "Dining room table",
      "Dining room chair",
      "TV furniture",
      "Carpet",
      "No furniture",
    ],
  },
  {
    id: 14,
    text: "Which type of quality furniture do you prefer?",
    options: ["Budget", "Exclusive"],
    dependsOn: {
      questionId: 13,
      value: [
        "Couch",
        "Armchair",
        "Coffee table",
        "Dining room table",
        "Dining room chair",
        "TV furniture",
        "Carpet",
      ],
    },
  },
];
