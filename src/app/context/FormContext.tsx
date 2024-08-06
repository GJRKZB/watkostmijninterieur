"use client";

import React, { createContext, useContext, useState, FormEvent } from "react";
import userSchema from "../utils/FormValidation";
import axios from "axios";
import { IError } from "../utils/FormValidation";

export interface IRoom {
  rooms: string;
  floors: string[];
  sizes: string[];
  windowDecoration: string[];
  windowDecorationDetails: string[];
  amountWindows: string;
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
  error: IError;
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
  const [error, setError] = useState<IError>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const parseContact = userSchema.safeParse({
      firstName: formData.firstName,
      email: formData.email,
    });
    if (!parseContact.success) {
      setError(parseContact.error.formErrors.fieldErrors);
      setIsLoading(false);
      return;
    }

    setError({});
    try {
      // const response = await axios.post(`${API_URL}/price`, formData);
      // const data = response.data;
      // console.log(data);
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form succesfully submitted:", formData);
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error(error);
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
