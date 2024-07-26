"use client";

import { useFormContext } from "@/app/context/FormContext";
import { Rooms } from "../FormSteps/Rooms/Rooms";
import { Floors } from "../FormSteps/Floors/Floors";

export const MultiStepForm: React.FC = () => {
  const { currentStep, nextStep, backStep } = useFormContext();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Rooms />;
      case 2:
        return <Floors />;
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
