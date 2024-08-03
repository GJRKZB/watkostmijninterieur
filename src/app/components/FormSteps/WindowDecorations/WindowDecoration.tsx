import { useFormContext } from "@/app/context/FormContext";
import { WindowDecorationDetails } from "./WindowDecorationDetails/WindowDecorationDetails";
import { Questions } from "@/app/data/Questions";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

export const WindowDecoration: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    selectedWindowDecorations: string[],
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        return { ...room, windowDecoration: selectedWindowDecorations };
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
          <CheckboxGroup
            value={room.windowDecoration}
            onValueChange={(selectedWindowDecorations) =>
              handleChange(room.rooms, selectedWindowDecorations)
            }
          >
            {Questions[3].options.map((WindowDecorationProduct) => (
              <Checkbox
                key={WindowDecorationProduct}
                value={WindowDecorationProduct}
              >
                {WindowDecorationProduct}
              </Checkbox>
            ))}
          </CheckboxGroup>
          <WindowDecorationDetails roomName={room.rooms} />
        </div>
      ))}
    </div>
  );
};
