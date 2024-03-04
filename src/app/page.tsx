"use client";

import { useState } from "react";
import { Question } from "@/utils/question";

export default function Home() {
  const [selectedOptions, setSelectedOptions] = useState<
    { label: string; questionId: number }[]
  >([]);

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

    const questionAndSelectedOptions = Question.map((question) => {
      const selectedOptionLabels = selectedOptions
        .filter((option) => option.questionId === question.id)
        .map((option) => option.label);

      return {
        title: question.title,
        selectedOptionLabels,
      };
    }).filter((question) => question.selectedOptionLabels.length > 0);

    setSelectedOptions([]);
    console.log(questionAndSelectedOptions);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1>Questionnaire:</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {Question.map((question) => (
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
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
