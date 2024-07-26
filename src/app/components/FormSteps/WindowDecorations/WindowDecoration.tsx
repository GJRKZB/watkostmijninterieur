import { useFormContext } from "@/app/context/FormContext";
import { WindowDecorationDetails } from "./WindowDecorationDetails/WindowDecorationDetails";

export const WindowDecoration: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomName: string,
    windowDecorationProduct: string,
    checked: boolean
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.name === roomName) {
        let updatedWindowDecorations = [...room.windowDecoration];
        let updatedWindowDecorationDetails = [...room.windowDecorationDetails];
        if (checked) {
          updatedWindowDecorations.push(windowDecorationProduct);
          updatedWindowDecorationDetails.push(windowDecorationProduct);
        } else {
          updatedWindowDecorations = updatedWindowDecorations.filter(
            (windowDecoration) => windowDecoration !== windowDecorationProduct
          );
          updatedWindowDecorationDetails =
            updatedWindowDecorationDetails.filter(
              (detail) => detail !== windowDecorationProduct
            );
        }
        return {
          ...room,
          windowDecoration: updatedWindowDecorations,
          windowDecorationDetails: updatedWindowDecorationDetails,
        };
      }
      return room;
    });

    updateFormData({ rooms: updatedRooms });
  };

  const windowDecorationProducts = [
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
      <h1>Which window decoration would you like to choose?</h1>
      {formData.rooms.map((room) => (
        <div key={room.name}>
          <h2>{room.name}</h2>
          {windowDecorationProducts.map((windowDecorationProduct) => (
            <label key={windowDecorationProduct}>
              <input
                type="checkbox"
                name={`windowDecoration-${room.name}`}
                value={windowDecorationProduct}
                checked={room.windowDecoration.includes(
                  windowDecorationProduct
                )}
                onChange={(e) =>
                  handleChange(
                    room.name,
                    windowDecorationProduct,
                    e.target.checked
                  )
                }
              />
              {windowDecorationProduct}
            </label>
          ))}
          <WindowDecorationDetails room={room} />
        </div>
      ))}
    </div>
  );
};
