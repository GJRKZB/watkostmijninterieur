import { Option } from "@/app/data/questions";

interface SelectionProps {
  options: Option[];
  handleSelect: (index: number) => void;
}

const Selection: React.FC<SelectionProps> = ({ options, handleSelect }) => {
  return (
    <div className="flex max-h-80 flex-col gap-2 overflow-auto">
      {options.map((option, index) => (
        <div
          key={index}
          className={`flex cursor-pointer items-center gap-3 rounded-lg border border-[#E4E7EC] p-4 ${option.checked ? "bg-[#F9FAFB]" : "bg-white"}`}
          onClick={() => handleSelect(index)}
        >
          <input type="checkbox" checked={option.checked} readOnly />
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
