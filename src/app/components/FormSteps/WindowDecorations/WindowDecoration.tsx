import { useFormContext } from "@/app/context/FormContext";
import { WindowDecorationDetails } from "./WindowDecorationDetails/WindowDecorationDetails";
import { Questions } from "@/app/data/Questions";
import { RadioGroup, Radio, cn, ScrollShadow, Chip } from "@nextui-org/react";

export const WindowDecoration: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    selectedWindowDecorations: string,
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        return { ...room, windowDecoration: [selectedWindowDecorations] };
      }
      return room;
    });

    updateFormData({ rooms: updatedRooms });
  };

  return (
    <>
      <h1 className="font-sans text-xl font-bold">{Questions[3].text}</h1>
      <ScrollShadow>
        <div className="flex flex-col gap-4">
          {formData.rooms.map((room) => (
            <div className="flex flex-col gap-4" key={room.rooms}>
              <Chip size="md" color="primary" variant="solid">
                {room.rooms}
              </Chip>
              <RadioGroup
                value={room.windowDecoration[0] || ""}
                onValueChange={(selectedWindowDecorations) =>
                  handleChange(room.rooms, selectedWindowDecorations)
                }
              >
                {Questions[3].options.map((WindowDecorationProduct) => (
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
                    key={WindowDecorationProduct}
                    value={WindowDecorationProduct}
                  >
                    {WindowDecorationProduct}
                  </Radio>
                ))}
              </RadioGroup>
              <WindowDecorationDetails roomName={room.rooms} />
            </div>
          ))}
        </div>
      </ScrollShadow>
    </>
  );
};
