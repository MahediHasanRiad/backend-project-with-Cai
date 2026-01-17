import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    index: Number,
    name: {
      type: String,
      required: true,
    },
    isActive: Boolean,
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    eyeColor: {
      type: String,
    },
    favoriteFruit: {
      type: String,
    },
    company: {
      title: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        // validate: {
        //   validator: function (v) {
        //     return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
        //   },
        //   message: (props) => `${props.value} is not a valid Email !`,
        // },
      },
      phone: {
        type: String,
        required: true,
        // validate: {
        //   validator: function (v) {
        //     return /\d{3}-\d{3}-\d{4}/.test(v);
        //   },
        //   message: (props) => `${props.value} is not a valid phone number!`,
        // },
      },
      location: {
        country: {
          type: String,
          required: true,
        },
        address: {
          type: String,
          required: true,
        },
      },
    },
    tags: [""],
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
