import { Schema, model, models } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  telephone?: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telephone: { type: String, required: false },
});

const User = models.User || model<IUser>("User", UserSchema);

export default User;
