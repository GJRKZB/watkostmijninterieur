import { Option } from "@/app/data/Questions";

interface SelectionProps {
  options: Option[];
  handleSelect: (index: number) => void;
}

const Selection: React.FC<SelectionProps> = ({ options, handleSelect }) => {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option, index) => (
        <div
          key={index}
          className="flex gap-3 border border-[#E4E7EC] rounded-lg p-4 items-center cursor-pointer"
          onClick={() => handleSelect(index)}
        >
          <input type="checkbox" />
          <div className="flex flex-col">
            <label className="leading-none text-[#101828] cursor-pointer">
              {option.label}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Selection;
