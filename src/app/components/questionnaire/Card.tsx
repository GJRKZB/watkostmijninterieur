"use client";

import { useState } from "react";
import Selection from "./Selection";

const questions = [
  {
    title: "Welke ruimte wil je inrichten?",
    options: [
      { label: "Woonkamer", checked: false },
      { label: "Slaapkamer(s)", checked: false },
      { label: "Alle ruimte(n)", checked: false },
      { label: "Anders", checked: false },
    ],
  },
  {
    title: "Type vloer",
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
    options: [
      { label: "Behang", checked: false },
      { label: "Krijtverf", checked: false },
      { label: "Kalkverf", checked: false },
      { label: "Anders", checked: false },
    ],
  },
  {
    title: "Meubelen",
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

export default function Card() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptions, setCurrentOptions] = useState(questions[0].options);

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setCurrentOptions(questions[nextIndex].options);
    }
  };

  const handleBackQuestion = () => {
    const backIndex = currentQuestionIndex - 1;
    if (backIndex >= 0) {
      setCurrentQuestionIndex(backIndex);
      setCurrentOptions(questions[backIndex].options);
    }
  };

  return (
    <div className="flex justify-center w-full items-center relative z-10">
      <div className="w-9/12 flex-col gap-4 flex">
        <div className="flex flex-col bg-white p-8 rounded-[32px] shadow-lg h-fit gap-2">
          <h1 className="text-xl font-bold w-full text-[#101828]">
            {questions[currentQuestionIndex].title}
          </h1>
          <p className="text-[#667085]">Select the correct answers:</p>
          <Selection options={currentOptions} />
        </div>
        <div className="flex justify-between w-full">
          {currentQuestionIndex > 0 && (
            <button
              className="bg-[#020246] p-3 text-white rounded-lg shadow-lg right-0 w-28"
              onClick={handleBackQuestion}
            >
              Back
            </button>
          )}
          <button
            onClick={handleNextQuestion}
            className="bg-[#020246] p-3 text-white rounded-lg shadow-lg w-28 ml-auto mr-0"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
