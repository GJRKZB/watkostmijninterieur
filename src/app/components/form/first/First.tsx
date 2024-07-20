import { IFormData, IQuestionItem } from "@/app/types/types";

interface IFirstStepProps {
  questions: IQuestionItem[];
  formData: IFormData;
  handleRoomSelection: (room: string) => void;
}

export const First: React.FC<IFirstStepProps> = ({
  questions,
  formData,
  handleRoomSelection,
}) => {
  return (
    <div>
      <h2>{questions[0].text}</h2>
      {questions[0].options.map((room) => (
        <label key={room}>
          <input
            type="checkbox"
            checked={formData.choices.some((c) => c.room === room)}
            onChange={() => handleRoomSelection(room)}
          />
          {room}
        </label>
      ))}
    </div>
  );
};
