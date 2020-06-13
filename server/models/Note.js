import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = mongoose.Types.ObjectId;

const Note = new Schema(
  {
    content: { type: String, required: true },
    bug: { type: ObjectId, ref: "Bug", required: true },
    creatorEmail: { type: String, required: true },
    user: { type: String, required: true },
    flagged: {
      type: String,
      enum: ["pending", "completed", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default Note;
