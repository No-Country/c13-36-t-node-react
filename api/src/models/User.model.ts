import { Schema, model } from "mongoose";
import modelOptions from "./modelOptions";
import { type User } from "../types/user";

const UserSchema = new Schema<User>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    locatization: {
      type: Object,
    },
    phone: {
      type: Number,
      required: true,
    },
  },
  modelOptions
);

const UserModel = model("User", UserSchema);
export default UserModel;
