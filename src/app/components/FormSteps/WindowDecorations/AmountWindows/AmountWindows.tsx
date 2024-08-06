import React from "react";
import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { WindowSizes } from "../WindowSizes/WindowSizes";
import { Select, SelectItem } from "@nextui-org/react";

interface IAmountWindowsProps {
  roomName: string;
}

export const AmountWindows: React.FC<IAmountWindowsProps> = ({ roomName }) => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (roomSelected: string, newAmountWindows: string) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        const newWindowCount = parseInt(newAmountWindows);
        return {
          ...room,
          amountWindows: [newAmountWindows],
          windowSizes: Array(newWindowCount).fill(""),
        };
      }
      return room;
    });
    updateFormData({ rooms: updatedRooms });
  };

  const room = formData.rooms.find((room) => room.rooms === roomName);

  if (!room) {
    return null;
  }

  const selectedAmount =
    room.amountWindows && room.amountWindows.length > 0
      ? room.amountWindows[0]
      : "";

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-sans text-xl font-bold">{Questions[10].text}</h1>
      <div>
        <Select
          label="Select an option"
          variant="bordered"
          selectedKeys={selectedAmount ? [selectedAmount] : []}
          onSelectionChange={(keys) => {
            const selected = Array.from(keys)[0] as string;
            handleChange(room.rooms, selected);
          }}
        >
          {Questions[10].options.map((amountWindows) => (
            <SelectItem key={amountWindows} value={amountWindows}>
              {amountWindows}
            </SelectItem>
          ))}
        </Select>
        <WindowSizes roomName={roomName} />
      </div>
    </div>
  );
};
