import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";

export const RoomSizes: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    sizeType: string,
    checked: boolean
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
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

  return (
    <div>
      <h1>{Questions[2].text}</h1>
      {formData.rooms.map((room) => (
        <div key={room.rooms}>
          <h2>{room.rooms}</h2>
          {Questions[2].options.map((sizeType) => (
            <label key={sizeType}>
              <input
                type="checkbox"
                name={`size-${room.rooms}`}
                value={sizeType}
                checked={room.sizes.includes(sizeType)}
                onChange={(e) =>
                  handleChange(room.rooms, sizeType, e.target.checked)
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
