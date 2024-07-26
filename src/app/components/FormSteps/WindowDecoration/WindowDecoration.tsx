import { useFormContext } from "@/app/context/FormContext";

export const WindowDecoration: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomName: string,
    windowDecorationType: string,
    checked: boolean
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.name === roomName) {
        let updatedWindowDecorations = [...room.windowDecoration];
        if (checked) {
          updatedWindowDecorations.push(windowDecorationType);
        } else {
          updatedWindowDecorations = updatedWindowDecorations.filter(
            (windowDecoration) => windowDecoration !== windowDecorationType
          );
        }
        return { ...room, windowDecoration: updatedWindowDecorations };
      }
      return room;
    });

    updateFormData({ rooms: updatedRooms });
  };

  const windowDecorationTypes = [
    "Curtains",
    "Wooden Blinds",
    "Aluminum Blinds",
    "Duet Curtains",
    "Pleated Curtains",
    "Roller Blinds",
    "Inbetweens",
    "No window decoration needed",
  ];

  return (
    <div>
      <h1>Which window decoration would you like choose?</h1>
      {formData.rooms.map((room) => (
        <div key={room.name}>
          <h2>{room.name}</h2>
          {windowDecorationTypes.map((windowDecorationType) => (
            <label key={windowDecorationType}>
              <input
                type="checkbox"
                name={`windowDecoration-${room.name}`}
                value={windowDecorationType}
                checked={room.windowDecoration.includes(windowDecorationType)}
                onChange={(e) =>
                  handleChange(
                    room.name,
                    windowDecorationType,
                    e.target.checked
                  )
                }
              />
              {windowDecorationType}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};
