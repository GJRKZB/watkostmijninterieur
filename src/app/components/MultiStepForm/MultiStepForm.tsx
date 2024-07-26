"use client";

import { useFormContext } from "@/app/context/FormContext";
import { Rooms } from "../FormSteps/Rooms/Rooms";
import { Floors } from "../FormSteps/Floors/Floors";
import { RoomSizes } from "../FormSteps/RoomSizes/RoomSizes";
import { WindowDecoration } from "../FormSteps/WindowDecorations/WindowDecoration";

export const MultiStepForm: React.FC = () => {
  const { currentStep, nextStep, backStep } = useFormContext();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Rooms />;
      case 2:
        return <Floors />;
      case 3:
        return <RoomSizes />;
      case 4:
        return <WindowDecoration />;
      default:
        return <div>Thank you for submitting the form!</div>;
    }
  };

  return (
    <div>
      {renderStep()}
      <button onClick={backStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};
