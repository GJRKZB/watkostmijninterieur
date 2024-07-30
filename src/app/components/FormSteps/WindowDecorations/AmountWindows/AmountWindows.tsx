import React from "react";
import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { WindowSizes } from "../WindowSizes/WindowSizes";

interface IAmountWindowsProps {
  roomName: string;
}

export const AmountWindows: React.FC<IAmountWindowsProps> = ({ roomName }) => {
  const { formData, updateFormData } = useFormContext();

  const currentRoom = formData.rooms.find((room) => room.rooms === roomName);
  const currentValue = currentRoom?.amountWindows[0];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomName) {
        return {
          ...room,
          amountWindows: [selectedValue],
        };
      }
      return room;
    });
    updateFormData({ rooms: updatedRooms });
  };

  return (
    <div>
      <h1>{Questions[10].text}</h1>
      <select onChange={handleChange} value={currentValue || ""}>
        <option value="" disabled>
          Select an option
        </option>
        {Questions[10].options.map((amountWindows) => (
          <option key={amountWindows} value={amountWindows}>
            {amountWindows}
          </option>
        ))}
      </select>
      <WindowSizes roomName={roomName} />
    </div>
  );
};
