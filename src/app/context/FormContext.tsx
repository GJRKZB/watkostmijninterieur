"use client";

import React, { createContext, useContext, useState, FormEvent } from "react";
import axios from "axios";

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
  firstName: string;
  email: string;
  phoneNumber?: string;
  rooms: IRoom[];
}

interface IFormContext {
  formData: IFormData;
  updateFormData: (data: Partial<IFormData>) => void;
  currentStep: number;
  nextStep: () => void;
  backStep: () => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isSubmitted: boolean;
  isLoading: boolean;
  error: string | null;
}

const FormContext = createContext<IFormContext | undefined>(undefined);
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    email: "",
    phoneNumber: "",
    rooms: [],
  });
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

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_URL}/price`, formData);
      const data = response.data;
      setIsSubmitted(true);
      console.log(data);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        nextStep,
        backStep,
        handleSubmit,
        isSubmitted,
        isLoading,
        error,
      }}
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
