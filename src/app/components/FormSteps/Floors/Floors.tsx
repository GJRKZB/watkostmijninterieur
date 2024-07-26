import { useFormContext } from "@/app/context/FormContext";

export const Floors: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomName: string,
    floorType: string,
    checked: boolean
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.name === roomName) {
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

  const floorTypes = ["Hardwood", "Carpet", "Tile"];

  return (
    <div>
      <h1>What type of floor do you have in each room?</h1>
      {formData.rooms.map((room) => (
        <div key={room.name}>
          <h2>{room.name}</h2>
          {floorTypes.map((floorType) => (
            <label key={floorType}>
              <input
                type="checkbox"
                name={`floor-${room.name}`}
                value={floorType}
                checked={room.floors.includes(floorType)}
                onChange={(e) =>
                  handleChange(room.name, floorType, e.target.checked)
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
