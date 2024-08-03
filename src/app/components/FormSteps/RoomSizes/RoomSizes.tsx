import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

export const RoomSizes: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (roomSelected: string, selectedSizes: string[]) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        return { ...room, sizes: selectedSizes };
      }
      return room;
    });
    updateFormData({ rooms: updatedRooms });
  };

  return (
    <div>
      <h1>{Questions[2].text}</h1>
      {formData.rooms.map((room) => (
        <div key={room.rooms}>
          <h2>{room.rooms}</h2>
          <CheckboxGroup
            value={room.sizes}
            onValueChange={(selectedSizes) =>
              handleChange(room.rooms, selectedSizes)
            }
          >
            {Questions[2].options.map((sizeType) => (
              <Checkbox key={sizeType} value={sizeType}>
                {sizeType}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>
      ))}
    </div>
  );
};
