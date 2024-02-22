"use client";

import { useState } from "react";
import { Questions } from "./data/questions";
import Card from "./components/questionnaire/card";
import dotenv from "dotenv";
dotenv.config();

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptions, setCurrentOptions] = useState(Questions[0].options);
  const [answers, setAnswers] = useState({});

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < Questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setCurrentOptions(Questions[nextIndex].options);
    }
    console.log(currentOptions);
  };

  const handleBackQuestion = () => {
    const backIndex = currentQuestionIndex - 1;
    if (backIndex >= 0) {
      setCurrentQuestionIndex(backIndex);
      setCurrentOptions(Questions[backIndex].options);
    }
  };

  const handleSelect = (index: number) => {
    const updatedOptions = [...currentOptions];
    updatedOptions[index].checked = !updatedOptions[index].checked;
    setCurrentOptions(updatedOptions);

    const updatedAnswers = {
      ...answers,
      [currentQuestionIndex]: updatedOptions.filter((option) => option.checked),
    };
    setAnswers(updatedAnswers);
    console.log(answers);
  };

  const isLastQuestion = currentQuestionIndex === Questions.length - 1;

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card
        title={Questions[currentQuestionIndex].title}
        description={Questions[currentQuestionIndex].description}
        currentQuestionIndex={currentQuestionIndex}
        currentOptions={currentOptions}
        handleNextQuestion={handleNextQuestion}
        handleBackQuestion={handleBackQuestion}
        handleSelect={handleSelect}
        isLastQuestion={isLastQuestion}
      />
    </div>
  );
}
