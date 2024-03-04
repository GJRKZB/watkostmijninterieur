"use client";

import { useState } from "react";
import { Question } from "@/utils/question";

export default function Home() {
  const [selectedOptions, setSelectedOptions] = useState<
    { label: string; questionId: number }[]
  >([]);
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const handleNextQuestion = () => {
    if (questionIndex < Question.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    }
  };

  const handleBackQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex((prev) => prev - 1);
    } else {
      setQuestionIndex(Question.length - 1);
    }
  };

  const handleSelect = (optionLabel: string, questionId: number) => {
    const isSelected = selectedOptions.some(
      (option) =>
        option.label === optionLabel && option.questionId === questionId,
    );

    if (isSelected) {
      setSelectedOptions((prev) =>
        prev.filter(
          (option) =>
            !(option.label === optionLabel && option.questionId === questionId),
        ),
      );
    } else {
      setSelectedOptions((prev) => [
        ...prev,
        { label: optionLabel, questionId },
      ]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const questionsAndSelectedOptions = Question.map((question) => {
      const selectedOptionsForQuestion = selectedOptions.filter(
        (option) => option.questionId === question.id,
      );
      return {
        questionTitle: question.title,
        selectedOptions: selectedOptionsForQuestion.map(
          (option) => option.label,
        ),
      };
    }).filter((q) => q.selectedOptions.length > 0);

    console.log(questionsAndSelectedOptions);
  };

  return (
    <div className="flex h-full  flex-col items-center justify-center gap-4">
      <h1>Questionnaire:</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {Question.map((question, index) =>
          index === questionIndex ? (
            <div key={question.id} className="flex flex-col gap-4">
              <h2>{question.title}</h2>
              {question.options.map((option) => (
                <label key={option.label} className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    name={option.label}
                    value={option.label}
                    checked={selectedOptions.some(
                      (selectedOption) =>
                        selectedOption.label === option.label &&
                        selectedOption.questionId === question.id,
                    )}
                    onChange={() => handleSelect(option.label, question.id)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          ) : null,
        )}
        <div className="flex justify-between gap-4">
          <button onClick={handleBackQuestion}>Back</button>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
