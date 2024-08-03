import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

export const Floors: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (roomSelected: string, selectedFloors: string[]) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        return { ...room, floors: selectedFloors };
      }
      return room;
    });
    updateFormData({ rooms: updatedRooms });
  };
  return (
    <div>
      <h1>{Questions[1].text}</h1>
      {formData.rooms.map((room) => (
        <div key={room.rooms}>
          <h2>{room.rooms}</h2>
          <CheckboxGroup
            value={room.floors}
            onValueChange={(selectedFloors) =>
              handleChange(room.rooms, selectedFloors)
            }
          >
            {Questions[1].options.map((floorType) => (
              <Checkbox key={floorType} value={floorType}>
                {floorType}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>
      ))}
    </div>
  );
};
