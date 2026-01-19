import { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Author",
      required: true
    },
  },
  { timestamps: true }
);

export const Book = model("Book", bookSchema);
