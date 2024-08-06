import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { FurnitureQuality } from "./FurnitureQuality";
import { RadioGroup, Radio, cn, ScrollShadow, Chip } from "@nextui-org/react";

export const Furniture: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (roomSelected: string, selectedFurniture: string) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        return { ...room, furniture: [selectedFurniture] };
      }
      return room;
    });
    updateFormData({ rooms: updatedRooms });
  };

  return (
    <>
      <h1 className="font-sans text-xl font-bold">{Questions[13].text}</h1>
      <ScrollShadow>
        <div className="flex flex-col gap-4">
          {formData.rooms.map((room) => (
            <div className="flex flex-col gap-2" key={room.rooms}>
              <Chip size="md" color="primary" variant="solid">
                {room.rooms}
              </Chip>
              <RadioGroup
                value={room.furniture[0] || ""}
                onValueChange={(selectedFurniture) =>
                  handleChange(room.rooms, selectedFurniture)
                }
              >
                {Questions[13].options.map((furniture) => (
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
                    key={furniture}
                    value={furniture}
                  >
                    {furniture}
                  </Radio>
                ))}
              </RadioGroup>
              {room.furniture.length > 0 &&
                !room.furniture.includes("No furniture") && (
                  <FurnitureQuality roomName={room.rooms} />
                )}
            </div>
          ))}
        </div>
      </ScrollShadow>
    </>
  );
};
