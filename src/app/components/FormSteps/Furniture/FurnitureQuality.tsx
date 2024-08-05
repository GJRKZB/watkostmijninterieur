import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { CheckboxGroup, Checkbox, cn } from "@nextui-org/react";

interface IFurnitureQualityProps {
  roomName: string;
}

export const FurnitureQuality: React.FC<IFurnitureQualityProps> = ({
  roomName,
}) => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    selectedInbetweensQuality: string[],
  ) => {
    const updatedRoom = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        return { ...room, furnitureQuality: selectedInbetweensQuality };
      }
      return room;
    });
    updateFormData({ rooms: updatedRoom });
  };

  const room = formData.rooms.find((room) => room.rooms === roomName);

  if (!room) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-col gap-4">
      <h1 className="font-sans text-xl font-bold">{Questions[14].text}</h1>
      <CheckboxGroup
        value={room.furnitureQuality}
        onValueChange={(selectedInbetweensQuality) =>
          handleChange(room.rooms, selectedInbetweensQuality)
        }
      >
        {Questions[14].options.map((quality) => (
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
            key={quality}
            value={quality}
          >
            {quality}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
};
