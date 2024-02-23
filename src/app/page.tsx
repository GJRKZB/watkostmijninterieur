"use client";

import { FormEvent, useState } from "react";
import { Question } from "../utils/question";
import Card from "./components/questionnaire/card";
import dotenv from "dotenv";
dotenv.config();

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [completed, setCompleted] = useState(false);

  const handleSelect = (
    questionTitle: string,
    optionLabel: string,
    isChecked: boolean,
  ) => {
    setAnswers((prev) => {
      const currentSelection = prev[questionTitle] || [];
      if (isChecked) {
        return {
          ...prev,
          [questionTitle]: [...currentSelection, optionLabel],
        };
      } else {
        return {
          ...prev,
          [questionTitle]: currentSelection.filter(
            (label) => label !== optionLabel,
          ),
        };
      }
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

  const isLastQuestion = currentQuestionIndex === Question.length - 1;

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card
        question={Question[currentQuestionIndex]}
        currentQuestionIndex={currentQuestionIndex}
        selectedOptions={answers[Question[currentQuestionIndex].title] || []}
        handleSelect={handleSelect}
        handleNextQuestion={handleNextQuestion}
        handleBackQuestion={handleBackQuestion}
        handleSubmit={handleSubmit}
        completed={completed}
        isLastQuestion={isLastQuestion}
      />
    </div>
  );
}
