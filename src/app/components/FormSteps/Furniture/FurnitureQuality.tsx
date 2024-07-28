import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";

interface IFurnitureQualityProps {
  roomName: string;
}

export const FurnitureQuality: React.FC<IFurnitureQualityProps> = ({
  roomName,
}) => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    furnitureQuality: string,
    checked: boolean
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        let updatedFurnitureQuality = [...room.furnitureQuality];
        if (checked) {
          updatedFurnitureQuality.push(furnitureQuality);
        } else {
          updatedFurnitureQuality = updatedFurnitureQuality.filter(
            (quality) => quality !== furnitureQuality
          );
        }
        return {
          ...room,
          furnitureQuality: updatedFurnitureQuality,
        };
      }
      return room;
    });
    updateFormData({ rooms: updatedRooms });
  };

  return (
    <div>
      <h1>{Questions[14].text}</h1>
      {formData.rooms
        .filter((room) => room.rooms === roomName)
        .map((room) => (
          <div key={room.rooms}>
            {Questions[14].options.map((quality) => (
              <label key={quality}>
                <input
                  type="checkbox"
                  name={`furnitureQuality-${room.rooms}`}
                  value={quality}
                  checked={room.furnitureQuality.includes(quality)}
                  onChange={(e) =>
                    handleChange(room.rooms, quality, e.target.checked)
                  }
                />
                {quality}
              </label>
            ))}
          </div>
        ))}
    </div>
  );
};
