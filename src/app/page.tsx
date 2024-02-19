"use client";

import { useState, useEffect } from "react";
import { Questions } from "./data/questions";
import Card from "./components/questionnaire/card";

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptions, setCurrentOptions] = useState(Questions[0].options);
  const [selected, setSelected] = useState(currentOptions);

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

  useEffect(() => {
    console.log("Current options: ", currentOptions);
  }, [currentOptions]);

  const handleSelect = (index: number) => {
    const newSelected = [...selected];
    newSelected[index].checked = !newSelected[index].checked;
    setSelected(newSelected);

    console.log(selected);
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
        handleSelect={handleSelect}
      />
    </div>
  );
}
