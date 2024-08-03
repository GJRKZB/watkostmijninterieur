import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

export const Rooms: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (selectedRooms: string[]) => {
    const updatedRooms = selectedRooms.map((room) => ({
      rooms: room,
      floors: [],
      sizes: [],
      windowDecoration: [],
      windowDecorationDetails: [],
      amountWindows: [],
      windowSizes: [],
      curtainSizes: [],
      furniture: [],
      furnitureQuality: [],
    }));

    updateFormData({ rooms: updatedRooms });
  };

  return (
    <div>
      <h1>{Questions[0].text}</h1>
      <CheckboxGroup
        value={formData.rooms.map((room) => room.rooms)}
        onValueChange={handleChange}
      >
        {Questions[0].options.map((room) => (
          <Checkbox key={room} value={room}>
            {room}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
};
