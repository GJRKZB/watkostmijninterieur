import CompletionIcon from "../../../../public/check-icon.png";
import { IQuestion } from "@/utils/question";

interface CompletionProps {
  answers: Record<string, string[]>;
  question: IQuestion[];
}

const Completion: React.FC<CompletionProps> = ({ answers, question }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img src={CompletionIcon.src} alt="Completion Icon" />
      <h1 className="text-center text-3xl font-bold text-[#101828]">
        Completed successfully
      </h1>
      <p className="mb-4 text-center text-[#667085]">Selected answers:</p>
      {question.map((question) => (
        <div key={question.title}>
          <h3>{question.title}</h3>
          <ul>
            {answers[question.title]?.map((answer) => (
              <li key={answer}>{answer}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Completion;
