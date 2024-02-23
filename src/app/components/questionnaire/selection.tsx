import { IQuestion } from "@/utils/question";

interface SelectionProps {
  question: IQuestion;
  selectedOptions: string[];
  handleSelect: (
    questionTitle: string,
    optionLabel: string,
    isChecked: boolean,
  ) => void;
}

const Selection: React.FC<SelectionProps> = ({
  question,
  selectedOptions,
  handleSelect,
}) => {
  return (
    <div className="flex max-h-80 flex-col gap-2 overflow-auto">
      {question.options.map((option, index) => (
        <div
          key={index}
          className={`flex cursor-pointer items-center gap-3 rounded-lg border border-[#E4E7EC] p-4 ${selectedOptions.includes(option.label) ? "bg-[#F9FAFB]" : "bg-white"}`}
          onClick={() =>
            handleSelect(
              question.title,
              option.label,
              !selectedOptions.includes(option.label),
            )
          }
        >
          <input
            type="checkbox"
            name={question.title}
            value={option.label}
            checked={selectedOptions.includes(option.label)}
            readOnly
          />
          <div className="flex flex-col">
            <label className="cursor-pointer leading-none text-[#101828]">
              {option.label}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Selection;
