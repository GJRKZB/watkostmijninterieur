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
  const [errors, SetErrors] = useState<Partial<IContactDetails>>({});

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

  const validationContactDetails = () => {
    const newErrors: Partial<IContactDetails> = {};
    if (!contactDetails.name) {
      newErrors.name = "Name is required";
    }
    if (!contactDetails.email || contactDetails.email.length < 3) {
      newErrors.email = "Email is required";
    }
    return newErrors;
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

    const contactFormErrors = validationContactDetails();

    if (Object.keys(contactFormErrors).length === 0) {
      console.log("Form Submitted");
      setAnswers(questionsAndSelectedOptions);
      setIsSubmitted(true);
    } else {
      SetErrors(contactFormErrors);
    }

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
        errors={errors}
      />
    </div>
  );
}
