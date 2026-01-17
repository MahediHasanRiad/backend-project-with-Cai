import { User } from "../models/user.model.js";

export const removeAllUser = async (req, res) => {
  try {
    await User.deleteMany({});

    return res.status(200).json({ message: "all user data removed" });
  } 
  catch (error) {
    console.log(error);
  }
};
