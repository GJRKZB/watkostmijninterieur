import React from "react";
import { IFormData, IQuestionItem } from "@/app/types/types";

interface ISeventhProps {
  questions: IQuestionItem[];
  formData: IFormData;
  handleWindowDecorationSizeSelection: (
    room: string,
    windowSizes: string
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
  room: string;
  selectedSize: string | undefined;
  onSelect: (room: string, option: string) => void;
}> = ({ question, room, selectedSize, onSelect }) => (
  <div>
    <h3>{room}</h3>
    <div>
      {question.options.map((option) => (
        <Option
          key={option}
          option={option}
          isSelected={selectedSize === option}
          onSelect={() => onSelect(room, option)}
        />
      ))}
    </div>
  </div>
);

export const Seventh: React.FC<ISeventhProps> = ({
  questions,
  formData,
  handleWindowDecorationSizeSelection,
}) => {
  const blindsAndRollers = [
    "Wooden Blinds",
    "Aluminum Blinds",
    "Duet Curtains",
    "Pleated Curtains",
    "Roller Blinds",
  ];
  const curtainsAndInbetweens = ["Curtains", "Inbetweens"];

  const question11 = questions.find((q) => q.id === 11);
  const question12 = questions.find((q) => q.id === 12);

  const blindsRollerRooms = formData.choices.filter((choice) =>
    blindsAndRollers.includes(choice.windowDecoration ?? "")
  );
  const curtainsInbetweensRooms = formData.choices.filter((choice) =>
    curtainsAndInbetweens.includes(choice.windowDecoration ?? "")
  );

  return (
    <div>
      {question11 && blindsRollerRooms.length > 0 && (
        <div>
          <h2>{question11.text}</h2>
          {question11.closestValueText && <p>{question11.closestValueText}</p>}
          {blindsRollerRooms.map((choice) => (
            <QuestionBlock
              key={choice.room}
              question={question11}
              room={choice.room}
              selectedSize={choice.windowSizes}
              onSelect={handleWindowDecorationSizeSelection}
            />
          ))}
        </div>
      )}
      {question12 && curtainsInbetweensRooms.length > 0 && (
        <div>
          <h2>{question12.text}</h2>
          {question12.closestValueText && <p>{question12.closestValueText}</p>}
          {curtainsInbetweensRooms.map((choice) => (
            <QuestionBlock
              key={choice.room}
              question={question12}
              room={choice.room}
              selectedSize={choice.windowSizes}
              onSelect={handleWindowDecorationSizeSelection}
            />
          ))}
        </div>
      )}
    </div>
  );
};
