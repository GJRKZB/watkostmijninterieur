import React from "react";
import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { CheckboxGroup, Checkbox, cn } from "@nextui-org/react";

interface IWindowSizesProps {
  roomName: string;
}

export const WindowSizes: React.FC<IWindowSizesProps> = ({ roomName }) => {
  const { formData, updateFormData } = useFormContext();

  const currentRoom = formData.rooms.find((room) => room.rooms === roomName);
  const amountWindows = currentRoom ? currentRoom.amountWindows[0] : "";
  if (!currentRoom) return null;

  const handleChange = (windowIndex: number, selectedSize: string) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomName) {
        let updatedWindowSizes = [...(room.windowSizes || [])];
        if (updatedWindowSizes[windowIndex] === selectedSize) {
          updatedWindowSizes[windowIndex] = "";
        } else {
          updatedWindowSizes[windowIndex] = selectedSize;
        }
        return { ...room, windowSizes: updatedWindowSizes };
      }
      return room;
    });
    updateFormData({ rooms: updatedRooms });
  };

  return (
    <div className="mt-4 flex flex-col gap-4">
      <h1 className="font-sans text-xl font-bold">{Questions[11].text}</h1>
      {Array.from({ length: parseInt(amountWindows || "0") }).map(
        (_, windowIndex) => (
          <div key={windowIndex}>
            <CheckboxGroup
              label={`Window ${windowIndex + 1}`}
              value={
                currentRoom?.windowSizes?.[windowIndex]
                  ? [currentRoom.windowSizes[windowIndex]]
                  : []
              }
              onValueChange={(selectedSize) =>
                handleChange(windowIndex, selectedSize[0] || "")
              }
            >
              {Questions[11].options.map((option) => (
                <Checkbox
                  classNames={{
                    base: cn(
                      "inline-flex max-w-full m-0",
                      "hover: items-center justify-start",
                      "cursor-pointer rounded-lg gap-2 p-4 border-2 border-solid",
                      "data-[selected=true]:border-primary-500 data-[selected=true]:bg-primary-50 data-[selected=true]:text-primary-600",
                    ),
                    label: "w-full font-sans font-medium",
                  }}
                  key={option}
                  value={option}
                >
                  {option}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </div>
        ),
      )}
    </div>
  );
};
