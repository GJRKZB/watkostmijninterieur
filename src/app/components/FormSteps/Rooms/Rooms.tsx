import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";

export const Rooms: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    let updatedRooms = [...formData.rooms];

    if (checked) {
      updatedRooms.push({
        rooms: value,
        floors: [],
        sizes: [],
        windowDecoration: [],
        windowDecorationDetails: [],
        amountWindows: [],
      });
    } else {
      updatedRooms = updatedRooms.filter((room) => room.rooms !== value);
    }

    updateFormData({ rooms: updatedRooms });
  };

  const rooms = ["Livingroom", "Bathroom", "Bedroom"];

  return (
    <div>
      <h1>{Questions[0].text}</h1>
      {Questions[0].options.map((room) => (
        <label key={room}>
          <input
            type="checkbox"
            name="room"
            value={room}
            checked={formData.rooms.some((r) => r.rooms === room)}
            onChange={handleChange}
          />
          {room}
        </label>
      ))}
    </div>
  );
};
