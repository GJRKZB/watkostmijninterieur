import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";

interface IWindowSizesProps {
  roomName: string;
}

export const WindowSizes: React.FC<IWindowSizesProps> = ({ roomName }) => {
  const { formData, updateFormData } = useFormContext();

  const currentRoom = formData.rooms.find((room) => room.rooms === roomName);
  const amountWindows = currentRoom ? currentRoom.amountWindows[0] : "";

  const handleChange = (
    windowIndex: number,
    windowSize: string,
    checked: boolean
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomName) {
        let updatedWindowSizes = [...(room.windowSizes || [])];
        if (checked) {
          updatedWindowSizes[windowIndex] = windowSize;
        } else {
          updatedWindowSizes[windowIndex] = "";
        }
        return { ...room, windowSizes: updatedWindowSizes };
      }
      return room;
    });
    updateFormData({ rooms: updatedRooms });
  };

  return (
    <div>
      <h1>{Questions[11].text}</h1>
      {Array.from({ length: parseInt(amountWindows || "") }).map((_, index) => (
        <div key={index}>
          <p>Window {index + 1}</p>
          {Questions[11].options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                name={`windowSizes-${roomName}-${index}`}
                value={option}
                checked={currentRoom?.windowSizes?.[index] === option}
                onChange={(e) => handleChange(index, option, e.target.checked)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};
