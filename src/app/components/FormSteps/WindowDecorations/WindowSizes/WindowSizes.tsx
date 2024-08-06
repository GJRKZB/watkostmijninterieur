import React from "react";
import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { RadioGroup, Radio, cn } from "@nextui-org/react";

interface IWindowSizesProps {
  roomName: string;
}

export const WindowSizes: React.FC<IWindowSizesProps> = ({ roomName }) => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    windowIndex: number,
    selectedSize: string,
  ) => {
    const updatedRoom = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        const updatedWindowSizes = [...(room.windowSizes || [])];
        updatedWindowSizes[windowIndex] = selectedSize;
        return {
          ...room,
          windowSizes: updatedWindowSizes,
        };
      }
      return room;
    });
    updateFormData({ rooms: updatedRoom });
  };

  const room = formData.rooms.find((room) => room.rooms === roomName);
  const amountWindows = room ? parseInt(room.amountWindows[0] || "0") : 0;

  if (!room) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-col gap-4">
      <h1 className="font-sans text-xl font-bold">{Questions[11].text}</h1>
      {Array.from({ length: amountWindows }).map((_, windowIndex) => (
        <div key={windowIndex}>
          <RadioGroup
            label={`Window ${windowIndex + 1}`}
            value={room.windowSizes?.[windowIndex] || ""}
            onValueChange={(selectedSize) =>
              handleChange(room.rooms, windowIndex, selectedSize)
            }
          >
            {Questions[11].options.map((option) => (
              <Radio
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
              </Radio>
            ))}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
};
