import { Schema, model, models } from "mongoose";

export interface IContactFormData {
  name: string;
  email: string;
  phone?: string;
}

export interface IErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const UserSchema = new Schema<IContactFormData>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: false },
});

const User = models.User || model<IContactFormData>("User", UserSchema);

export default User;
