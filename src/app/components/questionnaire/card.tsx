import { FormEvent } from "react";
import Selection from "./selection";
import { IQuestion } from "@/utils/question";
import Completion from "./completion";

export interface CardProps {
  question: IQuestion;
  questions: IQuestion[];
  currentQuestionIndex: number;
  selectedOptions: string[];
  answers: { [key: string]: string[] };
  handleSelect: (
    questionTitle: string,
    optionLabel: string,
    isChecked: boolean,
  ) => void;
  handleNextQuestion: () => void;
  handleBackQuestion: () => void;
  handleSubmit: (event: FormEvent) => void;
  completed: boolean;
  isLastQuestion: boolean;
}

const Card: React.FC<CardProps> = ({
  question,
  questions,
  answers,
  currentQuestionIndex,
  selectedOptions,
  handleSelect,
  handleNextQuestion,
  handleBackQuestion,
  handleSubmit,
  completed,
  isLastQuestion,
}) => {
  return (
    <div className="flex h-full w-9/12 max-w-[796px] flex-col justify-center gap-4">
      <div className="flex flex-col gap-4 rounded-[32px] bg-white p-8 shadow-lg">
        {completed ? (
          <Completion answers={answers} questions={questions} />
        ) : (
          <>
            <h1 className="w-full text-xl font-bold text-[#101828]">
              {question.title}
            </h1>
            <p className="text-[#667085]">{question.description}</p>
            <Selection
              question={question}
              selectedOptions={selectedOptions}
              handleSelect={handleSelect}
            />
          </>
        )}
      </div>
      <div className="flex w-full justify-between">
        {currentQuestionIndex > 0 && !isLastQuestion && (
          <button
            className="right-0 w-28 rounded-lg bg-[#020246] p-3 text-white shadow-lg"
            onClick={handleBackQuestion}
          >
            Back
          </button>
        )}
        {!completed && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
