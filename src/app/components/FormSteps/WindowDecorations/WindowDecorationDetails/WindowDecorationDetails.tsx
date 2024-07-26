import React from "react";
import { useFormContext, IRoom } from "@/app/context/FormContext";

interface WindowDecorationDetailsProps {
  room: IRoom;
}

export const WindowDecorationDetails: React.FC<
  WindowDecorationDetailsProps
> = ({ room }) => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (
    roomName: string,
    windowDecorationDetail: string,
    checked: boolean
  ) => {
    const updatedRooms = formData.rooms.map((room) => {
      if (room.name === roomName) {
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

  const renderCheckboxGroup = (
    options: string[],
    title: string,
    productDetail: string
  ) => (
    <div key={`${room.name}-${productDetail}`}>
      <h3>{title}</h3>
      {options.map((option) => (
        <label key={`${room.name}-${productDetail}-${option}`}>
          <input
            type="checkbox"
            name={`windowDecorationDetails-${room.name}-${productDetail}`}
            value={option}
            checked={room.windowDecorationDetails.includes(option)}
            onChange={(e) => handleChange(room.name, option, e.target.checked)}
          />
          {option}
        </label>
      ))}
    </div>
  );

  const renderQuestions = () => {
    const questions = [];

    if (room.windowDecoration.includes("Inbetweens")) {
      questions.push(
        renderCheckboxGroup(
          ["Essential", "Comfort", "Premium"],
          "Which type of quality inbetweens?",
          "Inbetweens"
        )
      );
    }

    if (room.windowDecoration.includes("Aluminum Blinds")) {
      questions.push(
        renderCheckboxGroup(
          ["25mm", "50mm"],
          "What size of aluminum blinds?",
          "AluminumBlinds"
        )
      );
    }

    if (room.windowDecoration.includes("Wooden Blinds")) {
      questions.push(
        renderCheckboxGroup(
          ["50mm", "60mm"],
          "What size of wooden blinds?",
          "WoodenBlinds"
        )
      );
    }

    if (room.windowDecoration.includes("Curtains")) {
      questions.push(
        renderCheckboxGroup(
          ["Essential", "Comfort", "Premium"],
          "What quality of curtains?",
          "Curtains"
        )
      );
    }

    if (room.windowDecoration.includes("Duet Curtains")) {
      questions.push(
        renderCheckboxGroup(
          ["25mm", "32mm"],
          "What size of duet curtains?",
          "DuetCurtains"
        )
      );
    }

    if (room.windowDecoration.includes("Pleated Curtains")) {
      questions.push(
        renderCheckboxGroup(
          ["20mm", "32mm"],
          "What size of pleated curtains?",
          "PleatedCurtains"
        )
      );
    }

    return questions;
  };

  return <>{renderQuestions()}</>;
};
