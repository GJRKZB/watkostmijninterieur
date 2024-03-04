import CompletionIcon from "@/../public/check-icon.png";

export interface ICompletionProps {
  answers?: { questionTitle: string; selectedOptions: string[] }[];
}

const Completion: React.FC<ICompletionProps> = ({ answers }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 overflow-auto">
      <img src={CompletionIcon.src} alt="Completion Icon" />
      <h1 className="text-center text-3xl font-bold text-[#101828]">
        Completed successfully
      </h1>
      <div className="flex max-h-72 w-full flex-col gap-4 overflow-auto">
        <p className="text-center text-[#667085]">Selected answers:</p>
        {answers?.map((answer) => (
          <div
            key={answer.questionTitle}
            className="flex w-full flex-col text-center"
          >
            <h3 className="font-bold">{answer.questionTitle}</h3>
            <ul>
              {answer.selectedOptions.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Completion;
