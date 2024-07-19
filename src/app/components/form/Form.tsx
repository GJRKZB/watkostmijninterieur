"use client";

import React, { useState } from "react";
import { IFormData } from "@/app/types/types";
import { FirstStep } from "./first-step/FirstStep";
import { SecondStep } from "./second-step/SecondStep";
import { ThirdStep } from "./third-step/ThirdStep";
import { questions } from "@/app/data/questions";
import { ContactDetails } from "./contact-details/ContactDetails";

const Form: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    email: "",
    phoneNumber: "",
    choices: [],
  });

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("FormData:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FirstStep
        questions={questions}
        formData={formData}
        handleRoomSelection={handleRoomSelection}
      />
      <SecondStep
        questions={questions}
        formData={formData}
        handleFloorSelection={handleFloorSelection}
      />
      <ThirdStep
        questions={questions}
        formData={formData}
        handleSizeSelection={handleSizeSelection}
      />
      <ContactDetails
        formData={formData}
        handleContactDetails={handleContactDetails}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
