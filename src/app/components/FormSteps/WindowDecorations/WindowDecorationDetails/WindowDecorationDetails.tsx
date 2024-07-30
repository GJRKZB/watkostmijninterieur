import { useFormContext } from "@/app/context/FormContext";
import { AmountWindows } from "../AmountWindows/AmountWindows";
import { WindowSizes } from "../WindowSizes/WindowSizes";
import { CurtainSizes } from "../CurtainSizes/CurtainSizes";
import { Questions } from "@/app/data/Questions";

interface IWindowDecorationDetailsProps {
  windowDecoration: string[];
  roomName: string;
}

export const WindowDecorationDetails: React.FC<
  IWindowDecorationDetailsProps
> = ({ windowDecoration, roomName }) => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    windowDecorationDetail: string,
    checked: boolean
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        let updatedWindowDecorationDetails = [...room.windowDecorationDetails];
        if (checked) {
          updatedWindowDecorationDetails.push(windowDecorationDetail);
        } else {
          updatedWindowDecorationDetails =
            updatedWindowDecorationDetails.filter(
              (detail) => detail !== windowDecorationDetail
            );
        }
        return {
          ...room,
          windowDecorationDetails: updatedWindowDecorationDetails,
        };
      }
      return room;
    });
    updateFormData({ rooms: updatedRooms });
  };

  const renderWindowDecorationDetails = () => {
    return (
      <div>
        {windowDecoration.map((decoration) => {
          const questionIndex =
            {
              Curtains: 7,
              "Wooden Blinds": 6,
              "Aluminum Blinds": 5,
              "Duet Curtains": 8,
              "Pleated Curtains": 9,
              Inbetweens: 4,
            }[decoration] || -1;

          if (
            questionIndex === -1 ||
            decoration === "No window decoration needed"
          ) {
            return null;
          }

          const showAmountAndSizes = [
            "Wooden Blinds",
            "Aluminum Blinds",
            "Duet Curtains",
            "Pleated Curtains",
          ].includes(decoration);
          const showCurtainSizes = ["Curtains", "Inbetweens"].includes(
            decoration
          );

          return (
            <div key={decoration}>
              <h1>{Questions[questionIndex].text}</h1>
              {Questions[questionIndex].options.map((option) => (
                <label key={option}>
                  <input
                    type="checkbox"
                    name={`windowDecorationDetails-${decoration}`}
                    value={option}
                    checked={formData.rooms
                      .find((room) => room.rooms === roomName)
                      ?.windowDecorationDetails.includes(option)}
                    onChange={(e) =>
                      handleChange(roomName, option, e.target.checked)
                    }
                  />
                  {option}
                </label>
              ))}
              {showAmountAndSizes && <AmountWindows roomName={roomName} />}
              {showCurtainSizes && <CurtainSizes roomName={roomName} />}
            </div>
          );
        })}
      </div>
    );
  };

  return <div>{renderWindowDecorationDetails()}</div>;
};
