import { IContactFormData, IErrors } from "../models/user";

export const validateContactFormData = (data: IContactFormData): IErrors => {
  const errors: IErrors = {};

  if (!data.name) {
    errors.name = "Name is required";
  } else if (data.name.length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
  }

  return errors;
};
