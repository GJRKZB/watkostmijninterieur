import Selection from "./Selection";

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
  handleSelectedCheckbox: (index: number) => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  currentQuestionIndex,
  currentOptions,
  handleNextQuestion,
  handleBackQuestion,
  handleSelectedCheckbox,
}) => {
  return (
    <div className="flex justify-center w-full items-center relative z-10">
      <div className="w-9/12 max-w-[796px] flex-col gap-4 flex">
        <div className="flex flex-col bg-white p-8 rounded-[32px] shadow-lg h-fit gap-2">
          <h1 className="text-xl font-bold w-full text-[#101828]">{title}</h1>
          <p className="text-[#667085]">{description}</p>
          <Selection
            options={currentOptions}
            handleSelectedCheckbox={handleSelectedCheckbox}
          />
        </div>
        <div className="flex justify-between w-full">
          {currentQuestionIndex > 0 && (
            <button
              className="bg-[#020246] p-3 text-white rounded-lg shadow-lg right-0 w-28"
              onClick={handleBackQuestion}
            >
              Back
            </button>
          )}
          <button
            onClick={handleNextQuestion}
            className="bg-[#020246] p-3 text-white rounded-lg shadow-lg w-28 ml-auto mr-0"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
