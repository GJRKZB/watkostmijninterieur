import { useFormContext } from "@/app/context/FormContext";

export const Rooms: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    let updatedRooms = [...formData.rooms];

    if (checked) {
      updatedRooms.push({
        name: value,
        floors: [],
        sizes: [],
        windowDecoration: [],
      });
    } else {
      updatedRooms = updatedRooms.filter((room) => room.name !== value);
    }

    updateFormData({ rooms: updatedRooms });
  };

  return (
    <div>
      <h1>Which rooms do you want to decorate?</h1>
      {["Livingroom", "Bathroom", "Bedroom"].map((room) => (
        <label key={room}>
          <input
            type="checkbox"
            name="room"
            value={room}
            checked={formData.rooms.some((r) => r.name === room)}
            onChange={handleChange}
          />
          {room}
        </label>
      ))}
    </div>
  );
};
