"use client";

import { useFormContext } from "@/app/context/FormContext";
import { Rooms } from "../FormSteps/Rooms/Rooms";
import { Floors } from "../FormSteps/Floors/Floors";
import { RoomSizes } from "../FormSteps/RoomSizes/RoomSizes";
import { WindowDecoration } from "../FormSteps/WindowDecorations/WindowDecoration";
import { Furniture } from "../FormSteps/Furniture/Furniture";
import { Contact } from "../FormSteps/Contact/Contact";

const TOTAL_STEPS = 6;

export const MultiStepForm: React.FC = () => {
  const {
    currentStep,
    nextStep,
    backStep,
    handleSubmit,
    isSubmitted,
    isLoading,
  } = useFormContext();

  if (isSubmitted) {
    return <div>Thank you for submitting the form!</div>;
  }

  console.log(isSubmitted);

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
      case 5:
        return <Furniture />;
      case 6:
        return <Contact />;
      default:
        return null;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {renderStep()}
      <div>
        {currentStep > 1 && (
          <button type="button" onClick={backStep} disabled={isLoading}>
            Back
          </button>
        )}
        {currentStep < TOTAL_STEPS && (
          <button type="button" onClick={nextStep} disabled={isLoading}>
            Next
          </button>
        )}
        {currentStep === TOTAL_STEPS && (
          <button type="submit" disabled={isLoading}>
            Submit
          </button>
        )}
      </div>
    </form>
  );
};
