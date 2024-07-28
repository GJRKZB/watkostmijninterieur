import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { FurnitureQuality } from "./FurnitureQuality";

export const Furniture: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    furniture: string,
    checked: boolean
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        let updatedFurniture = [...room.furniture];
        if (checked) {
          updatedFurniture.push(furniture);
        } else {
          updatedFurniture = updatedFurniture.filter(
            (item) => item !== furniture
          );
        }
        return {
          ...room,
          furniture: updatedFurniture,
        };
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
          {Questions[13].options.map((furniture) => (
            <label key={furniture}>
              <input
                type="checkbox"
                name={`furniture-${room.rooms}`}
                value={furniture}
                checked={room.furniture.includes(furniture)}
                onChange={(e) =>
                  handleChange(room.rooms, furniture, e.target.checked)
                }
              />
              {furniture}
            </label>
          ))}
          {room.furniture.length > 0 &&
            !room.furniture.includes("No furniture") && (
              <FurnitureQuality roomName={room.rooms} />
            )}
        </div>
      ))}
    </div>
  );
};
