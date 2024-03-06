import Selection from "./selection";
import Completion from "./completion";
import FormContactDetails from "../form/form";
import { Question } from "@/utils/question";
import { IContactDetails } from "@/app/page";
import { Button } from "@nextui-org/react";
import Submit from "../form/submit";

export interface ICardProps {
  handleNextQuestion: () => void;
  handleBackQuestion: () => void;
  handleSelect: (optionlabel: string, questionId: number) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  selectedOptions: Array<{ label: string; questionId: number }>;
  questionIndex: number;
  isSubmitted?: boolean;
  answers?: { questionTitle: string; selectedOptions: string[] }[];
  contactDetails: IContactDetails;
  handleContactDetails: (newContactDetails: IContactDetails) => void;
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
  handleContactDetails,
  contactDetails,
}) => {
  const isLastQuestion = questionIndex === Question.length - 1;

  return (
    <div className="flex h-full w-9/12 max-w-[796px] flex-col justify-center gap-4">
      <div className="flex flex-col gap-4 rounded-lg bg-white p-8 shadow-lg">
        {!isLastQuestion && !isSubmitted ? (
          <Selection
            handleSelect={handleSelect}
            selectedOptions={selectedOptions}
            questionIndex={questionIndex}
          />
        ) : !isSubmitted ? (
          <FormContactDetails
            contactDetails={contactDetails}
            handleContactDetails={handleContactDetails}
          />
        ) : null}
        {isSubmitted && <Completion answers={answers} />}
      </div>
      {!isSubmitted && (
        <div className="flex justify-between gap-4 rounded-lg bg-white p-4 shadow-lg">
          {questionIndex > 0 && (
            <Button
              className="right-0 w-28 rounded-lg bg-[#020246] text-white shadow-lg"
              size="lg"
              onClick={handleBackQuestion}
            >
              Back
            </Button>
          )}
          {!isLastQuestion ? (
            <Button
              className="ml-auto mr-0 w-28 rounded-lg bg-[#020246] text-white shadow-lg"
              size="lg"
              onClick={handleNextQuestion}
            >
              Next
            </Button>
          ) : (
            <Submit handleSubmit={handleSubmit} />
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
