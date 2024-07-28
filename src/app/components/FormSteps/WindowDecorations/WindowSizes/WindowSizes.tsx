import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";

interface IWindowSizesProps {
  roomName: string;
}

export const WindowSizes: React.FC<IWindowSizesProps> = ({ roomName }) => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    windowSize: string,
    checked: boolean
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        let updatedWindowSizes = [...room.windowSizes];
        if (checked) {
          updatedWindowSizes.push(windowSize);
        } else {
          updatedWindowSizes = updatedWindowSizes.filter(
            (size) => size !== windowSize
          );
        }
        return {
          ...room,
          windowSizes: updatedWindowSizes,
        };
      }
      return room;
    });

    updateFormData({ rooms: updatedRooms });
  };

  return (
    <div>
      <h1>{Questions[11].text}</h1>
      {Questions[11].options.map((windowSize) => (
        <label key={windowSize}>
          <input
            type="checkbox"
            name={`windowSizes-${roomName}`}
            value={windowSize}
            checked={formData.rooms
              .find((room) => room.rooms === roomName)
              ?.windowSizes.includes(windowSize)}
            onChange={(e) =>
              handleChange(roomName, windowSize, e.target.checked)
            }
          />
          {windowSize}
        </label>
      ))}
    </div>
  );
};
