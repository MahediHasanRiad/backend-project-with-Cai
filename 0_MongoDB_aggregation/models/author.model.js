import { Schema, model } from "mongoose";

const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    birth_year: {
      type: Number,
      required: true,
      min: 1000,
      max: new Date().getFullYear(),
    },
  },
  { timestamps: true }
);

export const Author = model("Author", authorSchema);
