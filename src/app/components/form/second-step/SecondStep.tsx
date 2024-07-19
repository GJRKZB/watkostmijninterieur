import { IFormData, IQuestionItem } from "@/app/types/types";

interface ISecondStepProps {
  questions: IQuestionItem[];
  formData: IFormData;
  handleFloorSelection: (room: string, floor: string) => void;
}

export const SecondStep: React.FC<ISecondStepProps> = ({
  questions,
  formData,
  handleFloorSelection,
}) => {
  return (
    <div>
      <h2>{questions[1].text}</h2>
      {formData.choices.map((choice) => (
        <div key={choice.room}>
          <h3>{choice.room}</h3>
          {questions[1].options.map((floor) => (
            <label key={floor}>
              <input
                type="checkbox"
                checked={choice.floor === floor}
                onChange={() => handleFloorSelection(choice.room, floor)}
              />
              {floor}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};
