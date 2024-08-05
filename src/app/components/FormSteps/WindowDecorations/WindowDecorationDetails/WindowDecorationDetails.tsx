import { useFormContext } from "@/app/context/FormContext";
import { AmountWindows } from "../AmountWindows/AmountWindows";
import { CurtainSizes } from "../CurtainSizes/CurtainSizes";
import { Questions } from "@/app/data/Questions";
import { CheckboxGroup, Checkbox, cn } from "@nextui-org/react";
import { WindowSizes } from "../WindowSizes/WindowSizes";

interface IWindowDecorationDetailsProps {
  roomName: string;
}

export const WindowDecorationDetails: React.FC<
  IWindowDecorationDetailsProps
> = ({ roomName }) => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    selectedWindowDecorationDetails: string[],
  ) => {
    const updatedRoom = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        return {
          ...room,
          windowDecorationDetails: selectedWindowDecorationDetails,
        };
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
      {room.windowDecoration.includes("Curtains") && (
        <div className="flex flex-col gap-4">
          <h1 className="font-sans text-xl font-bold">{Questions[7].text}</h1>
          <CheckboxGroup
            value={room.windowDecorationDetails}
            onValueChange={(selectedCurtainQuality) =>
              handleChange(room.rooms, selectedCurtainQuality)
            }
          >
            {Questions[7].options.map((option) => (
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
                key={option}
                value={option}
              >
                {option}
              </Checkbox>
            ))}
          </CheckboxGroup>
          {room.windowDecorationDetails.length > 0 && (
            <CurtainSizes roomName={roomName} />
          )}
        </div>
      )}
      {room.windowDecoration.includes("Inbetweens") && (
        <div className="flex flex-col gap-4">
          <h1>{Questions[4].text}</h1>
          <CheckboxGroup
            value={room.windowDecorationDetails}
            onValueChange={(selectedInbetweensQuality) =>
              handleChange(room.rooms, selectedInbetweensQuality)
            }
          >
            {Questions[4].options.map((option) => (
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
                key={option}
                value={option}
              >
                {option}
              </Checkbox>
            ))}
          </CheckboxGroup>
          {room.windowDecorationDetails.length > 0 && (
            <CurtainSizes roomName={roomName} />
          )}
        </div>
      )}
      {room.windowDecoration.includes("Wooden Blinds") && (
        <div className="flex flex-col gap-4">
          <h1 className="font-sans text-xl font-bold">{Questions[6].text}</h1>
          <CheckboxGroup
            value={room.windowDecorationDetails}
            onValueChange={(selectedWoodenBlinds) =>
              handleChange(room.rooms, selectedWoodenBlinds)
            }
          >
            {Questions[6].options.map((option) => (
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
                key={option}
                value={option}
              >
                {option}
              </Checkbox>
            ))}
          </CheckboxGroup>
          {room.windowDecorationDetails.length > 0 && (
            <AmountWindows roomName={roomName} />
          )}
        </div>
      )}
      {room.windowDecoration.includes("Aluminum Blinds") && (
        <div className="flex flex-col gap-4">
          <h1 className="font-sans text-xl font-bold">{Questions[5].text}</h1>
          <CheckboxGroup
            value={room.windowDecorationDetails}
            onValueChange={(selectedAluminumBlinds) =>
              handleChange(room.rooms, selectedAluminumBlinds)
            }
          >
            {Questions[5].options.map((option) => (
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
                key={option}
                value={option}
              >
                {option}
              </Checkbox>
            ))}
          </CheckboxGroup>
          {room.windowDecorationDetails.length > 0 && (
            <AmountWindows roomName={roomName} />
          )}
        </div>
      )}
      {room.windowDecoration.includes("Duet Curtains") && (
        <div className="flex flex-col gap-4">
          <h1 className="font-sans text-xl font-bold">{Questions[8].text}</h1>
          <CheckboxGroup
            value={room.windowDecorationDetails}
            onValueChange={(selectedDuetCurtains) =>
              handleChange(room.rooms, selectedDuetCurtains)
            }
          >
            {Questions[8].options.map((option) => (
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
                key={option}
                value={option}
              >
                {option}
              </Checkbox>
            ))}
          </CheckboxGroup>
          {room.windowDecorationDetails.length > 0 && (
            <AmountWindows roomName={roomName} />
          )}
        </div>
      )}
      {room.windowDecoration.includes("Pleated Curtains") && (
        <div className="flex flex-col gap-4">
          <h1 className="font-sans text-xl font-bold">{Questions[9].text}</h1>
          <CheckboxGroup
            value={room.windowDecorationDetails}
            onValueChange={(selectedPleatedCurtains) =>
              handleChange(room.rooms, selectedPleatedCurtains)
            }
          >
            {Questions[9].options.map((option) => (
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
                key={option}
                value={option}
              >
                {option}
              </Checkbox>
            ))}
          </CheckboxGroup>
          {room.windowDecorationDetails.length > 0 && (
            <AmountWindows roomName={roomName} />
          )}
        </div>
      )}
    </div>
  );
};
