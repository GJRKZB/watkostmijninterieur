import { IFormData, IQuestionItem } from "@/app/types/types";

interface IFifthStepProps {
  questions: IQuestionItem[];
  formData: IFormData;
  handleWindowDecorationTypeSelection: (
    room: string,
    windowDecorationType: string
  ) => void;
}

export const Fifth: React.FC<IFifthStepProps> = ({
  questions,
  formData,
  handleWindowDecorationTypeSelection,
}) => {
  return (
    <div>
      {formData.choices.map((choice) => {
        const windowDecorationQuestion = questions.find(
          (q) =>
            q.dependsOn?.questionId === 3 &&
            q.dependsOn.value === choice.windowDecoration
        );
        if (windowDecorationQuestion) {
          return (
            <div key={choice.room}>
              <h3>{windowDecorationQuestion.text}</h3>
              <div key={choice.room}>
                <h3>{choice.room}</h3>
                {windowDecorationQuestion.options.map((option) => (
                  <label key={option}>
                    <input
                      type="checkbox"
                      checked={choice.windowDecorationType === option}
                      onChange={() =>
                        handleWindowDecorationTypeSelection(choice.room, option)
                      }
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
