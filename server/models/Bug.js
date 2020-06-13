import mongoose from "mongoose";
let Schema = mongoose.Schema;

const Bug = new Schema(
  {
    closed: { type: Boolean, required: true, default: false },
    description: { type: String, required: true },
    title: { type: String, required: true },
    creatorEmail: { type: String, required: true },
    user: { type: String, required: true },
    tech: { type: String },
    bugType: {
      type: String,
      enum: ["backend", "frontend", "devops"],
      default: "none",
    },
    collaborators: [{ type: String }],
    closedDate: { type: Date },
  },
  { timestamps: true }
);

Bug.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true,
});

//CASCADE ON DELETE
Bug.pre("deleteMany", function (next) {
  //lets find all the Bugs and remove them
  Promise.all([
    //something like...
    //dbContext.Task.deleteMany({ BugId: this._conditions_id }),
  ])
    .then(() => next())
    .catch((err) => next(err));
});

//CASCADE ON DELETE
Bug.pre("findOneAndRemove", function (next) {
  //lets find all the Bugs and remove them
  Promise.all([
    // dbContext.Task.deleteMany({ boardId: this._conditions._id })
  ])
    .then(() => next())
    .catch((err) => next(err));
});

export default Bug;
