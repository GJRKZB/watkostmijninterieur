import React from "react";
import { IFormData, IQuestionItem, IRoomChoice } from "@/app/types/types";

interface IFifthStepProps {
  questions: IQuestionItem[];
  formData: IFormData;
  handleWindowDecorationTypeSelection: (
    room: string,
    windowDecorationType: string
  ) => void;
}

const Option: React.FC<{
  option: string;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ option, isSelected, onSelect }) => (
  <label>
    <input type="checkbox" checked={isSelected} onChange={onSelect} />
    {option}
  </label>
);

const QuestionBlock: React.FC<{
  question: IQuestionItem;
  choice: IRoomChoice;
  onSelect: (room: string, option: string) => void;
}> = ({ question, choice, onSelect }) => (
  <div>
    <h3>{question.text}</h3>
    <h3>{choice.room}</h3>
    <div>
      {question.options.map((option) => (
        <Option
          key={option}
          option={option}
          isSelected={choice.windowDecorationType === option}
          onSelect={() => onSelect(choice.room, option)}
        />
      ))}
    </div>
  </div>
);

export const Fifth: React.FC<IFifthStepProps> = ({
  questions,
  formData,
  handleWindowDecorationTypeSelection,
}) => {
  const getWindowDecorationQuestion = (windowDecoration: string) =>
    questions.find(
      (q) =>
        q.dependsOn?.questionId === 3 &&
        Array.isArray(q.dependsOn.value) &&
        q.dependsOn.value.includes(windowDecoration)
    );

  return (
    <div>
      {formData.choices.map((choice) => {
        const windowDecoration = choice.windowDecoration ?? "";
        const windowDecorationQuestion =
          getWindowDecorationQuestion(windowDecoration);

        return windowDecorationQuestion ? (
          <QuestionBlock
            key={choice.room}
            question={windowDecorationQuestion}
            choice={choice}
            onSelect={handleWindowDecorationTypeSelection}
          />
        ) : null;
      })}
    </div>
  );
};
