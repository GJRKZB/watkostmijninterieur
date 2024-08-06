import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { RadioGroup, Radio, cn, ScrollShadow, Chip } from "@nextui-org/react";

export const Floors: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (roomSelected: string, selectedFloors: string) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        return { ...room, floors: [selectedFloors] };
      }
      return room;
    });
    updateFormData({ rooms: updatedRooms });
  };
  return (
    <>
      <h1 className="font-sans text-xl font-bold">{Questions[1].text}</h1>
      <ScrollShadow>
        <div className="flex flex-col gap-4">
          {formData.rooms.map((room) => (
            <div className="flex flex-col gap-2" key={room.rooms}>
              <Chip size="md" color="primary" variant="solid">
                {room.rooms}
              </Chip>
              <RadioGroup
                value={room.floors[0] || ""}
                onValueChange={(selectedFloors) =>
                  handleChange(room.rooms, selectedFloors)
                }
              >
                {Questions[1].options.map((floorType) => (
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
                    key={floorType}
                    value={floorType}
                  >
                    {floorType}
                  </Radio>
                ))}
              </RadioGroup>
            </div>
          ))}
        </div>
      </ScrollShadow>
    </>
  );
};
