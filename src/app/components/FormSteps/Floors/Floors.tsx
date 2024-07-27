import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";

export const Floors: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    floorType: string,
    checked: boolean
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        let updatedFloors = [...room.floors];
        if (checked) {
          updatedFloors.push(floorType);
        } else {
          updatedFloors = updatedFloors.filter((floor) => floor !== floorType);
        }
        return { ...room, floors: updatedFloors };
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
          {Questions[1].options.map((floorType) => (
            <label key={floorType}>
              <input
                type="checkbox"
                name={`floor-${room.rooms}`}
                value={floorType}
                checked={room.floors.includes(floorType)}
                onChange={(e) =>
                  handleChange(room.rooms, floorType, e.target.checked)
                }
              />
              {floorType}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};
