import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { FurnitureQuality } from "./FurnitureQuality";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

export const Furniture: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (roomSelected: string, selectedFurniture: string[]) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        return { ...room, furniture: selectedFurniture };
      }
      return room;
    });
    updateFormData({ rooms: updatedRooms });
  };

  return (
    <div>
      <h1>{Questions[13].text}</h1>
      {formData.rooms.map((room) => (
        <div key={room.rooms}>
          <h2>{room.rooms}</h2>
          <CheckboxGroup
            value={room.furniture}
            onValueChange={(selectedFurniture) =>
              handleChange(room.rooms, selectedFurniture)
            }
          >
            {Questions[13].options.map((furniture) => (
              <Checkbox key={furniture} value={furniture}>
                {furniture}
              </Checkbox>
            ))}
          </CheckboxGroup>
          {room.furniture.length > 0 &&
            !room.furniture.includes("No furniture") && (
              <FurnitureQuality roomName={room.rooms} />
            )}
        </div>
      ))}
    </div>
  );
};
