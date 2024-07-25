import React from "react";
import { IFormData, IQuestionItem, IRoomChoice } from "@/app/types/types";

interface IFifthStepProps {
  questions: IQuestionItem[];
  formData: IFormData;
  handleFurnitureTypeSelection: (room: string, furnitureType: string) => void;
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
          isSelected={choice.furnitureType === option}
          onSelect={() => onSelect(choice.room, option)}
        />
      ))}
    </div>
  </div>
);

export const Ninth: React.FC<IFifthStepProps> = ({
  questions,
  formData,
  handleFurnitureTypeSelection,
}) => {
  const getFurnitureQuestion = (furniture: string) =>
    questions.find(
      (q) =>
        q.dependsOn?.questionId === 13 &&
        Array.isArray(q.dependsOn.value) &&
        q.dependsOn.value.includes(furniture)
    );

  return (
    <div>
      {formData.choices.map((choice) => {
        const furniture = choice.furniture ?? "";
        const furnitureQuestion = getFurnitureQuestion(furniture);

        return furnitureQuestion ? (
          <QuestionBlock
            key={choice.room}
            question={furnitureQuestion}
            choice={choice}
            onSelect={handleFurnitureTypeSelection}
          />
        ) : null;
      })}
    </div>
  );
};
