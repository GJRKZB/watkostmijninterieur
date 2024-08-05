import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";
import { CheckboxGroup, Checkbox, cn } from "@nextui-org/react";

interface ICurtainSizesProps {
  roomName: string;
}

export const CurtainSizes: React.FC<ICurtainSizesProps> = ({ roomName }) => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    selectedCurtainSizes: string[],
  ) => {
    const updatedRoom = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        return { ...room, curtainSizes: selectedCurtainSizes };
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
    <div className="flex flex-col gap-4">
      <h1 className="font-sans text-xl font-bold">{Questions[12].text}</h1>
      <CheckboxGroup
        value={room.curtainSizes}
        onValueChange={(selectedCurtainSizes) =>
          handleChange(room.rooms, selectedCurtainSizes)
        }
      >
        {Questions[12].options.map((curtainSize) => (
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
            key={curtainSize}
            value={curtainSize}
          >
            {curtainSize}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
};
