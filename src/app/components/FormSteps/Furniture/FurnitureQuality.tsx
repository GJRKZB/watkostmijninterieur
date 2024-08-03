import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

interface IFurnitureQualityProps {
  roomName: string;
}

export const FurnitureQuality: React.FC<IFurnitureQualityProps> = ({
  roomName,
}) => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    selectedInbetweensQuality: string[],
  ) => {
    const updatedRoom = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        return { ...room, furnitureQuality: selectedInbetweensQuality };
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
      <h1>{Questions[14].text}</h1>
      <CheckboxGroup
        value={room.furnitureQuality}
        onValueChange={(selectedInbetweensQuality) =>
          handleChange(room.rooms, selectedInbetweensQuality)
        }
      >
        {Questions[14].options.map((quality) => (
          <Checkbox key={quality} value={quality}>
            {quality}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
};
