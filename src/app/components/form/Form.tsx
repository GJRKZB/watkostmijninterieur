"use client";

import { useState } from "react";
import { Label } from "./Label";
import { InputField } from "./InputField";

export const Form: React.FC = () => {
  const [value, setValue] = useState("");

  const classes = "flex flex-col";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes}>
      <Label text="Label" htmlFor="text" />
      <InputField
        type="text"
        name="text"
        placeholder="Enter text"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};
