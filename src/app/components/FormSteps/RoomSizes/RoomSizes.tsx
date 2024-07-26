import { useFormContext } from "@/app/context/FormContext";

export const RoomSizes: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomName: string,
    sizeType: string,
    checked: boolean
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.name === roomName) {
        let updatedSizes = [...room.sizes];
        if (checked) {
          updatedSizes.push(sizeType);
        } else {
          updatedSizes = updatedSizes.filter((size) => size !== sizeType);
        }
        return { ...room, sizes: updatedSizes };
      }
      return room;
    });

    updateFormData({ rooms: updatedRooms });
  };

  const sizeTypes = [
    "Small (15 m² - 20 m²)",
    "Mid-sized (20 m² - 30 m²)",
    "Big (30 m² - 50 m²)",
  ];

  return (
    <div>
      <h1>What is the average m² for each selected room?</h1>
      {formData.rooms.map((room) => (
        <div key={room.name}>
          <h2>{room.name}</h2>
          {sizeTypes.map((sizeType) => (
            <label key={sizeType}>
              <input
                type="checkbox"
                name={`size-${room.name}`}
                value={sizeType}
                checked={room.sizes.includes(sizeType)}
                onChange={(e) =>
                  handleChange(room.name, sizeType, e.target.checked)
                }
              />
              {sizeType}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};
