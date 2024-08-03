import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { CheckboxGroup, Checkbox, cn } from "@nextui-org/react";

export const RoomSizes: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (roomSelected: string, selectedSizes: string[]) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        return { ...room, sizes: selectedSizes };
      }
      return room;
    });
    updateFormData({ rooms: updatedRooms });
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-sans text-xl font-bold">{Questions[2].text}</h1>
      {formData.rooms.map((room) => (
        <div className="flex flex-col gap-2" key={room.rooms}>
          <h2 className="font-sans text-lg font-normal">{room.rooms}</h2>
          <CheckboxGroup
            value={room.sizes}
            onValueChange={(selectedSizes) =>
              handleChange(room.rooms, selectedSizes)
            }
          >
            {Questions[2].options.map((sizeType) => (
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
                key={sizeType}
                value={sizeType}
              >
                {sizeType}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>
      ))}
    </div>
  );
};
