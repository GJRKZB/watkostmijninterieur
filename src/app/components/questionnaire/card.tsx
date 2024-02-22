import { useState } from "react";
import { FormEvent } from "react";
import Selection from "./selection";
import Completion from "./completion";

interface CardProps {
  title: string;
  description: string;
  currentQuestionIndex: number;
  currentOptions: {
    label: string;
    checked: boolean;
  }[];
  handleNextQuestion: () => void;
  handleBackQuestion: () => void;
  handleSelect: (index: number) => void;
  isLastQuestion: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  currentQuestionIndex,
  currentOptions,
  handleNextQuestion,
  handleBackQuestion,
  handleSelect,
  isLastQuestion,
}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsCompleted(true);
  };

  return (
    <div className="flex h-full w-9/12 max-w-[796px] flex-col justify-center gap-4">
      <div className="flex flex-col gap-4 rounded-[32px] bg-white p-8 shadow-lg">
        {isCompleted ? (
          <Completion />
        ) : (
          <>
            <h1 className="w-full text-xl font-bold text-[#101828]">{title}</h1>
            <p className="text-[#667085]">{description}</p>
            <Selection options={currentOptions} handleSelect={handleSelect} />
          </>
        )}
      </div>
      {!isCompleted && (
        <div className="flex w-full justify-between">
          {currentQuestionIndex > 0 && (
            <button
              className="right-0 w-28 rounded-lg bg-[#020246] p-3 text-white shadow-lg"
              onClick={handleBackQuestion}
            >
              Back
            </button>
          )}
          {!isLastQuestion ? (
            <button
              onClick={handleNextQuestion}
              className="ml-auto mr-0 w-28 rounded-lg bg-[#020246] p-3 text-white shadow-lg"
            >
              Next
            </button>
          ) : (
            <form onSubmit={handleSubmit}>
              <button
                className="ml-auto mr-0 w-28 rounded-lg bg-[#020246] p-3 text-white shadow-lg"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
