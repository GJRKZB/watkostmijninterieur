"use client";

import { useState } from "react";
import { Questions } from "./data/Questions";
import Card from "./components/questionnaire/Card";

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptions, setCurrentOptions] = useState(Questions[0].options);

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < Questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setCurrentOptions(Questions[nextIndex].options);
    }
  };

  const handleBackQuestion = () => {
    const backIndex = currentQuestionIndex - 1;
    if (backIndex >= 0) {
      setCurrentQuestionIndex(backIndex);
      setCurrentOptions(Questions[backIndex].options);
    }
  };

  const handleSelectedCheckbox = (index: number) => {
    const selectedOption = currentOptions.map((option, optionIndex) => {
      if (index === optionIndex) {
        return { ...option, checked: !option.checked };
      }
      return option;
    });
    setCurrentOptions(selectedOption);
    console.log(selectedOption);
  };

  return (
    <div className="flex h-full">
      <Card
        title={Questions[currentQuestionIndex].title}
        description={Questions[currentQuestionIndex].description}
        currentQuestionIndex={currentQuestionIndex}
        currentOptions={currentOptions}
        handleNextQuestion={handleNextQuestion}
        handleBackQuestion={handleBackQuestion}
        handleSelectedCheckbox={handleSelectedCheckbox}
      />
    </div>
  );
}
