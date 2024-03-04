import Selection from "./selection";
import Completion from "./completion";
import { Question } from "@/utils/question";

export interface ICardProps {
  handleNextQuestion: () => void;
  handleBackQuestion: () => void;
  handleSelect: (optionlabel: string, questionId: number) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  selectedOptions: Array<{ label: string; questionId: number }>;
  questionIndex: number;
  isSubmitted?: boolean;
  answers?: { questionTitle: string; selectedOptions: string[] }[];
}

const Card: React.FC<ICardProps> = ({
  handleNextQuestion,
  handleBackQuestion,
  handleSelect,
  handleSubmit,
  selectedOptions,
  questionIndex,
  isSubmitted,
  answers,
}) => {
  const isLastQuestion = questionIndex === Question.length - 1;

  return (
    <div className="flex h-full w-9/12 max-w-[796px] flex-col justify-center gap-4">
      <div className="flex flex-col gap-4 rounded-lg bg-white p-8 shadow-lg">
        {!isSubmitted ? (
          <Selection
            handleNextQuestion={handleNextQuestion}
            handleBackQuestion={handleBackQuestion}
            handleSelect={handleSelect}
            handleSubmit={handleSubmit}
            selectedOptions={selectedOptions}
            questionIndex={questionIndex}
          />
        ) : (
          <Completion answers={answers} />
        )}
      </div>
      {!isSubmitted && (
        <div className="flex justify-between gap-4 rounded-lg bg-white p-4 shadow-lg">
          {questionIndex > 0 && (
            <button
              className="right-0 w-28 rounded-lg bg-[#020246] p-3 text-white shadow-lg"
              onClick={handleBackQuestion}
            >
              Back
            </button>
          )}
          {!isLastQuestion ? (
            <button
              className="ml-auto mr-0 w-28 rounded-lg bg-[#020246] p-3 text-white shadow-lg"
              onClick={handleNextQuestion}
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
