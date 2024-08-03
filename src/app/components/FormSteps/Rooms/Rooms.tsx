import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { CheckboxGroup, Checkbox, cn } from "@nextui-org/react";

export const Rooms: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (selectedRooms: string[]) => {
    const updatedRooms = selectedRooms.map((room) => ({
      rooms: room,
      floors: [],
      sizes: [],
      windowDecoration: [],
      windowDecorationDetails: [],
      amountWindows: "",
      windowSizes: [],
      curtainSizes: [],
      furniture: [],
      furnitureQuality: [],
    }));

    updateFormData({ rooms: updatedRooms });
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-sans text-xl font-bold">{Questions[0].text}</h1>
      <CheckboxGroup
        value={formData.rooms.map((room) => room.rooms)}
        onValueChange={handleChange}
      >
        {Questions[0].options.map((room) => (
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
            key={room}
            value={room}
          >
            {room}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
};
