import { useFormContext } from "@/app/context/FormContext";

export const Rooms: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const currentFloors = formData.rooms || [];

    if (checked) {
      updateFormData({ rooms: [...currentFloors, value] });
    } else {
      updateFormData({ rooms: currentFloors.filter((room) => room !== value) });
    }
  };

  console.log(formData);

  return (
    <div>
      <h1>Which room do you like to decorate?</h1>
      <label>
        <input
          type="checkbox"
          name="room"
          value="Livingroom"
          checked={formData.rooms?.includes("Livingroom") || false}
          onChange={handleChange}
        />
        Hardwood
      </label>
      <label>
        <input
          type="checkbox"
          name="room"
          value="Bathroom"
          checked={formData.rooms?.includes("Bathroom") || false}
          onChange={handleChange}
        />
        Carpet
      </label>
      <label>
        <input
          type="checkbox"
          name="room"
          value="Bedroom"
          checked={formData.rooms?.includes("Bedroom") || false}
          onChange={handleChange}
        />
        Tile
      </label>
    </div>
  );
};
