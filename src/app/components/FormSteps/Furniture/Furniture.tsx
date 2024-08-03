import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { FurnitureQuality } from "./FurnitureQuality";
import { CheckboxGroup, Checkbox, cn } from "@nextui-org/react";

export const Furniture: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (roomSelected: string, selectedFurniture: string[]) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        return { ...room, furniture: selectedFurniture };
      }
      return room;
    });
    updateFormData({ rooms: updatedRooms });
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-sans text-xl font-bold">{Questions[13].text}</h1>
      {formData.rooms.map((room) => (
        <div key={room.rooms}>
          <h2>{room.rooms}</h2>
          <CheckboxGroup
            value={room.furniture}
            onValueChange={(selectedFurniture) =>
              handleChange(room.rooms, selectedFurniture)
            }
          >
            {Questions[13].options.map((furniture) => (
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
                key={furniture}
                value={furniture}
              >
                {furniture}
              </Checkbox>
            ))}
          </CheckboxGroup>
          {room.furniture.length > 0 &&
            !room.furniture.includes("No furniture") && (
              <FurnitureQuality roomName={room.rooms} />
            )}
        </div>
      ))}
    </div>
  );
};
