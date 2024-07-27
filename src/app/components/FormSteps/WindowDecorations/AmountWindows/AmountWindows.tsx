import { useFormContext } from "@/app/context/FormContext";
import { Questions } from "@/app/data/Questions";

interface IAmountWindowsProps {
  windowDecorationDetails: string[];
  roomName: string;
}

export const AmountWindows: React.FC<IAmountWindowsProps> = ({
  windowDecorationDetails,
  roomName,
}) => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomSelected: string,
    amountWindows: string,
    checked: boolean
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.rooms === roomSelected) {
        let updatedAmountWindows = [...room.amountWindows];
        if (checked) {
          updatedAmountWindows.push(amountWindows);
        } else {
          updatedAmountWindows = updatedAmountWindows.filter(
            (window) => window !== amountWindows
          );
        }
        return {
          ...room,
          amountWindows: updatedAmountWindows,
        };
      }
      return room;
    });
    updateFormData({ rooms: updatedRooms });
  };

  return (
    <div>
      {windowDecorationDetails.map((decoration) => (
        <div key={decoration}>
          <h1>{Questions[10].text}</h1>
          {Questions[10].options.map((amountWindows) => (
            <label key={amountWindows}>
              <input
                type="checkbox"
                name={`amountWindows-${decoration}`}
                value={amountWindows}
                checked={formData.rooms
                  .find((room) => room.rooms === roomName)
                  ?.amountWindows.includes(amountWindows)}
                onChange={(e) => {
                  handleChange(roomName, amountWindows, e.target.checked);
                }}
              />
              {amountWindows}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};
