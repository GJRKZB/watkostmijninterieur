import Selection from "./selection";

interface CardProps {
  title: string;
  description: string;
  currentQuestionIndex: number;
  currentOptions: {
    label: string;
    checked: boolean;
  }[];
  handleNextQuestion: () => void;
  handleBackQuestion: () => void;
  handleSelect: (index: number) => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  currentQuestionIndex,
  currentOptions,
  handleNextQuestion,
  handleBackQuestion,
  handleSelect,
}) => {
  return (
    <div className="relative z-10 flex w-full items-center justify-center">
      <div className="flex w-9/12 max-w-[796px] flex-col gap-4">
        <div className="flex h-fit flex-col gap-2 rounded-[32px] bg-white p-8 shadow-lg">
          <h1 className="w-full text-xl font-bold text-[#101828]">{title}</h1>
          <p className="text-[#667085]">{description}</p>
          <Selection options={currentOptions} handleSelect={handleSelect} />
        </div>
        <div className="flex w-full justify-between">
          {currentQuestionIndex > 0 && (
            <button
              className="right-0 w-28 rounded-lg bg-[#020246] p-3 text-white shadow-lg"
              onClick={handleBackQuestion}
            >
              Back
            </button>
          )}
          <button
            onClick={handleNextQuestion}
            className="ml-auto mr-0 w-28 rounded-lg bg-[#020246] p-3 text-white shadow-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
