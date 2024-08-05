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
        return { ...room, amountWindows: newAmountWindows };
      }
      return room;
    });
    updateFormData({ rooms: updatedRooms });
  };

  const room = formData.rooms.find((room) => room.rooms === roomName);

  if (!room) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-sans text-xl font-bold">{Questions[10].text}</h1>
      <div>
        <Select
          label="Select an option"
          variant="bordered"
          selectedKeys={room.amountWindows}
          onChange={(event) => handleChange(room.rooms, event.target.value)}
          value={room.amountWindows}
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
