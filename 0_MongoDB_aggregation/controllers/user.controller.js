import { data } from "../Data/data.js";
import { User } from "../models/user.model.js";

export const userController = async (req, res) => {
  /**
   * get user data from Data/data.js
   * insertMeny in db
   */

  try {
    const insertAllData = await User.insertMany(data);

    return res
      .status(201)
      .json({ message: "successfully insert", insertAllData });
  } 
  catch (error) {
    console.log(error);
  }
};
