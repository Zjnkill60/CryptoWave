import mongoose, { Schema, model, Document, models } from "mongoose";

export interface IUser extends Document {
  id: string;
  description: string;
  amount: number;
  balance: number;
  timeBanking : Date;  
}

export const BankingSchema: Schema = new Schema({
    id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,

    unique: true,
  },
  balance: {
    type: Number,
    required: true,
    unique: true,
  },
  timeBanking: {
    type: Date,
    required: false,
  }
});
let Banking = models?.Banking || model("Banking", BankingSchema);
export default Banking; //like this try to export every model in you app like this and it should work
