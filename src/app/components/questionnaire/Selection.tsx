interface SelectionProps {
  options: {
    label: string;
  }[];
}

const Selection: React.FC<SelectionProps> = ({ options }) => {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option, index) => (
        <div
          key={index}
          className="flex gap-3 border border-[#E4E7EC] rounded-lg p-4 items-center"
        >
          <input type="checkbox" />
          <div className="flex flex-col">
            <label className="leading-none text-[#101828]">
              {option.label}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Selection;
