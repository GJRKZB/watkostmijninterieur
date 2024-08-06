import { z } from "zod";

export interface IError {
  firstName?: string[];
  email?: string[];
}

const userSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters long")
    .max(18),
  email: z.string().email("Email is invalid"),
});

export default userSchema;
