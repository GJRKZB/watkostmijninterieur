import { Question } from "@/utils/question";
import { CheckboxGroup, Checkbox, ScrollShadow } from "@nextui-org/react";

export interface ISelectionProps {
  handleSelect: (optionlabel: string, questionId: number) => void;
  selectedOptions: Array<{ label: string; questionId: number }>;
  questionIndex: number;
}

const Selection: React.FC<ISelectionProps> = ({
  handleSelect,
  selectedOptions,
  questionIndex,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {Question.map((question, index) =>
        index === questionIndex ? (
          <div key={question.id} className="flex w-full flex-col gap-4">
            <h2 className="text-xl font-bold text-[#101828]">
              {question.title}
            </h2>
            <p className="text-[#667085]">{question.description}</p>
            <ScrollShadow
              className="flex max-h-80 flex-col gap-3 overflow-auto"
              size={50}
            >
              {question.options.map((option) => (
                <label
                  key={option.label}
                  className={`flex cursor-pointer items-center gap-4 rounded-lg border border-[#E4E7EC] p-4 ${selectedOptions.some((selectedOption) => selectedOption.label === option.label && selectedOption.questionId === question.id) ? "bg-[#F9FAFB]" : "bg-white"}`}
                >
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    name={option.label}
                    value={option.label}
                    checked={selectedOptions.some(
                      (selectedOption) =>
                        selectedOption.label === option.label &&
                        selectedOption.questionId === question.id,
                    )}
                    onChange={() => handleSelect(option.label, question.id)}
                  />
                  {option.label}
                </label>
              ))}
            </ScrollShadow>
          </div>
        ) : null,
      )}
    </div>
  );
};

export default Selection;
