"use client";
import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectedOption {
  value: string;
  selectedValues: string[];
}

interface IFormData {
  selectedValues: SelectedOption[];
}

const firstOptions: Option[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const secondOptions: Option[] = [
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
  { value: "option6", label: "Option 6" },
];

const Form = () => {
  const [formData, setFormData] = useState<IFormData>({ selectedValues: [] });

  const handleCheckboxChangeFirst = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked, value } = event.target;
    if (checked) {
      setFormData({
        ...formData,
        selectedValues: [
          ...formData.selectedValues,
          { value, selectedValues: [] },
        ],
      });
    } else {
      setFormData({
        ...formData,
        selectedValues: formData.selectedValues.filter(
          (option) => option.value !== value
        ),
      });
    }
  };

  const handleCheckboxChangeSecond = (
    firstValue: string,
    secondValue: string,
    checked: boolean
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedValues: prevData.selectedValues.map((option) => {
        if (option.value === firstValue) {
          if (checked) {
            return {
              ...option,
              selectedValues: [...option.selectedValues, secondValue],
            };
          } else {
            return {
              ...option,
              selectedValues: option.selectedValues.filter(
                (v) => v !== secondValue
              ),
            };
          }
        }
        return option;
      }),
    }));
  };

  console.log(formData);

  return (
    <form>
      {firstOptions.map((option) => (
        <div key={option.value}>
          <input
            type="checkbox"
            value={option.value}
            checked={formData.selectedValues.some(
              (v) => v.value === option.value
            )}
            onChange={handleCheckboxChangeFirst}
          />
          {option.label}
          {formData.selectedValues.find((v) => v.value === option.value) && (
            <div>
              {secondOptions.map((secondOption) => (
                <div key={secondOption.value}>
                  <input
                    type="checkbox"
                    value={secondOption.value}
                    checked={
                      formData.selectedValues
                        .find((v) => v.value === option.value)
                        ?.selectedValues.includes(secondOption.value) || false
                    }
                    onChange={(e) =>
                      handleCheckboxChangeSecond(
                        option.value,
                        secondOption.value,
                        e.target.checked
                      )
                    }
                  />
                  {secondOption.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </form>
  );
};

export default Form;
