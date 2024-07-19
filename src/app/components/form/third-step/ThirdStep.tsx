import { IFormData, IQuestionItem } from "@/app/types/types";

interface IThirdStepProps {
  questions: IQuestionItem[];
  formData: IFormData;
  handleSizeSelection: (room: string, size: string) => void;
}

export const ThirdStep: React.FC<IThirdStepProps> = ({
  questions,
  formData,
  handleSizeSelection,
}) => {
  return (
    <div>
      <h2>{questions[2].text}</h2>
      {formData.choices.map((choice) => (
        <div key={choice.room}>
          <h3>{choice.room}</h3>
          {questions[2].options.map((size) => (
            <label key={size}>
              <input
                type="checkbox"
                checked={choice.size === size}
                onChange={() => handleSizeSelection(choice.room, size)}
              />
              {size}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};
