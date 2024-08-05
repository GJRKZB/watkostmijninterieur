"use client";

import { useFormContext } from "@/app/context/FormContext";
import { Rooms } from "../FormSteps/Rooms/Rooms";
import { Floors } from "../FormSteps/Floors/Floors";
import { RoomSizes } from "../FormSteps/RoomSizes/RoomSizes";
import { WindowDecoration } from "../FormSteps/WindowDecorations/WindowDecoration";
import { Furniture } from "../FormSteps/Furniture/Furniture";
import { Contact } from "../FormSteps/Contact/Contact";
import { Conformation } from "../FormSteps/Conformation/Conformation";
import { Card, Button } from "@nextui-org/react";

const TOTAL_STEPS = 6;

export const MultiStepForm: React.FC = () => {
  const { currentStep, nextStep, backStep, handleSubmit, isLoading } =
    useFormContext();

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
      case 7:
        return <Conformation />;
      default:
        return null;
    }
  };
  return (
    <Card className="h-full w-full p-8">
      <form onSubmit={handleSubmit} className="flex h-full flex-col gap-4">
        {renderStep()}
        <div className="mt-auto flex w-full flex-row justify-between">
          {currentStep > 1 && currentStep < TOTAL_STEPS && (
            <Button
              size="md"
              color="primary"
              variant="solid"
              radius="sm"
              onClick={backStep}
              disabled={isLoading}
            >
              Back
            </Button>
          )}
          {currentStep < TOTAL_STEPS && (
            <Button
              size="md"
              color="primary"
              variant="solid"
              radius="sm"
              onClick={nextStep}
              disabled={isLoading}
            >
              Next
            </Button>
          )}
          {currentStep === TOTAL_STEPS && (
            <Button
              type="submit"
              size="md"
              color="primary"
              variant="solid"
              radius="sm"
              disabled={isLoading}
            >
              Submit
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
};
