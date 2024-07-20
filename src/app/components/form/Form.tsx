"use client";

import React, { useState } from "react";
import { questions } from "@/app/data/questions";
import { IFormData } from "@/app/types/types";
import { First } from "./first/First";
import { Second } from "./second/Second";
import { Third } from "./third/Third";
import { Contact } from "./contact/Contact";
import axios from "axios";

const Form: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    email: "",
    phoneNumber: "",
    choices: [],
  });
  const [step, setStep] = useState(0);

  const handleRoomSelection = (room: string) => {
    setFormData((prevData) => {
      const existingRoom = prevData.choices.find((c) => c.room === room);
      if (existingRoom) {
        return {
          ...prevData,
          choices: prevData.choices.filter((c) => c.room !== room),
        };
      } else {
        return {
          ...prevData,
          choices: [...prevData.choices, { room }],
        };
      }
    });
  };

  const handleFloorSelection = (room: string, floor: string) => {
    setFormData((prevData) => ({
      ...prevData,
      choices: prevData.choices.map((c) =>
        c.room === room ? { ...c, floor } : c
      ),
    }));
  };

  const handleSizeSelection = (room: string, size: string) => {
    setFormData((prevData) => ({
      ...prevData,
      choices: prevData.choices.map((c) =>
        c.room === room ? { ...c, size } : c
      ),
    }));
  };

  const handleContactDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        throw new Error("API URL is not defined");
      }
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(formData);
      console.log("Success:", response.data);
    } catch (error) {
      console.log(error);
    }
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <First
            questions={questions}
            formData={formData}
            handleRoomSelection={handleRoomSelection}
          />
        );
      case 1:
        return (
          <Second
            questions={questions}
            formData={formData}
            handleFloorSelection={handleFloorSelection}
          />
        );
      case 2:
        return (
          <Third
            questions={questions}
            formData={formData}
            handleSizeSelection={handleSizeSelection}
          />
        );
      case 3:
        return (
          <Contact
            formData={formData}
            handleContactDetails={handleContactDetails}
          />
        );
      default:
        return <div>Thank you for submitting the form!</div>;
    }
  };

  const renderNavigationButtons = () => (
    <div>
      {step > 0 && step < 4 && (
        <button type="button" onClick={() => setStep(step - 1)}>
          Back
        </button>
      )}
      {step < 3 && (
        <button type="button" onClick={() => setStep(step + 1)}>
          Next
        </button>
      )}
      {step === 3 && <button type="submit">Submit</button>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      {renderStep()}
      {renderNavigationButtons()}
    </form>
  );
};

export default Form;
