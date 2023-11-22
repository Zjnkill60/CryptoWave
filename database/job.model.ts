import mongoose, { Schema, model, Document, models } from "mongoose";
import User from "./user.model";
import Banking from "./banking.model";

export interface IJob extends Document {
  user : Schema.Types.ObjectId;
  banking : Schema.Types.ObjectId;
  taskName: string;
  avatarSelect: string;
  status:string;
  nameSelect: string;
  quantity: number;
  timeZone : string;  
  timeCreated : Date
}

export const JobSchema: Schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true,
      },
    banking: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:Banking
    },

    taskName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    avatarSelect: {
        type: String,
        required: true,
    },
    nameSelect: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    timeZone: {
        type: String,
        required: false,
    },
    timeCreated:{
        type:Date,
        default : Date.now()
    }
});
let Job = models?.Job || model("Job", JobSchema);
export default Job; //like this try to export every model in you app like this and it should work123
