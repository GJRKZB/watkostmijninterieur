"use client";

import { createContext, useContext, useState } from "react";

export interface IRoom {
  rooms: string;
  floors: string[];
  sizes: string[];
  windowDecoration: string[];
  windowDecorationDetails: string[];
  amountWindows: string[];
  windowSizes: string[];
  curtainSizes: string[];
  furniture: string[];
  furnitureQuality: string[];
}

interface IFormData {
  rooms: IRoom[];
}

interface IFormContext {
  formData: IFormData;
  updateFormData: (data: Partial<IFormData>) => void;
  currentStep: number;
  nextStep: () => void;
  backStep: () => void;
}

const FormContext = createContext<IFormContext | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<IFormData>({ rooms: [] });
  const [currentStep, setCurrentStep] = useState(1);

  console.log(formData);
  const updateFormData = (newData: Partial<IFormData>) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const backStep = () => {
    setCurrentStep(Math.max(1, currentStep - 1));
  };

  return (
    <FormContext.Provider
      value={{ formData, updateFormData, currentStep, nextStep, backStep }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export default FormContext;
