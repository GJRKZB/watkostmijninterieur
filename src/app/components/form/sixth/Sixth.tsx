import { IFormData, IQuestionItem } from "@/app/types/types";

interface ISixthStepProps {
  questions: IQuestionItem[];
  formData: IFormData;
  handleWindowAmountSelection: (room: string, amountWindows: string) => void;
}

export const Sixth: React.FC<ISixthStepProps> = ({
  questions,
  formData,
  handleWindowAmountSelection,
}) => {
  const windowDecorationSelected = formData.choices.filter(
    (choice) => choice.windowDecoration !== "No window decoration needed"
  );

  return (
    <div>
      {windowDecorationSelected.length > 0 && (
        <div>
          <h3>{questions[10].text}</h3>
          {windowDecorationSelected.map((choice) => (
            <div key={choice.room}>
              <h3>{choice.room}</h3>
              {questions[10].options.map((amountWindows) => (
                <label key={amountWindows}>
                  <input
                    type="checkbox"
                    checked={choice.amountWindows === amountWindows}
                    onChange={() =>
                      handleWindowAmountSelection(choice.room, amountWindows)
                    }
                  />
                  {amountWindows}
                </label>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
