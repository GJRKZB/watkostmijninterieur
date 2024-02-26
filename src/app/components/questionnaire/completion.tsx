import CompletionIcon from "../../../../public/check-icon.png";
import { IQuestion } from "@/utils/question";

interface CompletionProps {
  answers: Record<string, string[]>;
  questions: IQuestion[];
}

const Completion: React.FC<CompletionProps> = ({ answers, questions }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 overflow-auto">
      <img src={CompletionIcon.src} alt="Completion Icon" />
      <h1 className="text-center text-3xl font-bold text-[#101828]">
        Completed successfully
      </h1>
      <div className="flex max-h-72 w-full flex-col gap-4 overflow-auto">
        <p className="text-center text-[#667085]">Selected answers:</p>
        {questions.map((question) => (
          <div
            key={question.title}
            className="flex w-full flex-col text-center"
          >
            <h3 className="font-bold">{question.title}</h3>
            <ul>
              {answers[question.title]?.map((answer) => (
                <li key={answer}>{answer}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Completion;
