"use client";

import { useState } from "react";
import { Question } from "@/utils/question";
import { IContactFormData, IErrors } from "@/models/user";
import Card from "./components/questionnaire/card";

export default function Home() {
  const [selectedOptions, setSelectedOptions] = useState<
    { label: string; questionId: number }[]
  >([]);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [answers, setAnswers] = useState<
    { questionTitle: string; selectedOptions: string[] }[]
  >([]);

  const [contactFormData, setContactFormData] = useState<IContactFormData>({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, SetErrors] = useState<IErrors>({});

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

  const handleContactDetails = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactFormData({
      ...contactFormData,
      [event.target.name]: event.target.value,
    });

    if (errors[event.target.name as keyof IErrors]) {
      SetErrors({
        ...errors,
        [event.target.name]: "",
      });
    }
  };

  const validationContactDetails = (): IErrors => {
    const errors: IErrors = {};
    if (!contactFormData.name) {
      errors.name = "Name is required";
    } else if (contactFormData.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    }
    if (!contactFormData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(contactFormData.email)) {
      errors.email = "Email address is invalid";
    }
    return errors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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

    const errors = validationContactDetails();
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch("/api/contactform", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactFormData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation: ", error);
      }
      console.log("Form data: ", contactFormData);
      setAnswers(questionsAndSelectedOptions);
      setIsSubmitted(true);
    } else {
      SetErrors(errors);
    }
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
        contactFormData={contactFormData}
        errors={errors}
      />
    </div>
  );
}
