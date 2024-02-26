"use client";

import { FormEvent, useState } from "react";
import { Question } from "../utils/question";
import Card from "./components/questionnaire/card";

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string[] }>({});
  const [completed, setCompleted] = useState(false);

  const handleSelect = (
    questionTitle: string,
    optionLabel: string,
    isChecked: boolean,
  ) => {
    setAnswers((prevAnswers) => {
      const updatedSelection = { ...prevAnswers };
      const currentSelection = updatedSelection[questionTitle] || [];
      if (isChecked) {
        updatedSelection[questionTitle] = [...currentSelection, optionLabel];
      } else {
        updatedSelection[questionTitle] = currentSelection.filter(
          (label) => label !== optionLabel,
        );
      }
      return updatedSelection;
    });
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < Question.length) {
      setCurrentQuestionIndex(nextIndex);
    }
  };

  const handleBackQuestion = () => {
    const backIndex = currentQuestionIndex - 1;
    if (backIndex >= 0) {
      setCurrentQuestionIndex(backIndex);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setCompleted(true);
    console.log(answers);
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card
        question={Question[currentQuestionIndex]}
        questions={Question}
        currentQuestionIndex={currentQuestionIndex}
        selectedOptions={answers[Question[currentQuestionIndex].title] || []}
        answers={answers}
        handleSelect={handleSelect}
        handleNextQuestion={handleNextQuestion}
        handleBackQuestion={handleBackQuestion}
        handleSubmit={handleSubmit}
        completed={completed}
      />
    </div>
  );
}
