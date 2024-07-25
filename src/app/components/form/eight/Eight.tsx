import { IFormData, IQuestionItem } from "@/app/types/types";

interface IEightStepProps {
  questions: IQuestionItem[];
  formData: IFormData;
  handleFurnitureSelection: (room: string, furniture: string) => void;
}

export const Eight: React.FC<IEightStepProps> = ({
  questions,
  formData,
  handleFurnitureSelection,
}) => {
  return (
    <div>
      <h2>{questions[13].text}</h2>
      {formData.choices.map((choice) => (
        <div key={choice.room}>
          <h3>{choice.room}</h3>
          {questions[13].options.map((furniture) => (
            <label key={furniture}>
              <input
                type="checkbox"
                checked={choice.furniture === furniture}
                onChange={() =>
                  handleFurnitureSelection(choice.room, furniture)
                }
              />
              {furniture}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};
