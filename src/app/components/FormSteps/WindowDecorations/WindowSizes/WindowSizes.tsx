import React from "react";
import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

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
    <div>
      <h1>{Questions[11].text}</h1>
      {Array.from({ length: parseInt(amountWindows || "0") }).map(
        (_, windowIndex) => (
          <div key={windowIndex}>
            <CheckboxGroup
              label={`Window ${windowIndex + 1} Size`}
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
                <Checkbox key={option} value={option}>
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
