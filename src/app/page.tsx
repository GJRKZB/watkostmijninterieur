"use client";

import { useState } from "react";
import { Question } from "@/utils/question";
import Card from "./components/questionnaire/card";

export interface IContactDetails {
  name: string;
  email: string;
  phone?: string;
}

const initContactDetails: IContactDetails = {
  name: "",
  email: "",
  phone: "",
};

export default function Home() {
  const [selectedOptions, setSelectedOptions] = useState<
    { label: string; questionId: number }[]
  >([]);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [answers, setAnswers] = useState<
    { questionTitle: string; selectedOptions: string[] }[]
  >([]);
  const [contactDetails, setContactDetails] =
    useState<IContactDetails>(initContactDetails);

  const handleNextQuestion = () => {
    if (questionIndex < Question.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    }
  };

  const handleBackQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex((prev) => prev - 1);
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
          (selectedOption) =>
            !(
              selectedOption.label === optionLabel &&
              selectedOption.questionId === questionId
            ),
        ),
      );
    } else {
      setSelectedOptions((prev) => [
        ...prev,
        { label: optionLabel, questionId },
      ]);
    }
  };

  const handleContactDetails = (newContactDetails: IContactDetails) => {
    setContactDetails(newContactDetails);
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

    setAnswers(questionsAndSelectedOptions);
    setIsSubmitted(true);

    console.log(contactDetails);
    console.log(questionsAndSelectedOptions);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center ">
      <Card
        handleNextQuestion={handleNextQuestion}
        handleBackQuestion={handleBackQuestion}
        handleSelect={handleSelect}
        handleSubmit={handleSubmit}
        selectedOptions={selectedOptions}
        questionIndex={questionIndex}
        isSubmitted={isSubmitted}
        answers={answers}
        handleContactDetails={handleContactDetails}
        contactDetails={contactDetails}
      />
    </div>
  );
}
