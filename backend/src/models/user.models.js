import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    number: {
      type: String,
      required: [true, "Number is required"],
    },
    otp: {
      type: String,
      required: true,
      trim: true,
    },
  },

  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
