import { useFormContext } from "@/app/context/FormContext";
import { WindowDecorationDetails } from "./WindowDecorationDetails/WindowDecorationDetails";
import { Questions } from "@/app/data/Questions";

export const WindowDecoration: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    windowDecorationProduct: string,
    checked: boolean
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        let updatedWindowDecorations = [...room.windowDecoration];
        if (checked) {
          updatedWindowDecorations.push(windowDecorationProduct);
        } else {
          updatedWindowDecorations = updatedWindowDecorations.filter(
            (windowDecoration) => windowDecoration !== windowDecorationProduct
          );
        }
        return {
          ...room,
          windowDecoration: updatedWindowDecorations,
        };
      }
      return room;
    });

    updateFormData({ rooms: updatedRooms });
  };

  return (
    <div>
      <h1>{Questions[3].text}</h1>
      {formData.rooms.map((room) => (
        <div key={room.rooms}>
          <h2>{room.rooms}</h2>
          {Questions[3].options.map((windowDecorationProduct) => (
            <label key={windowDecorationProduct}>
              <input
                type="checkbox"
                name={`windowDecoration-${room.rooms}`}
                value={windowDecorationProduct}
                checked={room.windowDecoration.includes(
                  windowDecorationProduct
                )}
                onChange={(e) =>
                  handleChange(
                    room.rooms,
                    windowDecorationProduct,
                    e.target.checked
                  )
                }
              />
              {windowDecorationProduct}
            </label>
          ))}
          <WindowDecorationDetails
            windowDecoration={room.windowDecoration}
            roomName={room.rooms}
          />
        </div>
      ))}
    </div>
  );
};
