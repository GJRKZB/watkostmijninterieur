import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";

interface ICurtainSizesProps {
  roomName: string;
}

export const CurtainSizes: React.FC<ICurtainSizesProps> = ({ roomName }) => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    curtainSize: string,
    checked: boolean
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        let updatedCurtainSizes = [...room.curtainSizes];
        if (checked) {
          updatedCurtainSizes.push(curtainSize);
        } else {
          updatedCurtainSizes = updatedCurtainSizes.filter(
            (size) => size !== curtainSize
          );
        }
        return {
          ...room,
          curtainSizes: updatedCurtainSizes,
        };
      }
      return room;
    });

    updateFormData({ rooms: updatedRooms });
  };

  return (
    <div>
      <h1>{Questions[12].text}</h1>
      {Questions[12].options.map((curtainSize) => (
        <label key={curtainSize}>
          <input
            type="checkbox"
            name={`curtainSizes-${roomName}`}
            value={curtainSize}
            checked={formData.rooms
              .find((room) => room.rooms === roomName)
              ?.curtainSizes.includes(curtainSize)}
            onChange={(e) =>
              handleChange(roomName, curtainSize, e.target.checked)
            }
          />
          {curtainSize}
        </label>
      ))}
    </div>
  );
};
