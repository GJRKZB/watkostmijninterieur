import { IFormData, IQuestionItem } from "@/app/types/types";

interface IFourthStepProps {
  questions: IQuestionItem[];
  formData: IFormData;
  handleWindowDecorationSelection: (
    room: string,
    windowDecoration: string
  ) => void;
}

export const Fourth: React.FC<IFourthStepProps> = ({
  questions,
  formData,
  handleWindowDecorationSelection,
}) => {
  return (
    <div>
      <h2>{questions[3].text}</h2>
      {formData.choices.map((choice) => (
        <div key={choice.room}>
          <h3>{choice.room}</h3>
          {questions[3].options.map((windowDecoration) => (
            <label key={windowDecoration}>
              <input
                type="checkbox"
                checked={choice.windowDecoration === windowDecoration}
                onChange={() =>
                  handleWindowDecorationSelection(choice.room, windowDecoration)
                }
              />
              {windowDecoration}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};
