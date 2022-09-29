import { Schema, Document, model } from "mongoose";

export interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
export interface IUserDocument extends IUser, Document {
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

export default model<IUserDocument>("User", schema);
