import mongoose, { Schema, model, Document, models } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  picture: string;
  joinedAt: Date;
}

export const UserSchema: Schema = new Schema({
  clerkId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,

    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },

  picture: {
    type: String,
    required: true,
  },

  joinedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
let User = models?.User || model("User", UserSchema);
export default User; //like this try to export every model in you app like this and it should work
