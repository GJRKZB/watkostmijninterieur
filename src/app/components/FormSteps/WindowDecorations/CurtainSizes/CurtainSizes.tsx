import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

interface ICurtainSizesProps {
  roomName: string;
}

export const CurtainSizes: React.FC<ICurtainSizesProps> = ({ roomName }) => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    selectedCurtainSizes: string[],
  ) => {
    const updatedRoom = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        return { ...room, curtainSizes: selectedCurtainSizes };
      }
      return room;
    });
    updateFormData({ rooms: updatedRoom });
  };

  const room = formData.rooms.find((room) => room.rooms === roomName);

  if (!room) {
    return null;
  }

  return (
    <div>
      <h1>{Questions[12].text}</h1>
      <CheckboxGroup
        value={room.curtainSizes}
        onValueChange={(selectedCurtainSizes) =>
          handleChange(room.rooms, selectedCurtainSizes)
        }
      >
        {Questions[12].options.map((curtainSize) => (
          <Checkbox key={curtainSize} value={curtainSize}>
            {curtainSize}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
};
