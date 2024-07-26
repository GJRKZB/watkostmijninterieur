"use client";

import { createContext, useContext, useState } from "react";

interface IFormData {
  rooms?: string[];
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
  const [formData, setFormData] = useState<IFormData>({});
  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (newData: Partial<IFormData>) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const backStep = () => {
    setCurrentStep(currentStep - 1);
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
